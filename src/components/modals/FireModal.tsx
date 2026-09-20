import { DbPoem } from "@/types/poem";
import CloseButton from "./CloseButton";

const FireModal = ({ poem, onClose }: { poem: DbPoem; onClose: () => void }) => (
  <div className="relative animate-unfurl max-w-lg w-full mx-4 rounded-lg overflow-hidden" style={{
    background: "linear-gradient(180deg, hsl(15,80%,10%), hsl(5,70%,12%), hsl(20,60%,8%))",
    boxShadow: "0 0 60px hsl(15,90%,30%/0.4), inset 0 0 40px hsl(0,70%,15%/0.5)",
    border: "2px solid hsl(20,80%,30%)",
  }}>
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-15">
      <div className="absolute bottom-0 left-[10%] w-[15%] h-[60%]" style={{ background: "linear-gradient(to top, hsl(30,100%,50%), hsl(45,100%,60%), transparent)", borderRadius: "50% 50% 0 0", filter: "blur(8px)" }} />
      <div className="absolute bottom-0 left-[40%] w-[20%] h-[70%]" style={{ background: "linear-gradient(to top, hsl(15,100%,45%), hsl(40,100%,55%), transparent)", borderRadius: "50% 50% 0 0", filter: "blur(10px)" }} />
      <div className="absolute bottom-0 right-[15%] w-[12%] h-[50%]" style={{ background: "linear-gradient(to top, hsl(0,100%,40%), hsl(25,100%,50%), transparent)", borderRadius: "50% 50% 0 0", filter: "blur(6px)" }} />
    </div>
    <div className="relative px-10 py-10">
      <div className="text-center mb-3">
        <span className="text-xs tracking-[0.4em] uppercase opacity-50" style={{ color: "hsl(30,90%,60%)" }}>Versos en llamas</span>
      </div>
      <h2 className="font-display font-bold text-2xl text-center mb-1" style={{ color: "hsl(40,100%,70%)" }}>{poem.title}</h2>
      <p className="text-center font-body italic text-sm mb-8" style={{ color: "hsl(20,70%,55%)" }}>— {poem.author}</p>
      <div className="poem-text text-base space-y-2" style={{ color: "hsl(30,50%,85%)", textShadow: "0 0 15px hsl(20,90%,40%/0.3)" }}>
        {poem.full_text.map((line, i) => line === "" ? <br key={i} /> : <p key={i}>{line}</p>)}
      </div>
      {poem.link && <a href={poem.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-xs font-body hover:underline" style={{ color: "hsl(30,80%,50%)" }}>Fuente</a>}
      <div className="text-center mt-8 opacity-40" style={{ color: "hsl(30,90%,50%)" }}>— · —</div>
    </div>
    <CloseButton onClose={onClose} className="top-4 right-4" className2="text-[hsl(40,100%,70%)]" />
  </div>
);

export default FireModal;
