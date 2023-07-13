import { useMutation } from "react-query";
import { checkCodeSignup } from "@/services/auth";
import { CheckCode } from "@/types/Auth";
import { useParams, useRouter } from "next/navigation";

const useVerifyCodeSignupMutation = () => {
    const params = useParams();
    const router = useRouter();

    return useMutation(async (data: CheckCode) => await checkCodeSignup(data), {
        onSuccess: async function () {
            router.push("/auth/user/signup");
        },
        onError: async function (error) {
            // errorToast((error as AxiosError<any>)?.response?.data.Message);
        },
    });
};

export default useVerifyCodeSignupMutation;
