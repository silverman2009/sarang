import { useQuery } from "react-query";
import { getActivationCodeSignup } from "../../../services/auth";
import { useRouter } from "next/navigation";

const useGetCodeActivationQuery = (phone: string) => {
    const router = useRouter()
    return useQuery("", async () => await getActivationCodeSignup(phone), {
        enabled: false,
        cacheTime:0,
        staleTime:0,
        retry:0,
        onSuccess: () => {
            router.push(`/auth/verifyotp/signup`)
        },
        onError: (error) => {
            // return errorToast((error as AxiosError<any>)?.response?.data.Message);
        },
    });
};

export default useGetCodeActivationQuery;
