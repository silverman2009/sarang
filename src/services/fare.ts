import { getRoute } from "@/helpers/utils/services";
import client from "./utils/client";
import routes from "@/helpers/routes/apiRoutes";
import { ResponseGetGriverByCityNumberQuery } from "@/types/Driver/ResponseGetGriverByCityNumberQuery";
import { Fare } from "@/types/Driver";

export const farePayment = async (data: Fare) => {
    const url = getRoute({ route: `${routes.fare}` });
    return await client<string>({ url, method: "POST", data });
};
