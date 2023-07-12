import { useMutation } from "react-query";
import { forgetPass } from "@/services/auth";
import { ForgetPass } from "@/types/Auth";
import { usePathname, useRouter } from "next/navigation";
import { AxiosError } from "axios";
import { errorToast } from "@/helpers/utils/error";

const useForgetPassMutation = () => {
    const router = useRouter();
    const pathname = usePathname();
    return useMutation(async (data: ForgetPass) => await forgetPass(data), {
        onSuccess: async function ({}) {
            if (pathname.startsWith("/driver")) {
                router.push("/auth/driver/auth/signin");
            } else {
                router.push("/auth/user/auth/signin");
            }
        },
        onError: async function (error) {
            errorToast((error as AxiosError<any>)?.response?.data.message);
        },
    });
};

export default useForgetPassMutation;
