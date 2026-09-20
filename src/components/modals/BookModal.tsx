import { DbPoem } from "@/types/poem";
import CloseButton from "./CloseButton";

const BookModal = ({ poem, onClose }: { poem: DbPoem; onClose: () => void }) => (
  <div className="relative animate-paper-fold max-w-2xl w-full mx-4">
    {/* Book spine */}
    <div className="flex rounded-xl overflow-hidden" style={{
      boxShadow: "0 10px 50px hsl(25,60%,15%/0.5), inset 0 0 0 2px hsl(25,50%,30%)",
    }}>
      {/* Left page */}
      <div className="w-1/2 p-8 relative" style={{
        background: "linear-gradient(135deg, hsl(38,60%,93%), hsl(38,50%,88%))",
        borderRight: "3px solid hsl(25,40%,50%)",
      }}>
        <div className="absolute top-4 left-4 text-gold/30 font-medieval text-lg">❦</div>
        <h2 className="font-display font-bold text-xl text-foreground mb-1 mt-6">{poem.title}</h2>
        <p className="font-body italic text-muted-foreground text-sm mb-4">— {poem.author}</p>
        <div className="poem-text text-foreground text-sm space-y-1">
          {poem.full_text.slice(0, Math.ceil(poem.full_text.length / 2)).map((line, i) =>
            line === "" ? <br key={i} /> : <p key={i}>{line}</p>
          )}
        </div>
      </div>

      {/* Right page */}
      <div className="w-1/2 p-8 relative" style={{
        background: "linear-gradient(225deg, hsl(38,60%,93%), hsl(38,50%,88%))",
      }}>
        <div className="absolute top-4 right-4 text-gold/30 font-medieval text-lg">❦</div>
        <div className="poem-text text-foreground text-sm space-y-1 mt-6">
          {poem.full_text.slice(Math.ceil(poem.full_text.length / 2)).map((line, i) =>
            line === "" ? <br key={i} /> : <p key={i}>{line}</p>
          )}
        </div>
        {poem.link && (
          <a href={poem.link} target="_blank" rel="noopener noreferrer"
            className="mt-4 inline-block text-gold text-xs font-body hover:underline">
            Fuente original
          </a>
        )}
      </div>
    </div>
    <CloseButton onClose={onClose} className="top-2 right-2" />
  </div>
);

export default BookModal;
