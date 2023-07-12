import { useMutation } from "react-query";
import { loginUser } from "@/services/auth";
import { LoginUser } from "@/types/Auth";
import { useRouter } from "next/navigation";

const useLoginUserMuation = () => {
    const router = useRouter();
    return useMutation(async (data: LoginUser) => await loginUser(data), {
        onSuccess: async function ({}) {
            router.push("/user/auth/verifyotp/login");
        },
        onError: async function (error) {},
    });
};

export default useLoginUserMuation;
