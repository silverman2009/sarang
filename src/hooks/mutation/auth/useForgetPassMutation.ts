import { useMutation } from "react-query";
import { forgetPass } from "@/services/auth";
import { ForgetPass } from "@/types/Auth";
import { AxiosError } from "axios";
import { errorToast } from "@/helpers/utils/error";

const useForgetPassMutation = () => {
    return useMutation(async (data: ForgetPass) => await forgetPass(data), {
        onError: async function (error) {
            errorToast((error as AxiosError<any>)?.response?.data.message);
        },
    });
};

export default useForgetPassMutation;
