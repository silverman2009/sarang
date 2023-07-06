import { getRoute } from "@/helpers/utils/services";
import client from "./utils/client";
import routes from "@/helpers/routes/apiRoutes"
import { ResponseGetCityQuery } from "@/types/Auth/ResponseGetCityQuery";
import { SignupUser } from "@/types/Auth";

export const getCity = async (id: string) => {
    const url = getRoute({ route: `${routes.auth.getCity}/${id}/cities` });
    return await client<ResponseGetCityQuery>({ url, method: "GEt" });
};
export const signupUser = async (data: SignupUser) => {
    const url = getRoute({ route: `${routes.auth.signup}` });
    return await client<string>({ url, method: "POST",data });
};


