import { useMutation } from "react-query";
import { farePayment } from "@/services/fare";
import { Fare } from "@/types/Driver";
import { errorToast, successToast } from "@/helpers/utils/error";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

const useFarePaymentMutation = () => {
    const router = useRouter()
    return useMutation(async (data: Fare) => await farePayment(data), {
        onSuccess: async function () {
            router.push("/pay/result")
        },
        onError: async function (error) {
            errorToast((error as AxiosError<any>)?.response?.data.Message);
        },
    });
};

export default useFarePaymentMutation;
