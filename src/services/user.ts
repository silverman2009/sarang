import { getRoute } from "@/helpers/utils/services";
import client from "./utils/client";
import routes from "@/helpers/routes/apiRoutes";
import { ResponseGetUserInfoQuery } from "@/types/User/ResponseGetUserInfoQuery";
import { Driver } from "@/types/Driver";
import { Trip } from "@/types/Driver/ResponseUserTripQuery";

export const getUser = async () => {
    const url = getRoute({ route: `${routes.auth.me}` });
    return await client<ResponseGetUserInfoQuery>({ url, method: "GET" });
};
export const getUserTrip = async () => {
    const url = getRoute({ route: `${routes.user.trip}` });
    return await client<Trip[]>({ url, method: "GET" });
};
