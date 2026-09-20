import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";
import { ContentCategory } from "@/types/poem";
import { categories } from "@/components/BottomNav";

const MODAL_STYLES = [
  { value: "scroll", label: "Pergamino" },
  { value: "paper", label: "Papel" },
  { value: "medieval", label: "Medieval" },
  { value: "letter", label: "Carta" },
  { value: "stained", label: "Vitral" },
  { value: "book", label: "Libro" },
  { value: "papyrus", label: "Papiro" },
  { value: "nature", label: "Naturaleza" },
  { value: "stone", label: "Piedra" },
  { value: "ocean", label: "Océano" },
  { value: "fire", label: "Fuego" },
  { value: "celestial", label: "Celestial" },
  { value: "bamboo", label: "Bambú" },
  { value: "rose", label: "Rosa" },
  { value: "snow", label: "Nieve" },
  { value: "desert", label: "Desierto" },
  { value: "gothic", label: "Gótico" },
  { value: "renaissance", label: "Renacimiento" },
  { value: "zen", label: "Zen" },
  { value: "aurora", label: "Aurora" },
  { value: "volcano", label: "Volcán" },
  { value: "crystal", label: "Cristal" },
  { value: "jungle", label: "Selva" },
  { value: "steampunk", label: "Steampunk" },
  { value: "neon", label: "Neón" },
  { value: "seashell", label: "Concha" },
  { value: "constellation", label: "Constelación" },
  { value: "autumn", label: "Otoño" },
  { value: "cherry", label: "Cerezo" },
  { value: "thunder", label: "Trueno" },
  { value: "moonlight", label: "Luz de Luna" },
  { value: "lavender", label: "Lavanda" },
  { value: "copper", label: "Cobre" },
  { value: "icecave", label: "Cueva de Hielo" },
  { value: "sunset", label: "Atardecer" },
  { value: "rainforest", label: "Pluvioselva" },
  { value: "marble", label: "Mármol" },
  { value: "sapphire", label: "Zafiro" },
  { value: "emerald", label: "Esmeralda" },
  { value: "ruby", label: "Rubí" },
  { value: "twilight", label: "Crepúsculo" },
  { value: "starfield", label: "Campo Estelar" },
  { value: "mist", label: "Niebla" },
  { value: "coral", label: "Coral" },
  { value: "origami", label: "Origami" },
  { value: "silk", label: "Seda" },
  { value: "ink", label: "Tinta" },
  { value: "watercolor", label: "Acuarela" },
  { value: "mosaic", label: "Mosaico" },
  { value: "vintage", label: "Vintage" },
  { value: "artnouveau", label: "Art Nouveau" },
  { value: "cyberpunk", label: "Cyberpunk" },
  { value: "pastel", label: "Pastel" },
  { value: "noir", label: "Noir" },
  { value: "tropical", label: "Tropical" },
  { value: "arctic", label: "Ártico" },
  { value: "garden", label: "Jardín" },
  { value: "cosmic", label: "Cósmico" },
  { value: "ember", label: "Ascua" },
  { value: "frost", label: "Escarcha" },
  { value: "velvet", label: "Terciopelo" },
  { value: "bronze", label: "Bronce" },
  { value: "jade", label: "Jade" },
  { value: "amethyst", label: "Amatista" },
  { value: "pearl", label: "Perla" },
  { value: "obsidian", label: "Obsidiana" },
  { value: "honey", label: "Miel" },
  { value: "wine", label: "Vino" },
  { value: "storm", label: "Tormenta" },
  { value: "sakura", label: "Sakura" },
];


interface CreatePoemFormProps {
  onClose: () => void;
  onCreated: () => void;
  defaultCategory?: ContentCategory;
}

