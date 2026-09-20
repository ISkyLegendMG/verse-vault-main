export type ModalStyle = "scroll" | "paper" | "medieval" | "letter" | "stained" | "book" | "papyrus" | "nature" | "stone" | "ocean" | "fire" | "celestial" | "bamboo" | "rose" | "snow" | "desert" | "gothic" | "renaissance" | "zen" | "aurora" | "volcano" | "crystal" | "jungle" | "steampunk" | "neon" | "seashell" | "constellation" | "autumn" | "cherry" | "thunder" | "moonlight" | "lavender" | "copper" | "icecave" | "sunset" | "rainforest" | "marble" | "sapphire" | "emerald" | "ruby" | "twilight" | "starfield" | "mist" | "coral" | "origami" | "silk" | "ink" | "watercolor" | "mosaic" | "vintage" | "artnouveau" | "cyberpunk" | "pastel" | "noir" | "tropical" | "arctic" | "garden" | "cosmic" | "ember" | "frost" | "velvet" | "bronze" | "jade" | "amethyst" | "pearl" | "obsidian" | "honey" | "wine" | "storm" | "sakura";

export type ContentCategory = "poemas" | "frases" | "motivacion" | "citas" | "proverbios" | "reflexiones" | "canciones";

export interface DbPoem {
  id: string;
  user_id: string;
  title: string;
  author: string;
  language: string;
  preview: string[];
  full_text: string[];
  modal_style: string;
  link: string | null;
  is_premium: boolean;
  category: ContentCategory;
  created_at: string;
  updated_at: string;
  approved?: boolean;
}
