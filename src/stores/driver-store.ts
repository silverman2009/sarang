import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { Driver } from "@/types/Driver";
interface UserDriverStore {
    driver: Driver | null;
    setDriver: (driver: Driver | null) => void;
}
const useDriverStore = create<UserDriverStore>()(devtools(immer((set) => ({
    driver: null,
    setDriver: (driver: Driver | null) => {
        set(
            (state) => {
                state.driver = driver
            },
        );
    },

}))));

export default useDriverStore;
