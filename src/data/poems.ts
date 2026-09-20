export type ModalStyle = "scroll" | "paper" | "medieval" | "letter" | "stained";

export interface Poem {
  id: string;
  title: string;
  author: string;
  preview: string;
  full: string[];
  modalStyle: ModalStyle;
  isPremium?: boolean;
}
