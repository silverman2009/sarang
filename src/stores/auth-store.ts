import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { User } from "@/types/User";
interface UseAuthStore {
    logoutDialog:boolean;
    phone: string;
    setPhone: (phone: string) => void;
    user: User | null;
    setUser: ({ user }: { user: User | null }) => void;
    removeUser: () => void;
    setLogoutDialog: () => void;
}
const useAuthStore = create<UseAuthStore>()(
    devtools(
        immer((set) => ({
            phone: "",
            logoutDialog: false,
            user: null,
            setPhone: (phone: string) => {
                set((state) => {
                    state.phone = phone;
                });
            },
            setUser: ({ user }: { user: User | null }) => {
                set((state) => {
                    state.user = user;
                });
            },
            removeUser: () => {
                set((state) => {
                    state.user = null;
                });
            },
            setLogoutDialog: () => {
                set((state) => {
                    state.logoutDialog = !state.logoutDialog;
                });
            },
        }))
    )
);

export default useAuthStore;
