import { DbPoem } from "@/types/poem";
import CloseButton from "./CloseButton";

const RoseModal = ({ poem, onClose }: { poem: DbPoem; onClose: () => void }) => (
  <div className="relative animate-paper-fold max-w-md w-full mx-4 rounded-2xl overflow-hidden" style={{
    background: "linear-gradient(160deg, hsl(340,30%,95%), hsl(350,40%,92%), hsl(330,25%,90%))",
    boxShadow: "0 10px 50px hsl(340,40%,30%/0.25), inset 0 0 40px hsl(340,30%,85%/0.3)",
    border: "2px solid hsl(340,40%,75%)",
  }}>
    <div className="text-center py-3 text-sm opacity-50 select-none tracking-widest" style={{ color: "hsl(340,40%,45%)" }}>
      — · —
    </div>
    <div className="px-10 py-6">
      <h2 className="font-display font-bold text-2xl text-center mb-1" style={{ color: "hsl(340,55%,30%)" }}>{poem.title}</h2>
      <p className="text-center font-body italic text-sm mb-6" style={{ color: "hsl(340,40%,45%)" }}>— {poem.author}</p>
      <div className="poem-text text-base space-y-1.5" style={{ color: "hsl(340,30%,20%)" }}>
        {poem.full_text.map((line, i) => line === "" ? <br key={i} /> : <p key={i}>{line}</p>)}
      </div>
      {poem.link && <a href={poem.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-xs font-body hover:underline" style={{ color: "hsl(340,50%,40%)" }}>Fuente</a>}
    </div>
    <div className="text-center py-3 text-sm opacity-50 select-none tracking-widest" style={{ color: "hsl(340,40%,45%)" }}>
      — · —
    </div>
    <CloseButton onClose={onClose} className="top-12 right-6" dark />
  </div>
);

export default RoseModal;
