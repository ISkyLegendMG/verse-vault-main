import { BookOpen, MessageSquareQuote, Flame, Sparkles, Scroll, Brain, Music } from "lucide-react";
import { cn } from "@/lib/utils";

export type ContentCategory = "poemas" | "frases" | "motivacion" | "citas" | "proverbios" | "reflexiones" | "canciones";

export interface CategoryConfig {
  id: ContentCategory;
  label: string;
  icon: React.ElementType;
}

export const categories: CategoryConfig[] = [
  { id: "poemas", label: "Poemas", icon: BookOpen },
  { id: "frases", label: "Frases", icon: MessageSquareQuote },
  { id: "motivacion", label: "Motivación", icon: Flame },
  { id: "citas", label: "Citas", icon: Sparkles },
  { id: "proverbios", label: "Proverbios", icon: Scroll },
  { id: "reflexiones", label: "Reflexiones", icon: Brain },
  { id: "canciones", label: "Canciones", icon: Music },
];

interface BottomNavProps {
  active: ContentCategory;
  onChange: (cat: ContentCategory) => void;
}

const BottomNav = ({ active, onChange }: BottomNavProps) => {
  const mainTabs = categories.slice(0, 4);
  const moreTabs = categories.slice(4);

  return (
    <>
      {/* Mobile bottom nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-card/95 backdrop-blur-md sm:hidden safe-area-bottom">
        <div className="flex items-center justify-around px-1 py-1">
          {mainTabs.map((cat) => {
            const Icon = cat.icon;
            const isActive = active === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onChange(cat.id)}
                className={cn(
                  "flex flex-col items-center gap-0.5 py-2 px-3 rounded-lg transition-all min-w-0",
                  isActive
                    ? "text-gold"
                    : "text-muted-foreground active:text-foreground"
                )}
              >
                <Icon size={20} strokeWidth={isActive ? 2.5 : 1.5} />
                <span className="text-[10px] font-body truncate">{cat.label}</span>
                {isActive && <div className="w-4 h-0.5 rounded-full bg-gold mt-0.5" />}
              </button>
            );
          })}
          {/* More dropdown */}
          <div className="relative group">
            <button
              className={cn(
                "flex flex-col items-center gap-0.5 py-2 px-3 rounded-lg transition-all",
                moreTabs.some((t) => t.id === active)
                  ? "text-gold"
                  : "text-muted-foreground"
              )}
            >
              <Sparkles size={20} strokeWidth={1.5} />
              <span className="text-[10px] font-body">Más</span>
            </button>
            <div className="absolute bottom-full right-0 mb-2 hidden group-focus-within:flex flex-col bg-card border border-border rounded-xl shadow-lg overflow-hidden min-w-[140px]">
              {moreTabs.map((cat) => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => onChange(cat.id)}
                    className={cn(
                      "flex items-center gap-2.5 px-4 py-3 text-sm font-body transition-colors text-left",
                      active === cat.id
                        ? "text-gold bg-gold/10"
                        : "text-foreground hover:bg-muted"
                    )}
                  >
                    <Icon size={14} />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Desktop horizontal tabs */}
      <div className="hidden sm:flex items-center gap-1 overflow-x-auto scrollbar-hide">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = active === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onChange(cat.id)}
              className={cn(
                "flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-body whitespace-nowrap transition-all",
                isActive
                  ? "bg-gold/15 text-gold border border-gold/30"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50 border border-transparent"
              )}
            >
              <Icon size={14} strokeWidth={isActive ? 2.5 : 1.5} />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default BottomNav;