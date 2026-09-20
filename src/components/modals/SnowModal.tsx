import { DbPoem } from "@/types/poem";
import CloseButton from "./CloseButton";

const SnowModal = ({ poem, onClose }: { poem: DbPoem; onClose: () => void }) => (
  <div className="relative animate-paper-fold max-w-md w-full mx-4 rounded-xl overflow-hidden" style={{
    background: "linear-gradient(180deg, hsl(210,40%,95%), hsl(200,30%,92%), hsl(210,35%,88%))",
    boxShadow: "0 10px 40px hsl(210,30%,50%/0.2), inset 0 0 50px hsl(210,30%,95%/0.5)",
    border: "2px solid hsl(210,30%,80%)",
  }}>
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
      {Array.from({ length: 15 }).map((_, i) => (
        <span key={i} className="absolute text-xs select-none" style={{
          top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`,
          opacity: Math.random() * 0.5 + 0.3, color: "hsl(210,40%,70%)",
        }}>·</span>
      ))}
    </div>
    <div className="relative px-10 py-10">
      <div className="text-center mb-4">
        <span className="text-sm opacity-50 tracking-[0.3em]" style={{ color: "hsl(210,50%,60%)" }}>❅ · ❆ · ❅</span>
      </div>
      <h2 className="font-display font-bold text-2xl text-center mb-1" style={{ color: "hsl(210,50%,20%)" }}>{poem.title}</h2>
      <p className="text-center font-body italic text-sm mb-6" style={{ color: "hsl(210,30%,45%)" }}>— {poem.author}</p>
      <div className="poem-text text-base space-y-1.5" style={{ color: "hsl(210,40%,18%)" }}>
        {poem.full_text.map((line, i) => line === "" ? <br key={i} /> : <p key={i}>{line}</p>)}
      </div>
      {poem.link && <a href={poem.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-xs font-body hover:underline" style={{ color: "hsl(210,40%,40%)" }}>Fuente</a>}
      <div className="text-center mt-6 opacity-40" style={{ color: "hsl(210,50%,60%)" }}>❅ · ❆ · ❅</div>
    </div>
    <CloseButton onClose={onClose} className="top-4 right-4" dark />
  </div>
);

export default SnowModal;
