import { useQuery } from "react-query";
import { errorToast } from "../../../helpers/utils/error";
import { AxiosError } from "axios";
import { getCity } from "../../../services/auth";
import { AUTH } from "@/helpers/constants/query-keys";

const useGetCityByIdQuery = (id: string) => {
    return useQuery([AUTH.GET_CITY, id], async () => await getCity(id), {
        enabled: Boolean(id),
        onSuccess: () => {},
        onError: (error) => {
            return errorToast((error as AxiosError<any>)?.response?.data.message);
        },
    });
};

export default useGetCityByIdQuery;
