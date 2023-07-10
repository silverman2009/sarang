import { useMutation } from "react-query"
import { forgetPass, loginUser } from "@/services/auth";
import { ForgetPass, LoginUser } from "@/types/Auth";
import { useRouter } from "next/navigation";

const useForgetPassMutation = () => {
    const router = useRouter()
    return useMutation(async (data: ForgetPass) => await forgetPass(data), {
        onSuccess: async function ({}) {
            // router.push("/auth/signin")
        },
        onError: async function (error) {
            // errorToast((error as AxiosError<any>)?.response?.data.message);
        },
    });
};

export default useForgetPassMutation;
