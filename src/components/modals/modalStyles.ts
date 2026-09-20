export interface ModalStyleConfig {
  id: string;
  label: string;
  container: React.CSSProperties;
  containerClass?: string;
  headerDecoration?: string;
  footerDecoration?: string;
  titleColor: string;
  authorColor: string;
  textColor: string;
  linkColor: string;
  closeDark?: boolean;
  closeColor?: string;
  ornamentTop?: string;
  ornamentBottom?: string;
}

export const newModalStyles: ModalStyleConfig[] = [
  // 1 - Volcano
  { id: "volcano", label: "Volcán",
    container: { background: "linear-gradient(160deg, hsl(0,50%,10%), hsl(15,60%,8%))", border: "2px solid hsl(15,80%,40%)", boxShadow: "0 0 60px hsl(15,80%,30%/0.5), inset 0 0 40px hsl(0,60%,5%/0.8)" },
    titleColor: "hsl(30,90%,60%)", authorColor: "hsl(30,60%,45%)", textColor: "hsl(30,30%,85%)", linkColor: "hsl(30,70%,50%)",
    ornamentTop: "— · —", ornamentBottom: "· — ·", closeColor: "text-orange-400" },
  // 2 - Crystal
  { id: "crystal", label: "Cristal",
    container: { background: "linear-gradient(135deg, hsl(200,30%,95%), hsl(260,20%,92%), hsl(200,25%,90%))", border: "1px solid hsl(260,40%,80%)", boxShadow: "0 10px 40px hsl(260,40%,60%/0.2), inset 0 0 60px hsl(260,30%,95%/0.5)" },
    titleColor: "hsl(260,50%,35%)", authorColor: "hsl(260,30%,50%)", textColor: "hsl(260,20%,20%)", linkColor: "hsl(260,40%,45%)",
    ornamentTop: "◇ · ◇", ornamentBottom: "· ◇ ·", closeDark: true },
  // 3 - Jungle
  { id: "jungle", label: "Selva",
    container: { background: "linear-gradient(160deg, hsl(120,40%,8%), hsl(140,35%,12%))", border: "2px solid hsl(120,50%,25%)", boxShadow: "0 0 50px hsl(120,40%,15%/0.5), inset 0 0 40px hsl(120,30%,5%/0.6)" },
    titleColor: "hsl(80,70%,55%)", authorColor: "hsl(80,40%,45%)", textColor: "hsl(80,20%,80%)", linkColor: "hsl(80,50%,50%)",
    ornamentTop: "— · —", ornamentBottom: "· — ·", closeColor: "text-green-400" },
  // 4 - Steampunk
  { id: "steampunk", label: "Steampunk",
    container: { background: "linear-gradient(160deg, hsl(30,30%,15%), hsl(25,25%,12%))", border: "2px solid hsl(35,60%,35%)", boxShadow: "0 0 40px hsl(35,50%,20%/0.5), inset 0 0 30px hsl(30,20%,5%/0.6)" },
    titleColor: "hsl(35,70%,55%)", authorColor: "hsl(35,50%,45%)", textColor: "hsl(35,20%,80%)", linkColor: "hsl(35,60%,50%)",
    ornamentTop: "◈ · ◈", ornamentBottom: "· ◈ ·", closeColor: "text-amber-400" },
  // 5 - Neon
  { id: "neon", label: "Neón",
    container: { background: "hsl(260,30%,5%)", border: "2px solid hsl(280,100%,60%)", boxShadow: "0 0 30px hsl(280,100%,50%/0.4), 0 0 60px hsl(280,100%,50%/0.2), inset 0 0 30px hsl(280,60%,10%/0.5)" },
    titleColor: "hsl(280,100%,70%)", authorColor: "hsl(180,100%,50%)", textColor: "hsl(0,0%,90%)", linkColor: "hsl(320,100%,60%)",
    ornamentTop: "▮ ▯ ▮", ornamentBottom: "▯ ▮ ▯", closeColor: "text-purple-400" },
  // 6 - Seashell
  { id: "seashell", label: "Concha",
    container: { background: "linear-gradient(160deg, hsl(20,40%,93%), hsl(340,30%,92%), hsl(20,35%,90%))", border: "1px solid hsl(20,30%,80%)", boxShadow: "0 10px 30px hsl(20,30%,60%/0.2)" },
    titleColor: "hsl(340,40%,35%)", authorColor: "hsl(20,40%,45%)", textColor: "hsl(20,20%,20%)", linkColor: "hsl(340,35%,45%)",
    ornamentTop: "～ · ～", ornamentBottom: "· ～ ·", closeDark: true },
  // 7 - Constellation
  { id: "constellation", label: "Constelación",
    container: { background: "linear-gradient(180deg, hsl(230,40%,8%), hsl(240,35%,12%), hsl(250,30%,8%))", border: "1px solid hsl(230,50%,25%)", boxShadow: "0 0 60px hsl(230,60%,20%/0.4)" },
    titleColor: "hsl(45,90%,70%)", authorColor: "hsl(45,60%,55%)", textColor: "hsl(220,20%,85%)", linkColor: "hsl(45,70%,60%)",
    ornamentTop: "· ★ · ★ ·", ornamentBottom: "★ · ★", closeColor: "text-yellow-300" },
  // 8 - Autumn
  { id: "autumn", label: "Otoño",
    container: { background: "linear-gradient(160deg, hsl(30,50%,90%), hsl(20,45%,85%), hsl(35,40%,88%))", border: "1px solid hsl(30,40%,70%)", boxShadow: "0 8px 30px hsl(30,30%,40%/0.2)" },
    titleColor: "hsl(15,60%,30%)", authorColor: "hsl(30,50%,40%)", textColor: "hsl(20,30%,18%)", linkColor: "hsl(25,50%,40%)",
    ornamentTop: "— · —", ornamentBottom: "· — ·", closeDark: true },
  // 9 - Cherry Blossom
  { id: "cherry", label: "Cerezo",
    container: { background: "linear-gradient(160deg, hsl(340,40%,95%), hsl(330,35%,92%), hsl(340,30%,90%))", border: "1px solid hsl(340,40%,82%)", boxShadow: "0 10px 40px hsl(340,40%,60%/0.15)" },
    titleColor: "hsl(340,50%,35%)", authorColor: "hsl(340,30%,50%)", textColor: "hsl(340,15%,18%)", linkColor: "hsl(340,40%,45%)",
    ornamentTop: "✿ · ✿", ornamentBottom: "· ✿ ·", closeDark: true },
  // 10 - Thunder
  { id: "thunder", label: "Trueno",
    container: { background: "linear-gradient(180deg, hsl(240,20%,10%), hsl(250,25%,15%), hsl(240,20%,8%))", border: "2px solid hsl(45,100%,50%)", boxShadow: "0 0 40px hsl(45,100%,40%/0.3), 0 0 80px hsl(240,30%,10%/0.5)" },
    titleColor: "hsl(45,100%,60%)", authorColor: "hsl(45,60%,50%)", textColor: "hsl(220,15%,85%)", linkColor: "hsl(45,80%,55%)",
    ornamentTop: "— ◆ —", ornamentBottom: "◆ — ◆", closeColor: "text-yellow-400" },
  // 11 - Moonlight
  { id: "moonlight", label: "Luz de Luna",
    container: { background: "linear-gradient(160deg, hsl(230,30%,12%), hsl(220,25%,18%), hsl(235,30%,10%))", border: "1px solid hsl(220,40%,30%)", boxShadow: "0 0 50px hsl(220,40%,20%/0.4), inset 0 0 40px hsl(220,20%,8%/0.5)" },
    titleColor: "hsl(45,50%,80%)", authorColor: "hsl(220,30%,60%)", textColor: "hsl(220,15%,80%)", linkColor: "hsl(45,40%,65%)",
    ornamentTop: "☽ · ☽", ornamentBottom: "· ☽ ·", closeColor: "text-blue-300" },
  // 12 - Lavender
  { id: "lavender", label: "Lavanda",
    container: { background: "linear-gradient(160deg, hsl(270,30%,93%), hsl(280,25%,90%), hsl(265,30%,92%))", border: "1px solid hsl(270,30%,80%)", boxShadow: "0 8px 30px hsl(270,30%,50%/0.15)" },
    titleColor: "hsl(270,40%,35%)", authorColor: "hsl(270,25%,50%)", textColor: "hsl(270,15%,18%)", linkColor: "hsl(270,35%,45%)",
    ornamentTop: "❀ · ❀", ornamentBottom: "· ❀ ·", closeDark: true },
  // 13 - Copper
  { id: "copper", label: "Cobre",
    container: { background: "linear-gradient(160deg, hsl(20,40%,15%), hsl(15,35%,12%))", border: "2px solid hsl(20,70%,45%)", boxShadow: "0 0 40px hsl(20,60%,25%/0.4)" },
    titleColor: "hsl(25,80%,60%)", authorColor: "hsl(20,50%,50%)", textColor: "hsl(20,20%,82%)", linkColor: "hsl(25,60%,55%)",
    ornamentTop: "◆ · ◆", ornamentBottom: "· ◆ ·", closeColor: "text-orange-300" },
  // 14 - Ice Cave
  { id: "icecave", label: "Cueva de Hielo",
    container: { background: "linear-gradient(180deg, hsl(200,50%,12%), hsl(195,45%,18%), hsl(205,50%,10%))", border: "1px solid hsl(195,60%,35%)", boxShadow: "0 0 50px hsl(195,50%,25%/0.4), inset 0 0 30px hsl(200,40%,8%/0.5)" },
    titleColor: "hsl(195,70%,65%)", authorColor: "hsl(195,40%,55%)", textColor: "hsl(195,20%,85%)", linkColor: "hsl(195,50%,55%)",
    ornamentTop: "◇ ❅ ◇", ornamentBottom: "❅ · ❅", closeColor: "text-cyan-300" },
  // 15 - Sunset
  { id: "sunset", label: "Atardecer",
    container: { background: "linear-gradient(180deg, hsl(30,60%,15%), hsl(15,50%,18%), hsl(340,40%,12%))", border: "1px solid hsl(25,60%,35%)", boxShadow: "0 0 50px hsl(25,50%,20%/0.4)" },
    titleColor: "hsl(35,90%,65%)", authorColor: "hsl(15,60%,55%)", textColor: "hsl(30,20%,85%)", linkColor: "hsl(25,70%,55%)",
    ornamentTop: "— · —", ornamentBottom: "· — ·", closeColor: "text-orange-300" },
  // 16 - Rainforest
  { id: "rainforest", label: "Pluvioselva",
    container: { background: "linear-gradient(160deg, hsl(140,35%,90%), hsl(150,30%,85%), hsl(130,30%,88%))", border: "1px solid hsl(140,30%,70%)", boxShadow: "0 8px 30px hsl(140,20%,40%/0.2)" },
    titleColor: "hsl(150,50%,25%)", authorColor: "hsl(140,35%,40%)", textColor: "hsl(140,20%,15%)", linkColor: "hsl(150,40%,35%)",
    ornamentTop: "— · —", ornamentBottom: "· — ·", closeDark: true },
  // 17 - Marble
  { id: "marble", label: "Mármol",
    container: { background: "linear-gradient(135deg, hsl(0,0%,95%), hsl(210,10%,92%), hsl(0,0%,96%))", border: "2px solid hsl(0,0%,80%)", boxShadow: "0 10px 40px hsl(0,0%,50%/0.2), inset 0 0 40px hsl(0,0%,98%/0.5)" },
    titleColor: "hsl(220,20%,25%)", authorColor: "hsl(0,0%,45%)", textColor: "hsl(0,0%,15%)", linkColor: "hsl(220,15%,40%)",
    ornamentTop: "◇ · ◇", ornamentBottom: "· ◇ ·", closeDark: true },
  // 18 - Sapphire
  { id: "sapphire", label: "Zafiro",
    container: { background: "linear-gradient(160deg, hsl(220,50%,10%), hsl(230,45%,15%))", border: "2px solid hsl(220,70%,45%)", boxShadow: "0 0 50px hsl(220,60%,30%/0.4), inset 0 0 30px hsl(220,40%,5%/0.5)" },
    titleColor: "hsl(210,80%,65%)", authorColor: "hsl(220,50%,55%)", textColor: "hsl(220,20%,85%)", linkColor: "hsl(210,60%,55%)",
    ornamentTop: "◇ · ◇", ornamentBottom: "· ◇ ·", closeColor: "text-blue-400" },
  // 19 - Emerald
  { id: "emerald", label: "Esmeralda",
    container: { background: "linear-gradient(160deg, hsl(160,50%,8%), hsl(150,45%,12%))", border: "2px solid hsl(155,60%,35%)", boxShadow: "0 0 50px hsl(155,50%,20%/0.4)" },
    titleColor: "hsl(155,70%,55%)", authorColor: "hsl(155,40%,45%)", textColor: "hsl(155,15%,85%)", linkColor: "hsl(155,50%,50%)",
    ornamentTop: "◆ · ◆", ornamentBottom: "· ◆ ·", closeColor: "text-emerald-400" },
  // 20 - Ruby
  { id: "ruby", label: "Rubí",
    container: { background: "linear-gradient(160deg, hsl(350,50%,10%), hsl(340,45%,14%))", border: "2px solid hsl(350,70%,40%)", boxShadow: "0 0 50px hsl(350,60%,25%/0.4)" },
    titleColor: "hsl(350,80%,60%)", authorColor: "hsl(350,50%,50%)", textColor: "hsl(350,15%,85%)", linkColor: "hsl(350,60%,55%)",
    ornamentTop: "◆ · ◆", ornamentBottom: "· ◆ ·", closeColor: "text-red-400" },
  // 21 - Twilight
  { id: "twilight", label: "Crepúsculo",
    container: { background: "linear-gradient(180deg, hsl(260,35%,15%), hsl(280,30%,20%), hsl(300,25%,12%))", border: "1px solid hsl(270,40%,30%)", boxShadow: "0 0 50px hsl(270,40%,15%/0.4)" },
    titleColor: "hsl(40,70%,70%)", authorColor: "hsl(280,30%,60%)", textColor: "hsl(260,15%,85%)", linkColor: "hsl(40,50%,60%)",
    ornamentTop: "— · —", ornamentBottom: "· — ·", closeColor: "text-purple-300" },
  // 22 - Starfield
  { id: "starfield", label: "Campo Estelar",
    container: { background: "radial-gradient(ellipse at center, hsl(240,30%,12%), hsl(240,25%,5%))", border: "1px solid hsl(45,80%,40%)", boxShadow: "0 0 60px hsl(45,60%,20%/0.3)" },
    titleColor: "hsl(45,100%,75%)", authorColor: "hsl(45,50%,60%)", textColor: "hsl(220,10%,88%)", linkColor: "hsl(45,70%,60%)",
    ornamentTop: "★ · ★ · ★", ornamentBottom: "· ★ ·", closeColor: "text-yellow-300" },
  // 23 - Mist
  { id: "mist", label: "Niebla",
    container: { background: "linear-gradient(180deg, hsl(210,15%,88%), hsl(200,10%,85%), hsl(215,15%,82%))", border: "1px solid hsl(210,10%,75%)", boxShadow: "0 8px 40px hsl(210,10%,50%/0.15)" },
    titleColor: "hsl(210,20%,30%)", authorColor: "hsl(210,15%,45%)", textColor: "hsl(210,10%,20%)", linkColor: "hsl(210,20%,40%)",
    ornamentTop: "〰 · 〰", ornamentBottom: "· 〰 ·", closeDark: true },
  // 24 - Coral
  { id: "coral", label: "Coral",
    container: { background: "linear-gradient(160deg, hsl(15,50%,92%), hsl(5,45%,88%), hsl(10,40%,90%))", border: "1px solid hsl(10,40%,75%)", boxShadow: "0 8px 30px hsl(10,30%,50%/0.15)" },
    titleColor: "hsl(5,60%,40%)", authorColor: "hsl(15,40%,50%)", textColor: "hsl(10,20%,18%)", linkColor: "hsl(5,50%,45%)",
    ornamentTop: "～ · ～", ornamentBottom: "· ～ ·", closeDark: true },
  // 25 - Origami
  { id: "origami", label: "Origami",
    container: { background: "hsl(0,0%,98%)", border: "1px solid hsl(0,0%,85%)", boxShadow: "0 2px 10px hsl(0,0%,60%/0.15), 4px 4px 0 hsl(0,0%,90%)" },
    titleColor: "hsl(350,60%,40%)", authorColor: "hsl(0,0%,40%)", textColor: "hsl(0,0%,15%)", linkColor: "hsl(350,50%,45%)",
    ornamentTop: "△ ▽ △", ornamentBottom: "▽ △ ▽", closeDark: true },
  // 26 - Silk
  { id: "silk", label: "Seda",
    container: { background: "linear-gradient(135deg, hsl(340,30%,92%), hsl(20,25%,90%), hsl(340,25%,88%))", border: "1px solid hsl(340,25%,78%)", boxShadow: "0 10px 30px hsl(340,20%,50%/0.15)" },
    titleColor: "hsl(340,40%,30%)", authorColor: "hsl(340,25%,45%)", textColor: "hsl(340,10%,18%)", linkColor: "hsl(340,30%,40%)",
    ornamentTop: "〜 ✿ 〜", ornamentBottom: "✿ 〜 ✿", closeDark: true },
  // 27 - Ink
  { id: "ink", label: "Tinta",
    container: { background: "hsl(220,20%,97%)", border: "2px solid hsl(220,30%,15%)", boxShadow: "0 4px 20px hsl(220,20%,30%/0.15)" },
    titleColor: "hsl(220,30%,15%)", authorColor: "hsl(220,20%,35%)", textColor: "hsl(220,15%,12%)", linkColor: "hsl(220,25%,30%)",
    ornamentTop: "— · —", ornamentBottom: "· — ·", closeDark: true },
  // 28 - Watercolor
  { id: "watercolor", label: "Acuarela",
    container: { background: "linear-gradient(135deg, hsl(200,40%,92%), hsl(340,30%,92%), hsl(60,30%,92%))", border: "1px solid hsl(200,30%,80%)", boxShadow: "0 10px 30px hsl(200,20%,50%/0.15)" },
    titleColor: "hsl(200,50%,30%)", authorColor: "hsl(340,30%,45%)", textColor: "hsl(220,15%,18%)", linkColor: "hsl(200,40%,40%)",
    ornamentTop: "◦ ◦ ◦", ornamentBottom: "◦ · ◦", closeDark: true },
  // 29 - Mosaic
  { id: "mosaic", label: "Mosaico",
    container: { background: "linear-gradient(135deg, hsl(30,40%,90%), hsl(45,35%,88%))", border: "3px solid hsl(35,50%,55%)", boxShadow: "0 8px 30px hsl(35,30%,40%/0.2), inset 0 0 30px hsl(35,30%,85%/0.3)" },
    titleColor: "hsl(220,50%,30%)", authorColor: "hsl(35,40%,40%)", textColor: "hsl(30,20%,15%)", linkColor: "hsl(220,40%,40%)",
    ornamentTop: "◈ ◇ ◈ ◇ ◈", ornamentBottom: "◇ ◈ ◇", closeDark: true },
  // 30 - Vintage
  { id: "vintage", label: "Vintage",
    container: { background: "linear-gradient(160deg, hsl(38,35%,88%), hsl(30,30%,82%))", border: "1px solid hsl(35,30%,65%)", boxShadow: "0 6px 25px hsl(35,25%,40%/0.2)" },
    titleColor: "hsl(25,40%,28%)", authorColor: "hsl(30,30%,42%)", textColor: "hsl(25,20%,18%)", linkColor: "hsl(30,35%,38%)",
    ornamentTop: "❧ · ❧", ornamentBottom: "· ❧ ·", closeDark: true },
  // 31 - Art Nouveau
  { id: "artnouveau", label: "Art Nouveau",
    container: { background: "linear-gradient(160deg, hsl(40,40%,92%), hsl(80,25%,88%), hsl(40,35%,90%))", border: "2px solid hsl(80,40%,40%)", boxShadow: "0 8px 30px hsl(80,30%,30%/0.2)" },
    titleColor: "hsl(80,45%,28%)", authorColor: "hsl(40,35%,42%)", textColor: "hsl(60,15%,15%)", linkColor: "hsl(80,40%,35%)",
    ornamentTop: "❀ · ❀", ornamentBottom: "· ❀ ·", closeDark: true },
  // 32 - Cyberpunk
  { id: "cyberpunk", label: "Cyberpunk",
    container: { background: "hsl(240,20%,5%)", border: "2px solid hsl(180,100%,50%)", boxShadow: "0 0 20px hsl(180,100%,40%/0.3), 0 0 40px hsl(320,100%,40%/0.2), inset 0 0 20px hsl(240,30%,8%/0.5)" },
    titleColor: "hsl(180,100%,60%)", authorColor: "hsl(320,100%,60%)", textColor: "hsl(0,0%,85%)", linkColor: "hsl(180,80%,50%)",
    ornamentTop: "▶ ▷ ▶", ornamentBottom: "▷ ▶ ▷", closeColor: "text-cyan-400" },
  // 33 - Pastel
  { id: "pastel", label: "Pastel",
    container: { background: "linear-gradient(135deg, hsl(330,40%,94%), hsl(200,35%,94%), hsl(60,30%,94%))", border: "1px solid hsl(330,30%,85%)", boxShadow: "0 6px 20px hsl(330,20%,50%/0.1)" },
    titleColor: "hsl(330,40%,40%)", authorColor: "hsl(200,30%,45%)", textColor: "hsl(0,0%,20%)", linkColor: "hsl(330,35%,45%)",
    ornamentTop: "♡ · ♡", ornamentBottom: "· ♡ ·", closeDark: true },
  // 34 - Noir
  { id: "noir", label: "Noir",
    container: { background: "linear-gradient(180deg, hsl(0,0%,5%), hsl(0,0%,10%), hsl(0,0%,5%))", border: "1px solid hsl(0,0%,25%)", boxShadow: "0 10px 50px hsl(0,0%,0%/0.5)" },
    titleColor: "hsl(0,0%,85%)", authorColor: "hsl(0,0%,55%)", textColor: "hsl(0,0%,75%)", linkColor: "hsl(0,0%,60%)",
    ornamentTop: "— ■ —", ornamentBottom: "■ — ■", closeColor: "text-gray-400" },
  // 35 - Tropical
  { id: "tropical", label: "Tropical",
    container: { background: "linear-gradient(160deg, hsl(170,45%,85%), hsl(40,50%,88%), hsl(170,40%,82%))", border: "1px solid hsl(170,35%,65%)", boxShadow: "0 8px 30px hsl(170,25%,40%/0.2)" },
    titleColor: "hsl(170,55%,25%)", authorColor: "hsl(40,45%,40%)", textColor: "hsl(170,15%,15%)", linkColor: "hsl(170,45%,30%)",
    ornamentTop: "— · —", ornamentBottom: "· — ·", closeDark: true },
  // 36 - Arctic
  { id: "arctic", label: "Ártico",
    container: { background: "linear-gradient(180deg, hsl(200,30%,92%), hsl(210,25%,88%), hsl(200,30%,85%))", border: "2px solid hsl(200,35%,70%)", boxShadow: "0 8px 30px hsl(200,20%,50%/0.15), inset 0 0 30px hsl(200,20%,95%/0.3)" },
    titleColor: "hsl(200,40%,25%)", authorColor: "hsl(200,25%,45%)", textColor: "hsl(200,15%,18%)", linkColor: "hsl(200,30%,35%)",
    ornamentTop: "❅ · ❅", ornamentBottom: "· ❅ ·", closeDark: true },
  // 37 - Garden
  { id: "garden", label: "Jardín",
    container: { background: "linear-gradient(160deg, hsl(80,35%,92%), hsl(100,30%,88%), hsl(60,30%,90%))", border: "1px solid hsl(80,30%,70%)", boxShadow: "0 8px 25px hsl(80,20%,40%/0.15)" },
    titleColor: "hsl(100,45%,25%)", authorColor: "hsl(80,30%,40%)", textColor: "hsl(80,15%,15%)", linkColor: "hsl(100,35%,35%)",
    ornamentTop: "✿ · ✿", ornamentBottom: "· ✿ ·", closeDark: true },
  // 38 - Cosmic
  { id: "cosmic", label: "Cósmico",
    container: { background: "radial-gradient(ellipse at top, hsl(270,40%,15%), hsl(250,35%,8%))", border: "1px solid hsl(270,50%,35%)", boxShadow: "0 0 60px hsl(270,40%,20%/0.4)" },
    titleColor: "hsl(45,80%,70%)", authorColor: "hsl(270,40%,60%)", textColor: "hsl(260,15%,85%)", linkColor: "hsl(45,60%,60%)",
    ornamentTop: "· ◆ ·", ornamentBottom: "◆ · ◆", closeColor: "text-purple-300" },
  // 39 - Ember
  { id: "ember", label: "Ascua",
    container: { background: "linear-gradient(180deg, hsl(10,40%,10%), hsl(0,35%,8%))", border: "1px solid hsl(15,70%,30%)", boxShadow: "0 0 40px hsl(15,60%,20%/0.4), inset 0 0 30px hsl(0,30%,5%/0.5)" },
    titleColor: "hsl(30,80%,55%)", authorColor: "hsl(15,50%,45%)", textColor: "hsl(15,15%,80%)", linkColor: "hsl(30,60%,50%)",
    ornamentTop: "◆ · ◆", ornamentBottom: "· ◆ ·", closeColor: "text-orange-400" },
  // 40 - Frost
  { id: "frost", label: "Escarcha",
    container: { background: "linear-gradient(180deg, hsl(200,35%,93%), hsl(210,30%,90%), hsl(200,35%,87%))", border: "1px solid hsl(200,40%,75%)", boxShadow: "0 8px 30px hsl(200,30%,50%/0.15), inset 0 0 40px hsl(200,20%,95%/0.4)" },
    titleColor: "hsl(200,45%,28%)", authorColor: "hsl(200,30%,45%)", textColor: "hsl(200,15%,18%)", linkColor: "hsl(200,35%,38%)",
    ornamentTop: "❅ ❆ ❅", ornamentBottom: "❆ ❅ ❆", closeDark: true },
  // 41 - Velvet
  { id: "velvet", label: "Terciopelo",
    container: { background: "linear-gradient(160deg, hsl(330,40%,12%), hsl(340,35%,16%))", border: "2px solid hsl(330,50%,35%)", boxShadow: "0 0 40px hsl(330,40%,20%/0.4), inset 0 0 30px hsl(330,30%,8%/0.5)" },
    titleColor: "hsl(45,70%,70%)", authorColor: "hsl(330,30%,55%)", textColor: "hsl(330,15%,82%)", linkColor: "hsl(45,50%,60%)",
    ornamentTop: "· ♛ ·", ornamentBottom: "♛ · ♛", closeColor: "text-pink-300" },
  // 42 - Bronze
  { id: "bronze", label: "Bronce",
    container: { background: "linear-gradient(160deg, hsl(30,35%,18%), hsl(25,30%,14%))", border: "2px solid hsl(30,55%,40%)", boxShadow: "0 0 35px hsl(30,40%,20%/0.4)" },
    titleColor: "hsl(35,65%,55%)", authorColor: "hsl(30,40%,48%)", textColor: "hsl(30,15%,80%)", linkColor: "hsl(35,50%,50%)",
    ornamentTop: "⬡ · ⬡", ornamentBottom: "· ⬡ ·", closeColor: "text-amber-400" },
  // 43 - Jade
  { id: "jade", label: "Jade",
    container: { background: "linear-gradient(160deg, hsl(160,35%,12%), hsl(170,30%,15%))", border: "2px solid hsl(160,50%,30%)", boxShadow: "0 0 40px hsl(160,40%,18%/0.4), inset 0 0 30px hsl(160,25%,6%/0.5)" },
    titleColor: "hsl(160,55%,55%)", authorColor: "hsl(160,35%,45%)", textColor: "hsl(160,12%,82%)", linkColor: "hsl(160,45%,48%)",
    ornamentTop: "◇ · ◇", ornamentBottom: "· ◇ ·", closeColor: "text-green-400" },
  // 44 - Amethyst
  { id: "amethyst", label: "Amatista",
    container: { background: "linear-gradient(160deg, hsl(280,40%,12%), hsl(290,35%,16%))", border: "2px solid hsl(280,60%,40%)", boxShadow: "0 0 50px hsl(280,50%,25%/0.4)" },
    titleColor: "hsl(280,70%,65%)", authorColor: "hsl(280,40%,55%)", textColor: "hsl(280,15%,85%)", linkColor: "hsl(280,50%,55%)",
    ornamentTop: "◆ · ◆", ornamentBottom: "· ◆ ·", closeColor: "text-violet-400" },
  // 45 - Pearl
  { id: "pearl", label: "Perla",
    container: { background: "linear-gradient(135deg, hsl(30,20%,95%), hsl(340,15%,93%), hsl(30,15%,92%))", border: "1px solid hsl(30,15%,82%)", boxShadow: "0 8px 30px hsl(30,10%,50%/0.12), inset 0 0 40px hsl(0,0%,100%/0.3)" },
    titleColor: "hsl(330,20%,30%)", authorColor: "hsl(30,15%,45%)", textColor: "hsl(30,8%,18%)", linkColor: "hsl(330,15%,40%)",
    ornamentTop: "○ · ○", ornamentBottom: "· ○ ·", closeDark: true },
  // 46 - Obsidian
  { id: "obsidian", label: "Obsidiana",
    container: { background: "linear-gradient(160deg, hsl(0,0%,5%), hsl(240,10%,8%), hsl(0,0%,3%))", border: "1px solid hsl(0,0%,20%)", boxShadow: "0 10px 50px hsl(0,0%,0%/0.6), inset 0 0 30px hsl(240,10%,3%/0.5)" },
    titleColor: "hsl(0,0%,75%)", authorColor: "hsl(0,0%,50%)", textColor: "hsl(0,0%,70%)", linkColor: "hsl(0,0%,55%)",
    ornamentTop: "◼ ◻ ◼", ornamentBottom: "◻ ◼ ◻", closeColor: "text-gray-500" },
  // 47 - Honey
  { id: "honey", label: "Miel",
    container: { background: "linear-gradient(160deg, hsl(42,60%,88%), hsl(38,55%,82%), hsl(45,50%,85%))", border: "1px solid hsl(38,50%,65%)", boxShadow: "0 8px 30px hsl(38,40%,40%/0.2)" },
    titleColor: "hsl(30,55%,28%)", authorColor: "hsl(38,40%,40%)", textColor: "hsl(30,25%,15%)", linkColor: "hsl(35,45%,35%)",
    ornamentTop: "⬡ · ⬡", ornamentBottom: "· ⬡ ·", closeDark: true },
  // 48 - Wine
  { id: "wine", label: "Vino",
    container: { background: "linear-gradient(160deg, hsl(340,40%,12%), hsl(350,35%,15%))", border: "2px solid hsl(340,50%,30%)", boxShadow: "0 0 40px hsl(340,40%,15%/0.4)" },
    titleColor: "hsl(340,50%,65%)", authorColor: "hsl(340,30%,50%)", textColor: "hsl(340,12%,82%)", linkColor: "hsl(340,40%,55%)",
    ornamentTop: "— · —", ornamentBottom: "· — ·", closeColor: "text-rose-400" },
  // 49 - Storm
  { id: "storm", label: "Tormenta",
    container: { background: "linear-gradient(180deg, hsl(220,25%,15%), hsl(230,30%,20%), hsl(220,25%,10%))", border: "1px solid hsl(220,30%,30%)", boxShadow: "0 0 50px hsl(220,30%,10%/0.5)" },
    titleColor: "hsl(45,80%,65%)", authorColor: "hsl(220,25%,55%)", textColor: "hsl(220,12%,82%)", linkColor: "hsl(45,60%,55%)",
    ornamentTop: "— ◆ —", ornamentBottom: "◆ — ◆", closeColor: "text-yellow-400" },
  // 50 - Sakura
  { id: "sakura", label: "Sakura",
    container: { background: "linear-gradient(180deg, hsl(345,40%,93%), hsl(350,35%,90%), hsl(340,30%,88%))", border: "1px solid hsl(345,35%,80%)", boxShadow: "0 8px 30px hsl(345,30%,50%/0.15)" },
    titleColor: "hsl(345,45%,32%)", authorColor: "hsl(345,25%,48%)", textColor: "hsl(345,12%,18%)", linkColor: "hsl(345,35%,42%)",
    ornamentTop: "✿ · ✿", ornamentBottom: "· ✿ ·", closeDark: true },
];