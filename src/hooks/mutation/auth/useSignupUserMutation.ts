import { useMutation } from "react-query";
import { errorToast } from "../../../helpers/utils/error";
import { AxiosError } from "axios";
import { SignupUser } from "@/types/Auth";
import { signupUser } from "@/services/auth";

const useSignupUserMutation = () => {
    return useMutation(async (data: SignupUser) => await signupUser(data), {
        onSuccess: async function ({}) {},
        onError: async function (error) {
            errorToast((error as AxiosError<any>)?.response?.data.message);
        },
    });
};

export default useSignupUserMutation;
