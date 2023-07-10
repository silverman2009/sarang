import { useQuery } from "react-query";
import { useRouter } from "next/navigation";
import { getDriverByCityName } from "@/services/driver";
import { DRIVER } from "@/helpers/constants/query-keys";

const useGetDriverByCityNumberQuery = (code: string) => {
    const router = useRouter()
    return useQuery([DRIVER.GETDRIVE_BY_CITYNUMBER, code], async () => await getDriverByCityName(code), {
        enabled: false,
        cacheTime: 0,
        staleTime: 0,
        retry: 0,
        onSuccess: () => {
            router.push(`/driver/info`)
        },
        onError: (error) => {
        },
    });
};

export default useGetDriverByCityNumberQuery;
