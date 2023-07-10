import { getRoute } from "@/helpers/utils/services";
import client from "./utils/client";
import routes from "@/helpers/routes/apiRoutes"
import { ResponseGetUserInfoQuery } from "@/types/User/ResponseGetUserInfoQuery";




export const getUser = async () => {
    const url = getRoute({ route: `${routes.auth.me}` });
    return await client<ResponseGetUserInfoQuery>({ url, method: "GET" });
};
