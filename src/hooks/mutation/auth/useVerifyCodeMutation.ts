import { useMutation } from "react-query";
import { checkCode } from "@/services/auth";
import { CheckCode } from "@/types/Auth";
import { useParams, useRouter } from "next/navigation";

const useVerifyCodeMutation = () => {
    const params = useParams()
    const router = useRouter()

    return useMutation(async (data: CheckCode) => await checkCode(data), {
        onSuccess: async function () {
            if (params?.signup) {
                router.push("/auth/signup")
            } else {
                router.push("/")
            }
        },
        onError: async function (error) {

            // errorToast((error as AxiosError<any>)?.response?.data.Message);
        },
    });
};

export default useVerifyCodeMutation;
