import {useRef} from "react"
import { useMutation } from "react-query";
import { farePayment } from "@/services/fare";
import { Fare } from "@/types/Driver";
import { errorToast, successToast } from "@/helpers/utils/error";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
// @ts-ignore
import Music from "@/assets/music/notfication.mp3"
const useFarePaymentMutation = () => {
    const telegramAudioRef = useRef<HTMLAudioElement | undefined>(
        typeof Audio !== "undefined" ? new Audio(Music) : undefined
    );
    const router = useRouter();
    return useMutation(async (data: Fare) => await farePayment(data), {
        onSuccess: async function () {
           await telegramAudioRef.current?.play()
            router.push("/user/pay/result");
        },
        onError: async function (error) {
            errorToast((error as AxiosError<any>)?.response?.data.Message);
        },
    });
};

export default useFarePaymentMutation;
