import { useMutation } from "react-query";
import { errorToast } from "../../../helpers/utils/error";
import { AxiosError } from "axios";
import { checkCode } from "@/services/auth";
import { CheckCode } from "@/types/Auth";

const useVerifyCodeMutation = () => {
    return useMutation(async (data: CheckCode) => await checkCode(data), {
        onSuccess: async function ({}) {},
        onError: async function (error) {
            errorToast((error as AxiosError<any>)?.response?.data.message);
        },
    });
};

export default useVerifyCodeMutation;
