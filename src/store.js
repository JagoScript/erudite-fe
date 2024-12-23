import { create } from "zustand";

const useStore = create((set) => ({
  inputValue: "",
  setInputValue: (value) => set({ inputValue: value }),
}));

export default useStore;
