import { useQuery } from "react-query";
import { useRouter } from "next/navigation";
import { getDriverByCityName } from "@/services/driver";
import { DRIVER } from "@/helpers/constants/query-keys";
import useDriverStore from "@/stores/driver-store";
import { errorToast } from "@/helpers/utils/error";

const useGetDriverByCityNumberQuery = () => {
    const { code } = useDriverStore();
    const router = useRouter();
    const { setDriver } = useDriverStore();
    return useQuery([DRIVER.GETDRIVE_BY_CITYNUMBER, code], async () => await getDriverByCityName(code), {
        enabled: Boolean(code),
        cacheTime: 0,
        staleTime: 0,
        retry: 0,
        onSuccess: async (data) => {
            if (!data?.CarRoute?.Name) return;
            await setDriver(data);
            router.push(`/user/driver/info`);
        },
        onError: (error) => {
            return errorToast("راننده ای یا این کد شهری یافت نشد");
        },
    });
};

export default useGetDriverByCityNumberQuery;
