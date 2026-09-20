import { DbPoem } from "@/types/poem";
import CloseButton from "./CloseButton";

const PapyrusModal = ({ poem, onClose }: { poem: DbPoem; onClose: () => void }) => (
  <div className="relative animate-unfurl max-w-lg w-full mx-4 rounded-sm overflow-hidden" style={{
    background: "linear-gradient(170deg, hsl(38,65%,78%), hsl(35,55%,72%), hsl(30,50%,68%))",
    boxShadow: "0 8px 40px hsl(30,50%,20%/0.5), inset 0 0 60px hsl(30,40%,50%/0.2)",
    border: "2px solid hsl(30,50%,55%)",
  }}>
    {/* Egyptian top border */}
    <div className="flex justify-center gap-2 py-3 text-2xl opacity-40 select-none"
      style={{ borderBottom: "2px solid hsl(30,50%,55%)" }}>
      <span>𓂀</span><span>𓁹</span><span>𓃭</span><span>𓆣</span><span>𓁹</span><span>𓂀</span>
    </div>

    <div className="px-10 py-8">
      <h2 className="font-display font-bold text-2xl text-center mb-1"
        style={{ color: "hsl(25,60%,20%)" }}>
        {poem.title}
      </h2>
      <p className="text-center font-body italic text-sm mb-6" style={{ color: "hsl(25,50%,35%)" }}>
        — {poem.author}
      </p>

      <div className="poem-text text-base space-y-1.5" style={{ color: "hsl(25,50%,18%)" }}>
        {poem.full_text.map((line, i) =>
          line === "" ? <br key={i} /> : <p key={i}>{line}</p>
        )}
      </div>

      {poem.link && (
        <a href={poem.link} target="_blank" rel="noopener noreferrer"
          className="mt-4 inline-block text-xs font-body hover:underline" style={{ color: "hsl(25,60%,30%)" }}>
          Fuente
        </a>
      )}
    </div>

    {/* Egyptian bottom border */}
    <div className="flex justify-center gap-2 py-3 text-2xl opacity-40 select-none"
      style={{ borderTop: "2px solid hsl(30,50%,55%)" }}>
      <span>𓆣</span><span>𓃭</span><span>𓁹</span><span>𓃭</span><span>𓆣</span>
    </div>

    <CloseButton onClose={onClose} className="top-12 right-4" dark />
  </div>
);

export default PapyrusModal;
