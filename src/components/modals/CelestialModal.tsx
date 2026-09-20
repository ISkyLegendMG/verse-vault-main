import { DbPoem } from "@/types/poem";
import CloseButton from "./CloseButton";

const CelestialModal = ({ poem, onClose }: { poem: DbPoem; onClose: () => void }) => (
  <div className="relative animate-unfurl max-w-lg w-full mx-4 rounded-xl overflow-hidden" style={{
    background: "linear-gradient(160deg, hsl(240,40%,8%), hsl(260,50%,12%), hsl(220,40%,10%))",
    boxShadow: "0 0 80px hsl(260,60%,30%/0.3), inset 0 0 60px hsl(240,40%,10%/0.5)",
    border: "1px solid hsl(260,50%,30%)",
  }}>
    {/* Stars */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 30 }).map((_, i) => (
        <div key={i} className="absolute rounded-full bg-white" style={{
          width: `${Math.random() * 2 + 1}px`, height: `${Math.random() * 2 + 1}px`,
          top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`,
          opacity: Math.random() * 0.6 + 0.2,
        }} />
      ))}
    </div>
    <div className="relative px-10 py-10">
      <div className="text-center mb-4">
        <span className="text-sm opacity-60 tracking-[0.3em]">· ☽ ·</span>
      </div>
      <h2 className="font-display font-bold text-2xl text-center mb-1" style={{ color: "hsl(45,90%,80%)" }}>{poem.title}</h2>
      <p className="text-center font-body italic text-sm mb-8" style={{ color: "hsl(260,40%,65%)" }}>— {poem.author}</p>
      <div className="poem-text text-base space-y-2" style={{ color: "hsl(230,30%,85%)", textShadow: "0 0 20px hsl(260,60%,50%/0.2)" }}>
        {poem.full_text.map((line, i) => line === "" ? <br key={i} /> : <p key={i}>{line}</p>)}
      </div>
      {poem.link && <a href={poem.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-xs font-body hover:underline" style={{ color: "hsl(260,50%,60%)" }}>Fuente</a>}
      <div className="text-center mt-8 text-sm opacity-40 tracking-[0.3em]">· ☾ ·</div>
    </div>
    <CloseButton onClose={onClose} className="top-4 right-4" className2="text-[hsl(45,90%,80%)]" />
  </div>
);

export default CelestialModal;
