import { useMutation } from "react-query";
import { checkCodeLogin } from "@/services/auth";
import { CheckCode } from "@/types/Auth";
import { usePathname, useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import axios from "@/services/utils/axios";

const useVerifyCodeLoginMutation = () => {
    const [, setCookies] = useCookies(["token"]);
    const router = useRouter();
    const pathname = usePathname();

    return useMutation(async (data: CheckCode) => await checkCodeLogin(data), {
        onSuccess: async function ({ token }) {
            setCookies("token", token, { path: "/" });
            axios.defaults.headers.common["x-access-token"] = `${token}`;
            if (pathname === "/auth/driver/verifyotp/login") {
                router.push("/driver");
            } else {
                router.push("/user");
            }
        },
        onError: async function (error) {},
    });
};

export default useVerifyCodeLoginMutation;
