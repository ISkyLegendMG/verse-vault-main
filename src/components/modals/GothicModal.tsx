import { DbPoem } from "@/types/poem";
import CloseButton from "./CloseButton";

const GothicModal = ({ poem, onClose }: { poem: DbPoem; onClose: () => void }) => (
  <div className="relative animate-unfurl max-w-lg w-full mx-4 rounded-sm overflow-hidden" style={{
    background: "linear-gradient(180deg, hsl(270,20%,8%), hsl(280,15%,5%), hsl(260,20%,7%))",
    boxShadow: "0 0 60px hsl(0,0%,0%/0.7), inset 0 0 40px hsl(270,30%,10%/0.5)",
    border: "2px solid hsl(270,20%,25%)",
  }}>
    {/* Gothic arch top */}
    <div className="text-center py-4" style={{ borderBottom: "1px solid hsl(270,20%,20%)" }}>
      <span className="text-sm tracking-[0.3em] font-medieval opacity-60" style={{ color: "hsl(0,60%,40%)" }}>☩ MEMENTO MORI ☩</span>
    </div>
    <div className="px-10 py-8">
      <span className="absolute top-14 left-4 text-xl opacity-20" style={{ color: "hsl(0,50%,35%)" }}>🦇</span>
      <span className="absolute top-14 right-4 text-xl opacity-20" style={{ color: "hsl(0,50%,35%)" }}>🦇</span>
      <h2 className="font-display font-bold text-2xl text-center mb-1" style={{ color: "hsl(0,50%,60%)" }}>{poem.title}</h2>
      <p className="text-center font-body italic text-sm mb-8" style={{ color: "hsl(270,20%,50%)" }}>— {poem.author}</p>
      <div className="poem-text text-base space-y-2" style={{ color: "hsl(270,15%,75%)", textShadow: "0 0 10px hsl(0,50%,30%/0.2)" }}>
        {poem.full_text.map((line, i) => line === "" ? <br key={i} /> : <p key={i}>{line}</p>)}
      </div>
      {poem.link && <a href={poem.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-xs font-body hover:underline" style={{ color: "hsl(0,40%,45%)" }}>Fuente</a>}
      <div className="mt-8 h-px" style={{ background: "linear-gradient(90deg, transparent, hsl(0,50%,30%), transparent)" }} />
      <div className="text-center mt-3 opacity-40" style={{ color: "hsl(0,50%,40%)" }}>— · —</div>
    </div>
    <CloseButton onClose={onClose} className="top-12 right-6" className2="text-[hsl(0,50%,60%)]" />
  </div>
);

export default GothicModal;
