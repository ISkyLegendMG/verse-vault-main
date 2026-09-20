import { DbPoem } from "@/types/poem";
import CloseButton from "./CloseButton";

const DesertModal = ({ poem, onClose }: { poem: DbPoem; onClose: () => void }) => (
  <div className="relative animate-unfurl max-w-lg w-full mx-4 rounded-lg overflow-hidden" style={{
    background: "linear-gradient(180deg, hsl(35,70%,65%), hsl(30,60%,55%), hsl(25,55%,48%))",
    boxShadow: "0 10px 50px hsl(30,50%,20%/0.5), inset 0 0 60px hsl(40,60%,70%/0.2)",
    border: "2px solid hsl(35,50%,45%)",
  }}>
    <div className="absolute top-0 left-0 right-0 h-20 pointer-events-none opacity-20" style={{
      background: "linear-gradient(to bottom, hsl(45,80%,80%), transparent)",
    }} />
    <div className="relative px-10 py-10">
      <div className="text-center mb-3">
        <span className="text-xs tracking-[0.4em] uppercase opacity-50" style={{ color: "hsl(30,40%,20%)" }}>🏜️ Arenas eternas 🏜️</span>
      </div>
      <h2 className="font-display font-bold text-2xl text-center mb-1" style={{ color: "hsl(30,50%,12%)" }}>{poem.title}</h2>
      <p className="text-center font-body italic text-sm mb-8" style={{ color: "hsl(30,40%,25%)" }}>— {poem.author}</p>
      <div className="poem-text text-base space-y-2" style={{ color: "hsl(30,40%,10%)", textShadow: "0 1px 2px hsl(40,60%,80%/0.3)" }}>
        {poem.full_text.map((line, i) => line === "" ? <br key={i} /> : <p key={i}>{line}</p>)}
      </div>
      {poem.link && <a href={poem.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-xs font-body hover:underline" style={{ color: "hsl(30,50%,25%)" }}>Fuente</a>}
      <div className="text-center mt-8 opacity-30" style={{ color: "hsl(30,50%,20%)" }}>— · —</div>
    </div>
    <CloseButton onClose={onClose} className="top-4 right-4" dark />
  </div>
);

export default DesertModal;
