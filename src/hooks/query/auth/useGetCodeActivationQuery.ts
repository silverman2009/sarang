import { useQuery } from "react-query";
import { getActivationCodeSignin, getActivationCodeSignup, getCity } from "../../../services/auth";
import { usePathname, useRouter } from "next/navigation";

const useGetCodeActivationQuery = (phone: string, signup?:boolean) => {
    const router = useRouter()
    return useQuery("", async () => signup ? await getActivationCodeSignup(phone) : await getActivationCodeSignin(phone), {
        enabled: false,
        cacheTime:0,
        staleTime:0,
        retry:0,
        onSuccess: () => {
            router.push("/auth/verifyotp")
        },
        onError: (error) => {
            // return errorToast((error as AxiosError<any>)?.response?.data.Message);
        },
    });
};

export default useGetCodeActivationQuery;
