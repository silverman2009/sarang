import { useMutation } from "react-query";
import { errorToast } from "../../../helpers/utils/error";
import { AxiosError } from "axios";
import { loginUser } from "@/services/auth";
import { LoginUser } from "@/types/Auth";
import { useRouter } from "next/navigation";

const useLoginUserMuation = () => {
    const router = useRouter()
    return useMutation(async (data: LoginUser) => await loginUser(data), {
        onSuccess: async function ({}) {
            router.push("/auth/verifyotp/login")
        },
        onError: async function (error) {
            // errorToast((error as AxiosError<any>)?.response?.data.message);
        },
    });
};

export default useLoginUserMuation;
