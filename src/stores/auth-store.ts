import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";

const useAuthStore = create<any>()(devtools(immer((set) => ({}))));

export default useAuthStore;
