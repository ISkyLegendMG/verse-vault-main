import { DbPoem } from "@/types/poem";
import CloseButton from "./CloseButton";

const AuroraModal = ({ poem, onClose }: { poem: DbPoem; onClose: () => void }) => (
  <div className="relative animate-unfurl max-w-lg w-full mx-4 rounded-xl overflow-hidden" style={{
    background: "linear-gradient(180deg, hsl(220,40%,8%), hsl(180,30%,10%), hsl(260,35%,12%))",
    boxShadow: "0 0 60px hsl(160,60%,30%/0.3), inset 0 0 40px hsl(220,40%,8%/0.5)",
    border: "1px solid hsl(160,40%,30%)",
  }}>
    {/* Aurora bands */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
      <div className="absolute top-[10%] left-0 right-0 h-[15%]" style={{ background: "linear-gradient(90deg, transparent, hsl(120,60%,45%), hsl(160,70%,50%), hsl(200,60%,45%), transparent)", filter: "blur(15px)" }} />
      <div className="absolute top-[25%] left-[10%] right-[10%] h-[10%]" style={{ background: "linear-gradient(90deg, transparent, hsl(280,60%,50%), hsl(320,50%,45%), transparent)", filter: "blur(20px)" }} />
    </div>
    <div className="relative px-10 py-10">
      <div className="text-center mb-4">
        <span className="text-lg opacity-60 tracking-[0.3em]" style={{ color: "hsl(160,60%,60%)" }}>✧ ✦ ✧</span>
      </div>
      <h2 className="font-display font-bold text-2xl text-center mb-1" style={{ color: "hsl(160,70%,70%)" }}>{poem.title}</h2>
      <p className="text-center font-body italic text-sm mb-8" style={{ color: "hsl(200,40%,55%)" }}>— {poem.author}</p>
      <div className="poem-text text-base space-y-2" style={{ color: "hsl(180,20%,85%)", textShadow: "0 0 20px hsl(160,60%,40%/0.15)" }}>
        {poem.full_text.map((line, i) => line === "" ? <br key={i} /> : <p key={i}>{line}</p>)}
      </div>
      {poem.link && <a href={poem.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-xs font-body hover:underline" style={{ color: "hsl(160,50%,50%)" }}>Fuente</a>}
      <div className="text-center mt-8 opacity-40" style={{ color: "hsl(160,60%,50%)" }}>— · —</div>
    </div>
    <CloseButton onClose={onClose} className="top-4 right-4" className2="text-[hsl(160,70%,70%)]" />
  </div>
);

export default AuroraModal;
