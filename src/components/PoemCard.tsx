import { DbPoem } from "@/types/poem";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import { categories } from "@/components/BottomNav";

interface PoemCardProps {
  poem: DbPoem;
  index: number;
  onClick: (poem: DbPoem) => void;
}

const PoemCard = ({ poem, index, onClick }: PoemCardProps) => {
  const previewText = poem.preview.join("\n");
  const cat = categories.find((c) => c.id === poem.category);

  return (
    <button
      onClick={() => onClick(poem)}
      className={cn(
        "group relative w-full text-left flex flex-col gap-2.5 p-5 sm:p-6 rounded-2xl cursor-pointer",
        "border border-border/60 hover:border-gold/50",
        "bg-card/60 backdrop-blur-sm hover:bg-card/90",
        "transition-all duration-500 ease-out",
        "hover:shadow-[0_12px_48px_-12px_hsl(var(--gold)/0.2)]",
        "hover:-translate-y-1",
        "animate-fade-in-up"
      )}
      style={{ animationDelay: `${index * 60}ms`, animationFillMode: "both" }}
    >
      {/* Subtle top gradient accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gold-gradient opacity-0 group-hover:opacity-40 transition-opacity rounded-t-2xl" />

      {/* Category badge + Author */}
      <div className="flex items-center gap-2">
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-muted/80 text-muted-foreground font-body uppercase tracking-wider">
          {cat?.label}
        </span>
        <span className="text-muted-foreground text-[11px] font-body italic ml-auto">{poem.author}</span>
      </div>

      {/* Title */}
      <h3 className="font-display font-semibold text-[15px] text-foreground group-hover:text-gold transition-colors leading-snug">
        {poem.title}
      </h3>

      {/* Preview */}
      <p className="poem-text text-[13px] text-muted-foreground/80 line-clamp-3 flex-1 leading-relaxed">
        {previewText}
      </p>

      {/* Bottom row */}
      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center gap-1 text-gold/70 text-xs font-body opacity-0 group-hover:opacity-100 transition-all duration-300">
          <span>Leer más</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </div>
        {poem.link && (
          <ExternalLink size={11} className="text-muted-foreground opacity-0 group-hover:opacity-50 transition-opacity" />
        )}
      </div>
    </button>
  );
};

export default PoemCard;