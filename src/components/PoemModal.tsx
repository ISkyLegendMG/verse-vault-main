import { DbPoem, ModalStyle } from "@/types/poem";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { useEffect } from "react";
import CloseButton from "./modals/CloseButton";
import BookModal from "./modals/BookModal";
import PapyrusModal from "./modals/PapyrusModal";
import NatureModal from "./modals/NatureModal";
import StoneModal from "./modals/StoneModal";
import OceanModal from "./modals/OceanModal";
import FireModal from "./modals/FireModal";
import CelestialModal from "./modals/CelestialModal";
import BambooModal from "./modals/BambooModal";
import RoseModal from "./modals/RoseModal";
import SnowModal from "./modals/SnowModal";
import DesertModal from "./modals/DesertModal";
import GothicModal from "./modals/GothicModal";
import RenaissanceModal from "./modals/RenaissanceModal";
import ZenModal from "./modals/ZenModal";
import AuroraModal from "./modals/AuroraModal";
import GenericStyledModal from "./modals/GenericStyledModal";
import { newModalStyles } from "./modals/modalStyles";

interface PoemModalProps {
  poem: DbPoem | null;
  onClose: () => void;
}

// ── Modal style wrappers ──────────────────────────────────────────────────────

const ScrollModal = ({ poem, onClose }: { poem: DbPoem; onClose: () => void }) => (
  <div className="relative animate-unfurl max-w-lg w-full mx-4">
    <div className="h-6 rounded-t-full bg-gradient-to-b from-[hsl(38,70%,55%)] to-[hsl(38,60%,45%)] shadow-md border border-[hsl(38,50%,40%)]" />
    <div className="relative px-10 py-8" style={{
      background: "linear-gradient(160deg, hsl(38,70%,92%), hsl(40,55%,85%), hsl(38,65%,88%))",
      borderLeft: "3px solid hsl(38,50%,40%)", borderRight: "3px solid hsl(38,50%,40%)",
      boxShadow: "inset 0 0 60px hsl(38,40%,70%/0.3), 0 8px 40px hsl(38,40%,20%/0.4)",
    }}>
      <div className="text-center mb-2 text-[hsl(38,60%,40%)] text-sm">—</div>
      <h2 className="font-display font-bold text-2xl text-center text-[hsl(220,40%,15%)] mb-1">{poem.title}</h2>
      <p className="text-center font-body italic text-[hsl(38,60%,40%)] text-sm mb-6">— {poem.author}</p>
      <div className="poem-text text-[hsl(220,40%,18%)] text-base space-y-1.5">
        {poem.full_text.map((line, i) => line === "" ? <br key={i} /> : <p key={i}>{line}</p>)}
      </div>
      {poem.link && <a href={poem.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-[hsl(38,60%,40%)] text-xs font-body hover:underline">Fuente</a>}
      <div className="text-center mt-6 text-[hsl(38,60%,40%)] text-sm">—</div>
    </div>
    <div className="h-6 rounded-b-full bg-gradient-to-t from-[hsl(38,70%,55%)] to-[hsl(38,60%,45%)] shadow-md border border-[hsl(38,50%,40%)]" />
    <CloseButton onClose={onClose} className="top-8 right-8" dark />
  </div>
);

const PaperModal = ({ poem, onClose }: { poem: DbPoem; onClose: () => void }) => (
  <div className="relative animate-paper-fold max-w-md w-full mx-4 rounded-sm px-10 py-10" style={{
    background: "hsl(0,0%,98%)",
    boxShadow: "0 1px 1px hsl(0,0%,70%), 0 2px 2px hsl(0,0%,70%), 0 4px 4px hsl(0,0%,70%), 0 8px 8px hsl(0,0%,70%/0.5), 0 16px 16px hsl(0,0%,70%/0.3)",
  }}>
    <div className="absolute inset-0 rounded-sm overflow-hidden pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className="absolute left-0 right-0 border-b border-[hsl(210,40%,90%)]" style={{ top: `${(i + 1) * 32}px` }} />
      ))}
      <div className="absolute left-14 top-0 bottom-0 border-l border-[hsl(0,70%,80%)/0.4]" />
    </div>
    <div className="absolute top-0 right-0 w-10 h-10" style={{
      background: "linear-gradient(225deg, hsl(0,0%,88%) 50%, transparent 50%)",
      boxShadow: "-2px 2px 4px hsl(0,0%,70%/0.3)",
    }} />
    <div className="relative">
      <h2 className="font-display font-bold text-xl text-foreground mb-1">{poem.title}</h2>
      <p className="font-body italic text-muted-foreground text-sm mb-5">— {poem.author}</p>
      <div className="poem-text text-foreground text-base space-y-1.5">
        {poem.full_text.map((line, i) => line === "" ? <br key={i} /> : <p key={i}>{line}</p>)}
      </div>
      {poem.link && <a href={poem.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-gold text-xs font-body hover:underline">Fuente</a>}
    </div>
    <CloseButton onClose={onClose} className="top-3 right-12" />
  </div>
);

const MedievalModal = ({ poem, onClose }: { poem: DbPoem; onClose: () => void }) => (
  <div className="relative animate-unfurl max-w-lg w-full mx-4" style={{
    background: "linear-gradient(160deg, hsl(220,45%,10%), hsl(220,40%,14%))",
    border: "2px solid hsl(42,80%,40%)",
    boxShadow: "0 0 0 1px hsl(42,80%,25%), 0 0 40px hsl(42,80%,20%/0.6), inset 0 0 60px hsl(220,40%,6%/0.8)",
  }}>
    <div className="px-8 py-3 text-center" style={{
      background: "linear-gradient(90deg, transparent, hsl(42,80%,30%/0.3), transparent)",
      borderBottom: "1px solid hsl(42,80%,30%)",
    }}>
      <span className="text-gold text-xs tracking-[0.3em] font-medieval uppercase opacity-80">Versos Inmortales</span>
    </div>
    <div className="px-10 py-8">
      <span className="absolute top-12 left-4 text-gold/30 text-sm font-display">—</span>
      <span className="absolute top-12 right-4 text-gold/30 text-sm font-display">—</span>
      <h2 className="font-display font-bold text-2xl text-gold text-center mb-1">{poem.title}</h2>
      <p className="text-center font-body italic text-gold/60 text-sm mb-8">— {poem.author}</p>
      <div className="poem-text text-[hsl(38,40%,85%)] text-base space-y-2" style={{ textShadow: "0 0 20px hsl(42,80%,40%/0.2)" }}>
        {poem.full_text.map((line, i) => line === "" ? <br key={i} /> : <p key={i}>{line}</p>)}
      </div>
      {poem.link && <a href={poem.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-gold/60 text-xs font-body hover:underline">Fuente</a>}
      <div className="mt-8 h-px" style={{ background: "linear-gradient(90deg, transparent, hsl(42,80%,40%), transparent)" }} />
    </div>
    <CloseButton onClose={onClose} className="top-12 right-8" className2="text-gold" />
  </div>
);

const LetterModal = ({ poem, onClose }: { poem: DbPoem; onClose: () => void }) => (
  <div className="relative animate-paper-fold max-w-md w-full mx-4" style={{
    background: "linear-gradient(135deg, hsl(38,50%,93%), hsl(38,40%,88%))",
    boxShadow: "0 10px 60px hsl(220,40%,10%/0.4)",
  }}>
    <div className="h-16 relative overflow-hidden" style={{
      background: "linear-gradient(160deg, hsl(38,45%,85%), hsl(38,40%,78%))",
      borderBottom: "1px dashed hsl(38,40%,70%)",
      clipPath: "polygon(0 0, 50% 100%, 100% 0)",
    }} />
    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center z-10" style={{
      background: "linear-gradient(135deg, hsl(340,55%,32%), hsl(340,60%,22%))",
      boxShadow: "0 2px 8px hsl(340,55%,20%/0.5)",
    }}>
      <span className="text-[hsl(38,60%,80%)] text-xs font-display font-bold">V</span>
    </div>
    <div className="px-10 py-8 mt-2">
      <p className="font-body italic text-[hsl(220,30%,30%)] text-xs mb-4 opacity-60">
        {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
      </p>
      <h2 className="font-display font-bold text-xl text-[hsl(220,40%,15%)] mb-1">{poem.title}</h2>
      <p className="font-body italic text-[hsl(38,50%,40%)] text-sm mb-6">— {poem.author}</p>
      <div className="poem-text text-[hsl(220,40%,18%)] text-base space-y-1.5">
        {poem.full_text.map((line, i) => line === "" ? <br key={i} /> : <p key={i}>{line}</p>)}
      </div>
      {poem.link && <a href={poem.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-[hsl(38,50%,40%)] text-xs font-body hover:underline">Fuente</a>}
      <p className="mt-8 font-body italic text-[hsl(220,30%,35%)] text-sm">Con eterno afecto,</p>
      <p className="font-display text-[hsl(220,40%,20%)] font-semibold mt-1">El Poeta</p>
    </div>
    <CloseButton onClose={onClose} className="top-20 right-6" dark />
  </div>
);

const StainedModal = ({ poem, onClose }: { poem: DbPoem; onClose: () => void }) => (
  <div className="relative animate-unfurl max-w-lg w-full mx-4 rounded-lg overflow-hidden" style={{
    background: "linear-gradient(135deg, hsl(220,40%,8%), hsl(260,30%,12%), hsl(220,40%,8%))",
    boxShadow: "0 0 0 1px hsl(260,60%,50%/0.3), 0 0 60px hsl(260,60%,30%/0.4), inset 0 0 80px hsl(260,30%,5%/0.6)",
  }}>
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {["hsl(340,70%,40%/0.15)", "hsl(200,80%,40%/0.15)", "hsl(42,80%,40%/0.15)", "hsl(120,50%,35%/0.12)", "hsl(260,60%,50%/0.15)"].map((color, i) => (
        <div key={i} className="absolute top-0 bottom-0" style={{ left: `${i * 20}%`, width: "20%", background: color, borderRight: "1px solid hsl(0,0%,100%/0.05)" }} />
      ))}
    </div>
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-40 opacity-20 pointer-events-none" style={{ background: "radial-gradient(ellipse at top, hsl(45,100%,80%), transparent)" }} />
    <div className="relative px-10 py-10">
      <div className="text-center mb-4">
        <span className="text-[hsl(45,90%,65%)] text-xs tracking-[0.4em] font-medieval opacity-70">— — —</span>
      </div>
      <h2 className="font-display font-bold text-2xl text-[hsl(45,90%,70%)] text-center mb-1">{poem.title}</h2>
      <p className="text-center font-body italic text-[hsl(45,60%,60%)/0.7] text-sm mb-8">— {poem.author}</p>
      <div className="poem-text text-[hsl(38,30%,88%)] text-base space-y-2" style={{ textShadow: "0 0 30px hsl(45,80%,60%/0.15)" }}>
        {poem.full_text.map((line, i) => line === "" ? <br key={i} /> : <p key={i}>{line}</p>)}
      </div>
      {poem.link && <a href={poem.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-[hsl(45,60%,50%)] text-xs font-body hover:underline">Fuente</a>}
      <div className="text-center mt-8 text-[hsl(45,60%,50%)] text-sm opacity-50">— — —</div>
    </div>
    <CloseButton onClose={onClose} className="top-6 right-6" className2="text-[hsl(45,90%,70%)]" />
  </div>
);

// ── Main Modal ────────────────────────────────────────────────────────────────

const builtInModals: Record<string, React.FC<{ poem: DbPoem; onClose: () => void }>> = {
  scroll: ScrollModal,
  paper: PaperModal,
  medieval: MedievalModal,
  letter: LetterModal,
  stained: StainedModal,
  book: BookModal,
  papyrus: PapyrusModal,
  nature: NatureModal,
  stone: StoneModal,
  ocean: OceanModal,
  fire: FireModal,
  celestial: CelestialModal,
  bamboo: BambooModal,
  rose: RoseModal,
  snow: SnowModal,
  desert: DesertModal,
  gothic: GothicModal,
  renaissance: RenaissanceModal,
  zen: ZenModal,
  aurora: AuroraModal,
};

// Build generic modals from config
const genericModals: Record<string, React.FC<{ poem: DbPoem; onClose: () => void }>> = {};
newModalStyles.forEach((s) => {
  genericModals[s.id] = ({ poem, onClose }) => (
    <GenericStyledModal poem={poem} onClose={onClose} style={s} />
  );
});

const modalComponents: Record<string, React.FC<{ poem: DbPoem; onClose: () => void }>> = {
  ...builtInModals,
  ...genericModals,
};

const PoemModal = ({ poem, onClose }: PoemModalProps) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!poem) return null;

  const ModalContent = modalComponents[poem.modal_style] || ScrollModal;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center modal-backdrop"
      style={{ background: "hsl(220,40%,5%/0.75)" }}
      onClick={onClose}
    >
      <div onClick={(e) => e.stopPropagation()} className="max-h-[90vh] overflow-y-auto">
        <ModalContent poem={poem} onClose={onClose} />
      </div>
    </div>
  );
};

export default PoemModal;
