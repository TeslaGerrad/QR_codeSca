import create from "zustand";

export const useQrStore = create<{
  qrText: string;
  generate: boolean;
  setQrText: (text: string) => void;
  getQrText: () => string;
}>((set, get) => ({
  qrText: "",
  generate: false,
  getQrText() {
    set(() => {
      return { generate: false };
    });
    return get().qrText;
  },
  setQrText: (text: string) =>
    set(() => {
      return {
        qrText: text,
        generate: true,
      };
    }),
}));

export default useQrStore;
