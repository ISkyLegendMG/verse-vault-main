import { DbPoem } from "@/types/poem";
import CloseButton from "./CloseButton";

const StoneModal = ({ poem, onClose }: { poem: DbPoem; onClose: () => void }) => (
  <div className="relative animate-unfurl max-w-lg w-full mx-4 rounded-lg overflow-hidden" style={{
    background: "linear-gradient(160deg, hsl(0,0%,40%), hsl(0,0%,32%), hsl(0,0%,36%))",
    boxShadow: "0 10px 50px hsl(0,0%,10%/0.6), inset 0 0 60px hsl(0,0%,20%/0.4), inset 0 2px 0 hsl(0,0%,50%/0.3)",
    border: "3px solid hsl(0,0%,50%)",
  }}>
    {/* Cracked stone texture lines */}
    <div className="absolute inset-0 pointer-events-none opacity-10">
      <div className="absolute top-[20%] left-[10%] w-[30%] h-px bg-white/50 rotate-12" />
      <div className="absolute top-[60%] right-[15%] w-[25%] h-px bg-white/40 -rotate-6" />
      <div className="absolute top-[40%] left-[50%] w-[20%] h-px bg-white/30 rotate-45" />
    </div>

    <div className="px-10 py-10">
      {/* Chiseled header */}
      <div className="text-center mb-2">
        <span className="text-xs tracking-[0.4em] uppercase opacity-40" style={{ color: "hsl(0,0%,80%)" }}>
          ◆ Inscripción ◆
        </span>
      </div>

      <h2 className="font-display font-bold text-2xl text-center mb-1" style={{
        color: "hsl(0,0%,85%)",
        textShadow: "0 2px 4px hsl(0,0%,0%/0.5)",
      }}>
        {poem.title}
      </h2>
      <p className="text-center font-body italic text-sm mb-8" style={{ color: "hsl(0,0%,65%)" }}>
        — {poem.author}
      </p>

      <div className="poem-text text-base space-y-2" style={{
        color: "hsl(0,0%,82%)",
        textShadow: "0 1px 3px hsl(0,0%,0%/0.4)",
      }}>
        {poem.full_text.map((line, i) =>
          line === "" ? <br key={i} /> : <p key={i}>{line}</p>
        )}
      </div>

      {poem.link && (
        <a href={poem.link} target="_blank" rel="noopener noreferrer"
          className="mt-4 inline-block text-xs font-body hover:underline" style={{ color: "hsl(0,0%,70%)" }}>
          Fuente
        </a>
      )}

      <div className="text-center mt-8 opacity-30" style={{ color: "hsl(0,0%,70%)" }}>
        ◆ ◆ ◆
      </div>
    </div>

    <CloseButton onClose={onClose} className="top-4 right-4" className2="text-[hsl(0,0%,80%)]" />
  </div>
);

export default StoneModal;
