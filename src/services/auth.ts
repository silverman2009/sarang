import { getRoute } from "@/helpers/utils/services";
import client from "./utils/client";
import routes from "@/helpers/routes/apiRoutes"
import { ResponseGetCityQuery } from "@/types/Auth/ResponseGetCityQuery";
import { CheckCode, LoginUser, SignupUser } from "@/types/Auth";

export const getCity = async (id: string) => {
    const url = getRoute({ route: `${routes.auth.getCity}/${id}/cities` });
    return await client<ResponseGetCityQuery>({ url, method: "GET" });
};
export const signupUser = async (data: SignupUser) => {
    const url = getRoute({ route: `${routes.auth.signup}` });
    return await client<string>({ url, method: "POST",data });
};
export const loginUser = async (data: LoginUser) => {
    const url = getRoute({ route: `${routes.auth.login}` });
    return await client<string>({ url, method: "POST",data });
};


export const getActivationCodeSignup = async (phone: string) => {
    const url = getRoute({ route: `${routes.auth.getCodeSignup}/${phone}` });
    return await client<string>({ url, method: "GET" });
};


export const checkCodeSignup = async (data: CheckCode) => {
    const url = getRoute({ route: `${routes.auth.checkCodeSignup}` });
    return await client<string>({ url, method: "POST",data });
};
export const checkCodeLogin = async (data: CheckCode) => {
    const url = getRoute({ route: `${routes.auth.checkCodeLogin}` });
    return await client<{token:string}>({ url, method: "POST",data });
};