import { DbPoem } from "@/types/poem";
import CloseButton from "./CloseButton";
import { ModalStyleConfig } from "./modalStyles";

interface Props {
  poem: DbPoem;
  onClose: () => void;
  style: ModalStyleConfig;
}

const GenericStyledModal = ({ poem, onClose, style: s }: Props) => (
  <div
    className="relative animate-paper-fold max-w-md w-full mx-4 rounded-xl overflow-hidden"
    style={s.container}
  >
    <div className="relative px-10 py-10">
      {s.ornamentTop && (
        <div className="text-center mb-4">
          <span className="text-sm opacity-50 tracking-[0.3em]" style={{ color: s.authorColor }}>
            {s.ornamentTop}
          </span>
        </div>
      )}
      <h2 className="font-display font-bold text-2xl text-center mb-1" style={{ color: s.titleColor }}>
        {poem.title}
      </h2>
      <p className="text-center font-body italic text-sm mb-6" style={{ color: s.authorColor }}>
        — {poem.author}
      </p>
      <div className="poem-text text-base space-y-1.5" style={{ color: s.textColor }}>
        {poem.full_text.map((line, i) =>
          line === "" ? <br key={i} /> : <p key={i}>{line}</p>
        )}
      </div>
      {poem.link && (
        <a
          href={poem.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-xs font-body hover:underline"
          style={{ color: s.linkColor }}
        >
          Fuente
        </a>
      )}
      {s.ornamentBottom && (
        <div className="text-center mt-6 opacity-40">
          <span style={{ color: s.authorColor }}>{s.ornamentBottom}</span>
        </div>
      )}
    </div>
    <CloseButton
      onClose={onClose}
      className="top-4 right-4"
      {...(s.closeDark ? { dark: true } : {})}
      {...(s.closeColor ? { className2: s.closeColor } : {})}
    />
  </div>
);

export default GenericStyledModal;
