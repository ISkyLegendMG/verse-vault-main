import { DbPoem } from "@/types/poem";
import CloseButton from "./CloseButton";

const BambooModal = ({ poem, onClose }: { poem: DbPoem; onClose: () => void }) => (
  <div className="relative animate-paper-fold max-w-md w-full mx-4 rounded-lg overflow-hidden" style={{
    background: "linear-gradient(160deg, hsl(45,40%,92%), hsl(40,35%,88%), hsl(45,30%,85%))",
    boxShadow: "0 8px 40px hsl(40,30%,20%/0.3)",
    border: "2px solid hsl(80,30%,50%)",
  }}>
    {/* Bamboo stalks left */}
    <div className="absolute left-2 top-0 bottom-0 w-3 opacity-15 pointer-events-none" style={{ background: "linear-gradient(180deg, hsl(100,40%,40%), hsl(80,35%,35%))" }} />
    <div className="absolute left-6 top-0 bottom-0 w-2 opacity-10 pointer-events-none" style={{ background: "linear-gradient(180deg, hsl(100,40%,45%), hsl(80,35%,38%))" }} />
    <div className="absolute right-2 top-0 bottom-0 w-3 opacity-15 pointer-events-none" style={{ background: "linear-gradient(180deg, hsl(100,40%,40%), hsl(80,35%,35%))" }} />

    <div className="relative px-10 py-8">
      <div className="text-center mb-4">
        <span className="text-sm tracking-[0.4em] opacity-50" style={{ color: "hsl(80,40%,30%)" }}>🎋 竹 🎋</span>
      </div>
      <h2 className="font-display font-bold text-2xl text-center mb-1" style={{ color: "hsl(20,40%,15%)" }}>{poem.title}</h2>
      <p className="text-center font-body italic text-sm mb-6" style={{ color: "hsl(80,30%,35%)" }}>— {poem.author}</p>
      <div className="poem-text text-base space-y-1.5" style={{ color: "hsl(20,30%,18%)" }}>
        {poem.full_text.map((line, i) => line === "" ? <br key={i} /> : <p key={i}>{line}</p>)}
      </div>
      {poem.link && <a href={poem.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-xs font-body hover:underline" style={{ color: "hsl(80,40%,30%)" }}>Fuente</a>}
      <div className="text-center mt-6 opacity-40" style={{ color: "hsl(80,30%,40%)" }}>— 禪 —</div>
    </div>
    <CloseButton onClose={onClose} className="top-4 right-8" dark />
  </div>
);

export default BambooModal;
