import { useMutation } from "react-query";
import { checkCodeLogin } from "@/services/auth";
import { CheckCode } from "@/types/Auth";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import axios from "@/services/utils/axios";

const useVerifyCodeLoginMutation = () => {
    const [, setCookies] = useCookies(["token"]);
    const router = useRouter();

    return useMutation(async (data: CheckCode) => await checkCodeLogin(data), {
        onSuccess: async function ({ token }) {
            setCookies("token", token, { path: "/" });
            axios.defaults.headers.common["x-access-token"] = `${token}`;
            router.push("/");
        },
        onError: async function (error) {},
    });
};

export default useVerifyCodeLoginMutation;
