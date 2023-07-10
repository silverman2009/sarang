import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { User } from "@/types/User";
interface UseAuthStore {
    phone: string;
    setPhone: (phone: string) => void;
    user: User | null;
    setUser: ({ user }: { user: User | null }) => void;
    removeUser:()=> void
}
const useAuthStore = create<UseAuthStore>()(devtools(immer((set) => ({
    phone: "",
    user: null,
    setPhone: (phone: string) => {
        set(
            (state) => {
                state.phone = phone
            },
        );
    },
    setUser: ({ user }: { user: User | null }) => {
        set(
            (state) => {
                state.user = user
            },
        );
    },
    removeUser: () => {
        set(
            (state) => {
                state.user = null
            },
        );
    },

}))));

export default useAuthStore;
