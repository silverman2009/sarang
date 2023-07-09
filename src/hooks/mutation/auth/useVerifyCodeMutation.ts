import { useMutation } from "react-query";
import { errorToast } from "../../../helpers/utils/error";
import { AxiosError } from "axios";
import { checkCode } from "@/services/auth";
import { CheckCode } from "@/types/Auth";
import { useRouter } from "next/navigation";

const useVerifyCodeMutation = () => {
    const router = useRouter()
    return useMutation(async (data: CheckCode) => await checkCode(data), {
        onSuccess: async function ({ }) {
            router.push("/auth/signup")
         },
        onError: async function (error) {
            // errorToast((error as AxiosError<any>)?.response?.data.Message);
        },
    });
};

export default useVerifyCodeMutation;