const CreatePoemForm = ({ onClose, onCreated, defaultCategory = "poemas" }: CreatePoemFormProps) => {
  const { user } = useAuth();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  
  const [category, setCategory] = useState<ContentCategory>(defaultCategory);
  const [modalStyle, setModalStyle] = useState("scroll");
  const [link, setLink] = useState("");
  const [poemText, setPoemText] = useState("");
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setSaving(true);

    const lines = poemText.split("\n");
    const previewLines = lines.slice(0, 2);

    const { error } = await supabase.from("poems").insert({
      user_id: user.id,
      title,
      author: author || user.email || "Anónimo",
      language: "es",
      category,
      modal_style: modalStyle,
      link: link || null,
      preview: previewLines,
      full_text: lines,
      is_premium: false,
    });

    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Creado", description: "Tu contenido ha sido enviado para revisión" });
      onCreated();
      onClose();
    }
    setSaving(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center modal-backdrop"
      style={{ background: "hsl(220,40%,5%/0.75)" }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full sm:max-w-lg sm:mx-4 max-h-[90vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl p-6 sm:p-8 animate-fade-in-up"
        style={{
          background: "linear-gradient(160deg, hsl(var(--card)), hsl(var(--background)))",
          border: "1px solid hsl(var(--border))",
          boxShadow: "0 -10px 60px hsl(var(--gold) / 0.15)",
        }}
      >
        {/* Drag handle for mobile */}
        <div className="w-10 h-1 rounded-full bg-muted-foreground/30 mx-auto mb-4 sm:hidden" />

        <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-gold transition-colors">
          <X size={18} />
        </button>

        <div className="mb-5">
          <h2 className="font-display text-lg font-bold text-foreground">Crear Contenido</h2>
          <p className="text-muted-foreground text-xs font-body mt-0.5">Comparte tus versos con el mundo</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text" value={title} onChange={(e) => setTitle(e.target.value)}
            placeholder="Título..." required
            className="w-full px-4 py-3 rounded-xl text-sm font-body bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground outline-none focus:border-gold transition-colors"
          />

          <input
            type="text" value={author} onChange={(e) => setAuthor(e.target.value)}
            placeholder="Autor (opcional)..."
            className="w-full px-4 py-3 rounded-xl text-sm font-body bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground outline-none focus:border-gold transition-colors"
          />

          <input
            type="url" value={link} onChange={(e) => setLink(e.target.value)}
            placeholder="Link de referencia (opcional)..."
            className="w-full px-4 py-3 rounded-xl text-sm font-body bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground outline-none focus:border-gold transition-colors"
          />

          <div>
            <label className="text-xs font-body text-muted-foreground mb-1 block">Categoría</label>
            <select
              value={category} onChange={(e) => setCategory(e.target.value as ContentCategory)}
              className="w-full px-3 py-2.5 rounded-xl text-sm font-body bg-muted/50 border border-border text-foreground outline-none focus:border-gold transition-colors"
            >
              {categories.map((c) => (
                <option key={c.id} value={c.id}>{c.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs font-body text-muted-foreground mb-1 block">Estilo visual</label>
            <select
              value={modalStyle} onChange={(e) => setModalStyle(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl text-sm font-body bg-muted/50 border border-border text-foreground outline-none focus:border-gold transition-colors"
            >
              {MODAL_STYLES.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
            </select>
          </div>

          <div>
            <label className="text-xs font-body text-muted-foreground mb-1 block">Texto (una línea por verso)</label>
            <textarea
              value={poemText} onChange={(e) => setPoemText(e.target.value)}
              placeholder="Escribe aquí..."
              required rows={6}
              className="w-full px-4 py-3 rounded-xl text-sm font-body bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground outline-none focus:border-gold transition-colors resize-none poem-text"
            />
          </div>

          <button
            type="submit" disabled={saving}
            className={cn(
              "w-full py-3 rounded-xl font-display text-sm tracking-wider transition-all",
              "bg-gold text-primary-foreground hover:brightness-110 disabled:opacity-50"
            )}
          >
            {saving ? "Guardando..." : "Publicar"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePoemForm;