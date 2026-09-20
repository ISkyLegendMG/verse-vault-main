import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { DbPoem } from "@/types/poem";
import { ContentCategory } from "@/components/BottomNav";
import { categories } from "@/components/BottomNav";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Plus, Trash2, Eye, Loader2, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";
import PoemModal from "@/components/PoemModal";
import CreatePoemForm from "@/components/CreatePoemForm";

const MyContent = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [poems, setPoems] = useState<DbPoem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPoem, setSelectedPoem] = useState<DbPoem | null>(null);
  const [showCreate, setShowCreate] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [filterCat, setFilterCat] = useState<ContentCategory | "all">("all");

  useEffect(() => {
    if (authLoading) return;
    if (!user) {
      navigate("/auth");
      return;
    }
    fetchMyPoems();
  }, [user, authLoading]);

  const fetchMyPoems = async () => {
    if (!user) return;
    setLoading(true);
    const { data } = await supabase
      .from("poems")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });
    setPoems((data as DbPoem[]) || []);
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    setDeleting(id);
    const { error } = await supabase.from("poems").delete().eq("id", id);
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Eliminado", description: "Contenido eliminado correctamente" });
      setPoems((prev) => prev.filter((p) => p.id !== id));
    }
    setDeleting(null);
  };

  const filtered = filterCat === "all" ? poems : poems.filter((p) => p.category === filterCat);

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 size={24} className="text-gold animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/50 bg-card/90 backdrop-blur-md safe-area-top">
        <div className="flex items-center justify-between px-4 py-3 max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/")}
              className="text-muted-foreground hover:text-gold transition-colors p-1"
            >
              <ArrowLeft size={18} />
            </button>
            <div>
              <h1 className="font-display font-bold text-base text-foreground">Mi Panel</h1>
              <p className="text-muted-foreground text-xs font-body">{poems.length} publicaciones</p>
            </div>
          </div>
          <button
            onClick={() => setShowCreate(true)}
            className="flex items-center gap-1.5 text-gold text-xs font-body bg-gold/10 px-4 py-2 rounded-full border border-gold/30 hover:brightness-110 transition-all"
          >
            <Plus size={14} />
            Crear
          </button>
        </div>
      </header>

      {/* Filter tabs */}
      <div className="sticky top-[53px] z-30 border-b border-border/50 bg-card/90 backdrop-blur-md px-4 py-2">
        <div className="max-w-4xl mx-auto flex gap-1.5 overflow-x-auto scrollbar-hide">
          <button
            onClick={() => setFilterCat("all")}
            className={cn(
              "px-3 py-1.5 rounded-full text-xs font-body whitespace-nowrap transition-all border",
              filterCat === "all"
                ? "bg-gold/15 text-gold border-gold/30"
                : "text-muted-foreground hover:text-foreground border-transparent hover:bg-muted/50"
            )}
          >
            Todo ({poems.length})
          </button>
          {categories.map((cat) => {
            const count = poems.filter((p) => p.category === cat.id).length;
            if (count === 0) return null;
            return (
              <button
                key={cat.id}
                onClick={() => setFilterCat(cat.id)}
                className={cn(
                  "px-3 py-1.5 rounded-full text-xs font-body whitespace-nowrap transition-all border",
                  filterCat === cat.id
                    ? "bg-gold/15 text-gold border-gold/30"
                    : "text-muted-foreground hover:text-foreground border-transparent hover:bg-muted/50"
                )}
              >
                {cat.label} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-6 pb-20">
        {loading ? (
          <div className="flex flex-col items-center gap-4 py-20">
            <Loader2 size={24} className="text-gold animate-spin" />
            <p className="font-body text-sm text-muted-foreground">Cargando...</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center gap-4 py-20 animate-fade-in-up">
            <div className="w-16 h-16 rounded-2xl bg-muted/50 flex items-center justify-center border border-border">
              <FileText size={24} className="text-muted-foreground/50" />
            </div>
            <p className="font-display text-lg text-muted-foreground text-center">
              {poems.length === 0 ? "Aún no has publicado nada" : "Sin contenido en esta categoría"}
            </p>
            <button
              onClick={() => setShowCreate(true)}
              className="text-gold text-sm font-body hover:underline"
            >
              Crear mi primer contenido
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {filtered.map((poem, i) => {
              const cat = categories.find((c) => c.id === poem.category);
              return (
                <div
                  key={poem.id}
                  className="group relative flex items-start gap-4 p-4 rounded-xl border border-border/80 bg-card/80 backdrop-blur-sm hover:border-gold/40 transition-all animate-fade-in-up"
                  style={{ animationDelay: `${i * 50}ms`, animationFillMode: "both" }}
                >
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-muted-foreground text-[10px] font-body uppercase tracking-wider">{cat?.label}</span>
                      <span className="text-muted-foreground/40 text-[10px]">·</span>
                      <span className="text-muted-foreground text-[10px] font-body">
                        {new Date(poem.created_at).toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" })}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-sm text-foreground truncate">{poem.title}</h3>
                    <p className="text-muted-foreground text-xs font-body italic truncate mt-0.5">
                      {poem.preview.join(" · ")}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      onClick={() => setSelectedPoem(poem)}
                      className="p-2 text-muted-foreground hover:text-gold transition-colors rounded-lg hover:bg-muted/50"
                      title="Ver"
                    >
                      <Eye size={14} />
                    </button>
                    <button
                      onClick={() => handleDelete(poem.id)}
                      disabled={deleting === poem.id}
                      className="p-2 text-muted-foreground hover:text-destructive transition-colors rounded-lg hover:bg-destructive/10 disabled:opacity-50"
                      title="Eliminar"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* Modals */}
      <PoemModal poem={selectedPoem} onClose={() => setSelectedPoem(null)} />
      {showCreate && (
        <CreatePoemForm
          onClose={() => setShowCreate(false)}
          onCreated={fetchMyPoems}
        />
      )}
    </div>
  );
};

export default MyContent;