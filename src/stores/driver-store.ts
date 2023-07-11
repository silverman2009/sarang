import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { Driver, TypePayment } from "@/types/Driver";
interface UserDriverStore {
    driver: Driver | null;
    setDriver: (driver: Driver | null) => void;
    paymentTypeEnum: string | undefined;
    setPaymentTypeEnum: (typePay: string | undefined) => void;
    code: string;
    setCode: (code: string) => void;
}
const useDriverStore = create<UserDriverStore>()(
    devtools(
        immer((set) => ({
            driver: null,
            code: "",
            paymentTypeEnum: undefined,
            setDriver: (driver: Driver | null) => {
                set((state) => {
                    state.driver = driver;
                });
            },
            setPaymentTypeEnum: (typePay: string | undefined) => {
                set((state) => {
                    state.paymentTypeEnum = typePay;
                });
            },
            setCode: (code: string) => {
                set((state) => {
                    state.code = code;
                });
            },

        }))
    )
);

export default useDriverStore;
