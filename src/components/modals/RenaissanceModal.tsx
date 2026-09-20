import { DbPoem } from "@/types/poem";
import CloseButton from "./CloseButton";

const RenaissanceModal = ({ poem, onClose }: { poem: DbPoem; onClose: () => void }) => (
  <div className="relative animate-paper-fold max-w-md w-full mx-4 rounded-xl overflow-hidden" style={{
    background: "linear-gradient(160deg, hsl(38,50%,90%), hsl(35,45%,85%), hsl(30,40%,80%))",
    boxShadow: "0 10px 50px hsl(30,40%,20%/0.35), inset 0 0 40px hsl(38,40%,75%/0.3)",
    border: "3px double hsl(42,70%,45%)",
  }}>
    {/* Ornamental top */}
    <div className="text-center py-3" style={{ borderBottom: "1px solid hsl(42,60%,60%)" }}>
      <span className="text-xs tracking-[0.3em] font-display italic opacity-60" style={{ color: "hsl(42,60%,35%)" }}>⚜ RINASCIMENTO ⚜</span>
    </div>
    <div className="px-10 py-8">
      <div className="absolute top-12 left-3 text-2xl opacity-15 select-none">🎨</div>
      <div className="absolute top-12 right-3 text-2xl opacity-15 select-none">🎭</div>
      <h2 className="font-display font-bold text-2xl text-center mb-1" style={{ color: "hsl(25,50%,18%)" }}>{poem.title}</h2>
      <p className="text-center font-body italic text-sm mb-6" style={{ color: "hsl(42,50%,35%)" }}>— {poem.author}</p>
      <div className="poem-text text-base space-y-1.5" style={{ color: "hsl(25,40%,15%)" }}>
        {poem.full_text.map((line, i) => line === "" ? <br key={i} /> : <p key={i}>{line}</p>)}
      </div>
      {poem.link && <a href={poem.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-xs font-body hover:underline" style={{ color: "hsl(42,50%,35%)" }}>Fuente</a>}
      <div className="text-center mt-6 opacity-40" style={{ color: "hsl(42,60%,40%)" }}>— · —</div>
    </div>
    <CloseButton onClose={onClose} className="top-12 right-6" dark />
  </div>
);

export default RenaissanceModal;
