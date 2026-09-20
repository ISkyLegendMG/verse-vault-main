import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { DbPoem } from "@/types/poem";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Check, X, Eye, Trash2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";
import { categories } from "@/components/BottomNav";
import PoemModal from "@/components/PoemModal";

const SUPERADMIN_EMAIL = "admin@versos.com";

type FilterStatus = "pending" | "approved" | "all";

const AdminPanel = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [poems, setPoems] = useState<DbPoem[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<FilterStatus>("pending");
  const [selectedPoem, setSelectedPoem] = useState<DbPoem | null>(null);
  const [processing, setProcessing] = useState<string | null>(null);

  const isAdmin = user?.email === SUPERADMIN_EMAIL;

  useEffect(() => {
    if (authLoading) return;
    if (!user || !isAdmin) {
      navigate("/");
      return;
    }
    fetchPoems();
  }, [user, authLoading]);

  const fetchPoems = async () => {
    setLoading(true);
    const { data } = await supabase
      .from("poems")
      .select("*")
      .order("created_at", { ascending: false });
    setPoems((data as DbPoem[]) || []);
    setLoading(false);
  };

  const handleApprove = async (id: string) => {
    setProcessing(id);
    const { error } = await supabase.from("poems").update({ approved: true } as any).eq("id", id);
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Aprobado", description: "El contenido es ahora público" });
      setPoems((prev) => prev.map((p) => (p.id === id ? { ...p, approved: true } : p)));
    }
    setProcessing(null);
  };

  const handleReject = async (id: string) => {
    setProcessing(id);
    const { error } = await supabase.from("poems").update({ approved: false } as any).eq("id", id);
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Rechazado", description: "El contenido ya no es público" });
      setPoems((prev) => prev.map((p) => (p.id === id ? { ...p, approved: false } : p)));
    }
    setProcessing(null);
  };

  const handleDelete = async (id: string) => {
    setProcessing(id);
    const { error } = await supabase.from("poems").delete().eq("id", id);
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Eliminado", description: "Contenido eliminado" });
      setPoems((prev) => prev.filter((p) => p.id !== id));
    }
    setProcessing(null);
  };

  const filtered = poems.filter((p) => {
    if (filter === "pending") return !(p as any).approved;
    if (filter === "approved") return (p as any).approved;
    return true;
  });

  const pendingCount = poems.filter((p) => !(p as any).approved).length;
  const approvedCount = poems.filter((p) => (p as any).approved).length;

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 size={24} className="text-gold animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border/50 bg-card/90 backdrop-blur-md safe-area-top">
        <div className="flex items-center justify-between px-4 py-3 max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate("/")} className="text-muted-foreground hover:text-gold transition-colors p-1">
              <ArrowLeft size={18} />
            </button>
            <div>
              <h1 className="font-display font-bold text-base text-foreground">Panel de Administración</h1>
              <p className="text-muted-foreground text-xs font-body">{pendingCount} pendientes · {approvedCount} aprobados</p>
            </div>
          </div>
        </div>
      </header>

      {/* Filter tabs */}
      <div className="sticky top-[53px] z-30 border-b border-border/50 bg-card/90 backdrop-blur-md px-4 py-2">
        <div className="max-w-4xl mx-auto flex gap-1.5">
          {([
            { id: "pending" as FilterStatus, label: "Pendientes", count: pendingCount },
            { id: "approved" as FilterStatus, label: "Aprobados", count: approvedCount },
            { id: "all" as FilterStatus, label: "Todos", count: poems.length },
          ]).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={cn(
                "px-3 py-1.5 rounded-full text-xs font-body whitespace-nowrap transition-all border",
                filter === tab.id
                  ? "bg-gold/15 text-gold border-gold/30"
                  : "text-muted-foreground hover:text-foreground border-transparent hover:bg-muted/50"
              )}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-6 pb-20">
        {loading ? (
          <div className="flex flex-col items-center gap-4 py-20">
            <Loader2 size={24} className="text-gold animate-spin" />
            <p className="font-body text-sm text-muted-foreground">Cargando...</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center gap-4 py-20 animate-fade-in-up">
            <div className="w-16 h-16 rounded-2xl bg-muted/50 flex items-center justify-center border border-border">
              <Check size={24} className="text-muted-foreground/50" />
            </div>
            <p className="font-display text-lg text-muted-foreground text-center">
              {filter === "pending" ? "No hay contenido pendiente" : "Sin contenido"}
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {filtered.map((poem, i) => {
              const cat = categories.find((c) => c.id === poem.category);
              const isApproved = (poem as any).approved;
              return (
                <div
                  key={poem.id}
                  className={cn(
                    "group relative flex items-start gap-4 p-4 rounded-xl border bg-card/80 backdrop-blur-sm transition-all animate-fade-in-up",
                    isApproved ? "border-green-500/30" : "border-amber-500/30"
                  )}
                  style={{ animationDelay: `${i * 40}ms`, animationFillMode: "both" }}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={cn(
                        "text-[10px] font-body px-2 py-0.5 rounded-full border",
                        isApproved 
                          ? "bg-green-500/10 text-green-500 border-green-500/30" 
                          : "bg-amber-500/10 text-amber-500 border-amber-500/30"
                      )}>
                        {isApproved ? "Aprobado" : "Pendiente"}
                      </span>
                      <span className="text-muted-foreground text-[10px] font-body uppercase tracking-wider">{cat?.label}</span>
                    </div>
                    <h3 className="font-display font-semibold text-sm text-foreground truncate">{poem.title}</h3>
                    <p className="text-muted-foreground text-xs font-body italic truncate mt-0.5">
                      por {poem.author} · {new Date(poem.created_at).toLocaleDateString("es-ES", { day: "numeric", month: "short" })}
                    </p>
                    <p className="text-muted-foreground/60 text-xs font-body truncate mt-0.5">
                      {poem.preview.join(" · ")}
                    </p>
                  </div>

                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      onClick={() => setSelectedPoem(poem)}
                      className="p-2 text-muted-foreground hover:text-gold transition-colors rounded-lg hover:bg-muted/50"
                      title="Ver"
                    >
                      <Eye size={14} />
                    </button>
                    {!isApproved && (
                      <button
                        onClick={() => handleApprove(poem.id)}
                        disabled={processing === poem.id}
                        className="p-2 text-muted-foreground hover:text-green-500 transition-colors rounded-lg hover:bg-green-500/10 disabled:opacity-50"
                        title="Aprobar"
                      >
                        <Check size={14} />
                      </button>
                    )}
                    {isApproved && (
                      <button
                        onClick={() => handleReject(poem.id)}
                        disabled={processing === poem.id}
                        className="p-2 text-muted-foreground hover:text-amber-500 transition-colors rounded-lg hover:bg-amber-500/10 disabled:opacity-50"
                        title="Quitar aprobación"
                      >
                        <X size={14} />
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(poem.id)}
                      disabled={processing === poem.id}
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

      <PoemModal poem={selectedPoem} onClose={() => setSelectedPoem(null)} />
    </div>
  );
};

export default AdminPanel;