import { create } from "zustand";

interface ConfigState {
  color: string;
  setColor: (newColor: string) => void;
  colors: Array<any>;
  setColors: (newColors: Array<any>) => void;
}

export const useConfigStore = create<ConfigState>()((set) => ({
  color: "#ff0000",
  setColor: (newColor) => set((state) => ({ color: newColor })),
  colors: [],
  setColors: (newColors) => set((state) => ({ colors: newColors })),
}));
