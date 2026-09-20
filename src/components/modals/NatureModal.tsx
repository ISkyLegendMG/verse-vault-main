import { DbPoem } from "@/types/poem";
import CloseButton from "./CloseButton";

const NatureModal = ({ poem, onClose }: { poem: DbPoem; onClose: () => void }) => (
  <div className="relative animate-paper-fold max-w-md w-full mx-4 rounded-2xl overflow-hidden" style={{
    background: "linear-gradient(160deg, hsl(120,25%,95%), hsl(140,30%,92%), hsl(80,25%,93%))",
    boxShadow: "0 10px 50px hsl(120,30%,20%/0.3), inset 0 0 40px hsl(120,30%,80%/0.3)",
    border: "2px solid hsl(120,30%,75%)",
  }}>
    {/* Top vine ornament */}
    <div className="text-center py-3 text-2xl opacity-50 select-none tracking-widest">
      🍃 🌸 🦋 🌸 🍃
    </div>

    <div className="px-10 py-6">
      {/* Corner flowers */}
      <span className="absolute top-12 left-4 text-xl opacity-30">🌿</span>
      <span className="absolute top-12 right-4 text-xl opacity-30">🌿</span>
      <span className="absolute bottom-4 left-4 text-xl opacity-30">🌱</span>
      <span className="absolute bottom-4 right-4 text-xl opacity-30">🌱</span>

      <h2 className="font-display font-bold text-2xl text-center mb-1" style={{ color: "hsl(140,40%,20%)" }}>
        {poem.title}
      </h2>
      <p className="text-center font-body italic text-sm mb-6" style={{ color: "hsl(120,30%,40%)" }}>
        — {poem.author}
      </p>

      <div className="poem-text text-base space-y-1.5" style={{ color: "hsl(140,30%,18%)" }}>
        {poem.full_text.map((line, i) =>
          line === "" ? <br key={i} /> : <p key={i}>{line}</p>
        )}
      </div>

      {poem.link && (
        <a href={poem.link} target="_blank" rel="noopener noreferrer"
          className="mt-4 inline-block text-xs font-body hover:underline" style={{ color: "hsl(120,40%,30%)" }}>
          Fuente
        </a>
      )}
    </div>

    {/* Bottom vine */}
    <div className="text-center py-3 text-2xl opacity-50 select-none tracking-widest">
      🍃 🌺 🦋 🌺 🍃
    </div>

    <CloseButton onClose={onClose} className="top-12 right-6" dark />
  </div>
);

export default NatureModal;
