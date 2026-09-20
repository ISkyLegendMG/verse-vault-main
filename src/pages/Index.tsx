import { useState, useMemo, useEffect } from "react";
import { DbPoem } from "@/types/poem";
import { ContentCategory } from "@/components/BottomNav";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import AppHeader from "@/components/AppHeader";
import BottomNav from "@/components/BottomNav";
import PoemCard from "@/components/PoemCard";
import PoemModal from "@/components/PoemModal";
import PoemSearch from "@/components/PoemSearch";
import CreatePoemForm from "@/components/CreatePoemForm";
import HiddenPremium from "@/components/HiddenPremium";
import { categories } from "@/components/BottomNav";
import { Loader2 } from "lucide-react";

const categoryDescriptions: Record<ContentCategory, string> = {
  poemas: "Versos que tocan el alma",
  frases: "Palabras que inspiran",
  motivacion: "Impulso para cada día",
  citas: "Sabiduría de grandes mentes",
  proverbios: "Sabiduría popular ancestral",
  reflexiones: "Pensamientos profundos",
  canciones: "Letras que resuenan",
};

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<ContentCategory>("poemas");
  const [selectedPoem, setSelectedPoem] = useState<DbPoem | null>(null);
  const [query, setQuery] = useState("");
  const [poems, setPoems] = useState<DbPoem[]>([]);
  const [loading, setLoading] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    setLoading(true);
    supabase
      .from("poems")
      .select("*")
      .eq("language", "es")
      .eq("category", activeCategory)
      .eq("is_premium", false)
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        setPoems((data as DbPoem[]) || []);
        setLoading(false);
      });
  }, [activeCategory]);

  const filteredPoems = useMemo(() => {
    if (!query.trim()) return poems;
    const q = query.toLowerCase();
    return poems.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.author.toLowerCase().includes(q)
    );
  }, [poems, query]);

  const refreshPoems = () => {
    supabase
      .from("poems")
      .select("*")
      .eq("language", "es")
      .eq("category", activeCategory)
      .eq("is_premium", false)
      .order("created_at", { ascending: false })
      .then(({ data }) => setPoems((data as DbPoem[]) || []));
  };

  const activeCat = categories.find((c) => c.id === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <AppHeader
        onCreateNew={() => setShowCreate(true)}
      />

      {/* Category tabs */}
      <div className="fixed top-[53px] left-0 right-0 z-30 border-b border-border/30 bg-background/80 backdrop-blur-xl px-4 py-2">
        <div className="max-w-4xl mx-auto">
          <BottomNav active={activeCategory} onChange={(cat) => { setActiveCategory(cat); setQuery(""); }} />
        </div>
      </div>

      {/* Main content */}
      <main className="pt-[110px] sm:pt-[110px] pb-24 sm:pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section title */}
          <div className="text-center mb-8 animate-fade-in-up">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-1.5">
              {activeCat?.label}
            </h2>
            <p className="font-body italic text-muted-foreground/70 text-sm">
              {categoryDescriptions[activeCategory]}
            </p>
          </div>

          {/* Search */}
          <div className="mb-8 flex justify-center">
            <div className="w-full max-w-sm">
              <PoemSearch
                value={query}
                onChange={setQuery}
                resultCount={filteredPoems.length}
                totalCount={poems.length}
              />
            </div>
          </div>

          {/* Content grid */}
          {loading ? (
            <div className="flex flex-col items-center gap-4 py-20">
              <Loader2 size={24} className="text-gold animate-spin" />
              <p className="font-body text-sm text-muted-foreground">Cargando contenido...</p>
            </div>
          ) : filteredPoems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {filteredPoems.map((poem, i) => (
                <PoemCard key={poem.id} poem={poem} index={i} onClick={setSelectedPoem} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3 py-20 animate-fade-in-up">
              <div className="w-16 h-16 rounded-2xl bg-muted/50 flex items-center justify-center border border-border">
                {activeCat && <activeCat.icon size={24} className="text-muted-foreground/50" />}
              </div>
              <p className="font-display text-base text-muted-foreground text-center">
                {query
                  ? "No se encontraron resultados"
                  : `Aún no hay ${activeCat?.label.toLowerCase()}`}
              </p>
              <p className="font-body text-muted-foreground/60 text-xs text-center max-w-[240px]">
                {query
                  ? "Intenta con otro título o autor"
                  : user
                  ? "Sé el primero en crear uno"
                  : "Inicia sesión para crear contenido"}
              </p>
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="mt-1 text-gold text-xs font-body hover:underline"
                >
                  Ver todo
                </button>
              )}
            </div>
          )}
        </div>
      </main>

      <PoemModal poem={selectedPoem} onClose={() => setSelectedPoem(null)} />

      {showCreate && (
        <CreatePoemForm
          onClose={() => setShowCreate(false)}
          onCreated={refreshPoems}
          defaultCategory={activeCategory}
        />
      )}

      <HiddenPremium />
    </div>
  );
};

export default Index;