import { getRoute } from "@/helpers/utils/services";
import client from "./utils/client";
import routes from "@/helpers/routes/apiRoutes";

export const farePayment = async (data: any) => {
    const url = getRoute({ route: `${routes.fare}` });
    return await client<string>({ url, method: "POST", data });
};
