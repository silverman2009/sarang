import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
interface UseAuthStore {
    phone: string;
    setPhone: (phone: string) => void;
}
const useAuthStore = create<UseAuthStore>()(devtools(immer((set) => ({
    phone: "",
    setPhone: (phone: string) => {
        set(
            (state) => {
                state.phone = phone;
            },
        );
    },

}))));

export default useAuthStore;
