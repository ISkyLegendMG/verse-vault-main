import { DbPoem } from "@/types/poem";
import CloseButton from "./CloseButton";

const ZenModal = ({ poem, onClose }: { poem: DbPoem; onClose: () => void }) => (
  <div className="relative animate-paper-fold max-w-sm w-full mx-4 rounded-none overflow-hidden" style={{
    background: "hsl(0,0%,97%)",
    boxShadow: "0 4px 20px hsl(0,0%,50%/0.15)",
    border: "1px solid hsl(0,0%,85%)",
  }}>
    <div className="px-12 py-12">
      <div className="text-center mb-8">
        <div className="w-12 h-px mx-auto" style={{ background: "hsl(0,0%,60%)" }} />
      </div>
      <h2 className="font-display font-bold text-xl text-center mb-1" style={{ color: "hsl(0,0%,15%)" }}>{poem.title}</h2>
      <p className="text-center font-body italic text-sm mb-8" style={{ color: "hsl(0,0%,45%)" }}>— {poem.author}</p>
      <div className="poem-text text-base space-y-2" style={{ color: "hsl(0,0%,20%)" }}>
        {poem.full_text.map((line, i) => line === "" ? <br key={i} /> : <p key={i}>{line}</p>)}
      </div>
      {poem.link && <a href={poem.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-xs font-body hover:underline" style={{ color: "hsl(0,0%,40%)" }}>Fuente</a>}
      <div className="text-center mt-10">
        <div className="w-12 h-px mx-auto" style={{ background: "hsl(0,0%,60%)" }} />
      </div>
    </div>
    <CloseButton onClose={onClose} className="top-4 right-4" dark />
  </div>
);

export default ZenModal;
