import { useQuery } from "react-query";
import { errorToast } from "../../../helpers/utils/error";
import { AxiosError } from "axios";
import { getActivationCodeSignup, getCity } from "../../../services/auth";
import { AUTH } from "@/helpers/constants/query-keys";
import { useRouter } from "next/navigation";

const useGetCodeActivationSignupQuery = (phone: string) => {
    const router = useRouter()
    return useQuery([AUTH.GET_CODE_SIGNUP,phone], async () => await getActivationCodeSignup(phone), {
        enabled: false,
        onSuccess: () => {

        },
        onError: (error) => {
            router.push("/auth/verifyotp")
            // return errorToast((error as AxiosError<any>)?.response?.data.Message);
        },
    });
};

export default useGetCodeActivationSignupQuery;
