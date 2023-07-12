import { useMutation } from "react-query";
import { loginUser } from "@/services/auth";
import { LoginUser } from "@/types/Auth";
import { usePathname, useRouter } from "next/navigation";

const useLoginUserMuation = () => {
    const router = useRouter();
    const pathname = usePathname()
    return useMutation(async (data: LoginUser) => await loginUser(data), {
        onSuccess: async function ({ }) {
            if (pathname.startsWith("/driver")) {

                router.push("/driver/auth/verifyotp/login");
            } else {

                router.push("/user/auth/verifyotp/login");
            }
        },
        onError: async function (error) { },
    });
};

export default useLoginUserMuation;
