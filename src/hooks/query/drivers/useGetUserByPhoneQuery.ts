import { useQuery } from "react-query";
import { useRouter } from "next/navigation";
import { DRIVER } from "@/helpers/constants/query-keys";
import useDriverStore from "@/stores/driver-store";
import { errorToast } from "@/helpers/utils/error";
import { getUserInfoByPhone } from "@/services/driver";

const useGetUserByPhoneQuery = () => {
    const { phone } = useDriverStore();
    const router = useRouter();
    const { setDriver } = useDriverStore();
    return useQuery([DRIVER.GETDRIVE_BY_PHONE, phone], async () => await getUserInfoByPhone(phone), {
        enabled: Boolean(phone),
        cacheTime: 0,
        staleTime: 0,
        retry: 0,
        onSuccess: async (data) => {
            if (!data?.CarRoute?.Name) return;
            await setDriver(data);
            router.push(`/driver/user/info`);
        },
        onError: (error) => {
            return errorToast("راننده ای یا این کد شهری یافت نشد");
        },
    });
};

export default useGetUserByPhoneQuery;
