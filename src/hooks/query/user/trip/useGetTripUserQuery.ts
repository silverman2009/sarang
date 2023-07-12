import { useQuery } from "react-query";
import { USER } from "@/helpers/constants/query-keys";
import { getUserTrip } from "@/services/user";

const useGetTripUserQuery = () => {
    return useQuery([USER.GET_USER_TRIP], async () => await getUserTrip(), {
        onSuccess: () => {},
        onError: (error) => {},
    });
};

export default useGetTripUserQuery;
