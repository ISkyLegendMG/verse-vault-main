import { Search, X } from "lucide-react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface PoemSearchProps {
  value: string;
  onChange: (v: string) => void;
  resultCount: number;
  totalCount: number;
}

const PoemSearch = ({ value, onChange, resultCount, totalCount }: PoemSearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-col items-center gap-2 w-full">
      <div
        className={cn(
          "group relative flex items-center gap-2.5 w-full rounded-xl px-4 py-2.5",
          "border transition-all duration-300",
          "bg-card/60 backdrop-blur-sm",
          value
            ? "border-gold/40 shadow-[0_0_16px_hsl(var(--gold)/0.1)]"
            : "border-border/60 hover:border-border"
        )}
      >
        <Search
          size={14}
          className={cn(
            "shrink-0 transition-colors duration-300",
            value ? "text-gold" : "text-muted-foreground/60"
          )}
        />
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Buscar por título o autor..."
          className="flex-1 bg-transparent text-sm font-body text-foreground placeholder:text-muted-foreground/50 outline-none border-none caret-gold"
        />
        {value && (
          <button
            onClick={() => { onChange(""); inputRef.current?.focus(); }}
            className="shrink-0 text-muted-foreground/60 hover:text-gold transition-colors"
          >
            <X size={12} />
          </button>
        )}
      </div>
      {value && (
        <p className="text-muted-foreground/70 text-[11px] font-body">
          {resultCount === 0
            ? "Sin resultados"
            : `${resultCount} de ${totalCount}`}
        </p>
      )}
    </div>
  );
};

export default PoemSearch;
