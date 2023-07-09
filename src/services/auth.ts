import { getRoute } from "@/helpers/utils/services";
import client from "./utils/client";
import routes from "@/helpers/routes/apiRoutes"
import { ResponseGetCityQuery } from "@/types/Auth/ResponseGetCityQuery";
import { CheckCode, SignupUser } from "@/types/Auth";

export const getCity = async (id: string) => {
    const url = getRoute({ route: `${routes.auth.getCity}/${id}/cities` });
    return await client<ResponseGetCityQuery>({ url, method: "GET" });
};
export const signupUser = async (data: SignupUser) => {
    const url = getRoute({ route: `${routes.auth.signup}` });
    return await client<string>({ url, method: "POST",data });
};


export const getActivationCodeSignup = async (phone: string) => {
    const url = getRoute({ route: `${routes.auth.getCodeSignup}/${phone}` });
    return await client<string>({ url, method: "GET" });
};
export const getActivationCodeSignin = async (phone: string) => {
    const url = getRoute({ route: `${routes.auth.getCodeSignin}/${phone}` });
    return await client<string>({ url, method: "GET" });
};

export const checkCode = async (data: CheckCode) => {
    const url = getRoute({ route: `${routes.auth.checkCode}` });
    return await client<string>({ url, method: "POST",data });
};