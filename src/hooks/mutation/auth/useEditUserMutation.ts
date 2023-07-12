import { useMutation } from "react-query";
import { editUserInfo, forgetPass, loginUser } from "@/services/auth";
import { useRouter } from "next/navigation";
import { getUser } from "@/services/user";
import useAuthStore from "@/stores/auth-store";
import { EditUser } from "@/types/User";
import { AxiosError } from "axios";
import { errorToast, successToast } from "@/helpers/utils/error";

const useEditUserMutation = () => {
    const router = useRouter();
    const { setUser } = useAuthStore()
    return useMutation(async (data: EditUser) => await editUserInfo(data), {
        onSuccess: async function ({ }) {
            const data: any = await getUser()
            setUser({user:data})
            router.push("/profile")
            successToast("ویرایش پروفایل با موفقیت انجام شد")
        },
        onError: async function (error) {
            errorToast((error as AxiosError<any>)?.response?.data.message);
        },
    });
};

export default useEditUserMutation;
