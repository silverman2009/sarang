import { useQuery } from "react-query";
import { USER } from "@/helpers/constants/query-keys";
import { getMyTransactions, getUserTrip } from "@/services/user";

const useGetMyTransactions = () => {
    return useQuery([USER.GET_MY_TRANSACTIONS], async () => await getMyTransactions(), {
        onSuccess: () => {},
        onError: (error) => {},
    });
};

export default useGetMyTransactions;
