import { useQuery } from "react-query";
import { useRouter } from "next/navigation";
import { getDriverByCityName } from "@/services/driver";
import { DRIVER } from "@/helpers/constants/query-keys";
import useDriverStore from "@/stores/driver-store";

const useGetDriverByCityNumberQuery = () => {
    const {code} = useDriverStore()
    const router = useRouter();
    const { setDriver } = useDriverStore();
    return useQuery([DRIVER.GETDRIVE_BY_CITYNUMBER, code], async () => await getDriverByCityName(code), {
        enabled: Boolean(code),
        cacheTime: 0,
        staleTime: 0,
        retry: 0,
        onSuccess: (data) => {
            setDriver(data);
            router.push(`/driver/info`);
        },
        onError: (error) => {},
    });
};

export default useGetDriverByCityNumberQuery;
