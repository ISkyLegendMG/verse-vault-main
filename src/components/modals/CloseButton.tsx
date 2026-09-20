import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const CloseButton = ({
  onClose,
  className = "",
  className2 = "",
  dark = false,
}: {
  onClose: () => void;
  className?: string;
  className2?: string;
  dark?: boolean;
}) => (
  <button
    onClick={onClose}
    className={cn(
      "absolute p-1.5 rounded-full transition-all hover:scale-110",
      dark
        ? "text-[hsl(220,40%,25%)] hover:bg-[hsl(220,30%,15%/0.15)]"
        : "text-foreground hover:bg-muted",
      className2,
      className
    )}
  >
    <X size={16} />
  </button>
);

export default CloseButton;
