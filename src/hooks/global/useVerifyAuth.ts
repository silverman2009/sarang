import axios from "../../services/utils/axios";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import useAuthStore from "../../stores/auth-store";
import { getUser } from "@/services/user";

const useVerifyAuth = () => {
    // const setAuthLoading = useAuthStore((s) => s.setAuthLoading);
    const setUser = useAuthStore((s) => s.setUser);
    const removeUser = useAuthStore((s) => s.removeUser);
    const [cookies, setCookies, removeCookies] = useCookies(["token"]);
    useEffect(() => {
        if (cookies.token) {
            const verifyUser = async () => {
                axios.defaults.headers.common["x-access-token"] = `${cookies.token}`;
                try {
                    const data: any = await getUser();
                    if (data) {
                        setUser({ user:data });
                    }
                } catch (error) {
                    delete axios.defaults.headers.common["x-access-token"];
                    removeCookies("token", { path: "/" });
                } 

            };
            verifyUser();
        } else if (!cookies.token) {
            const refreshUser = async () => {
                delete axios.defaults.headers.common["Authorization"];
                removeCookies("token", { path: "/" });
                // const { data, status } = await refreshToken({ refresh_token: cookies.jwt });
                // if (status) {
                //     const token = data.token.original;
                //     const user = data.user;
                //     setUser({ user });
                //     axios.defaults.headers.common["Authorization"] = `Bearer ${token.access_token}`;
                //     setCookies("token", token.access_token, { path: "/", maxAge: token.expires_in - 100 });
                //     setCookies("jwt", token.refresh_token, { path: "/" });
                // }
            };
            refreshUser();
        } else {
            delete axios.defaults.headers.common["x-access-token"];
            removeCookies("token", { path: "/" });
            removeUser();
        }
    }, [cookies.token]);
};

export default useVerifyAuth;
