import { getRoute } from "@/helpers/utils/services";
import client from "./utils/client";
import routes from "@/helpers/routes/apiRoutes";
import { ResponseGetGriverByCityNumberQuery } from "@/types/Driver/ResponseGetGriverByCityNumberQuery";

export const getDriverByCityName = async (code: string) => {
    const url = getRoute({ route: `${routes.driver.getDriverByCityNumber}/${code}` });
    return await client<ResponseGetGriverByCityNumberQuery>({ url, method: "GET" });
};
