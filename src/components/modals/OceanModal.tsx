import { DbPoem } from "@/types/poem";
import CloseButton from "./CloseButton";

const OceanModal = ({ poem, onClose }: { poem: DbPoem; onClose: () => void }) => (
  <div className="relative animate-paper-fold max-w-md w-full mx-4 rounded-2xl overflow-hidden" style={{
    background: "linear-gradient(180deg, hsl(200,60%,15%), hsl(210,70%,20%), hsl(195,50%,25%))",
    boxShadow: "0 10px 50px hsl(200,60%,10%/0.6), inset 0 0 60px hsl(200,50%,30%/0.2)",
    border: "2px solid hsl(200,50%,35%)",
  }}>
    <div className="text-center py-3 text-xl opacity-40 select-none tracking-[0.3em]">
      🌊 🐚 🐠 🐚 🌊
    </div>
    <div className="px-10 py-6">
      <h2 className="font-display font-bold text-2xl text-center mb-1" style={{ color: "hsl(190,80%,75%)" }}>
        {poem.title}
      </h2>
      <p className="text-center font-body italic text-sm mb-6" style={{ color: "hsl(190,50%,55%)" }}>
        — {poem.author}
      </p>
      <div className="poem-text text-base space-y-1.5" style={{ color: "hsl(195,40%,85%)", textShadow: "0 0 20px hsl(200,80%,40%/0.2)" }}>
        {poem.full_text.map((line, i) => line === "" ? <br key={i} /> : <p key={i}>{line}</p>)}
      </div>
      {poem.link && <a href={poem.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-xs font-body hover:underline" style={{ color: "hsl(190,60%,50%)" }}>Fuente</a>}
    </div>
    <div className="text-center py-3 text-sm opacity-40 select-none tracking-[0.3em]" style={{ color: "hsl(190,50%,50%)" }}>
      ～ · ～ · ～
    </div>
    <CloseButton onClose={onClose} className="top-12 right-6" className2="text-[hsl(190,80%,75%)]" />
  </div>
);

export default OceanModal;
