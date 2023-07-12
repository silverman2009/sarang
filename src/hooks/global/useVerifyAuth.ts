import axios from "../../services/utils/axios";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import useAuthStore from "../../stores/auth-store";
import { getUser } from "@/services/user";
import { usePathname } from "next/navigation";
import { getDriver } from "@/services/driver";

const useVerifyAuth = () => {
    const pathname = usePathname();
    const setUser = useAuthStore((s) => s.setUser);
    const [cookies, setCookies, removeCookies] = useCookies(["token"]);
    useEffect(() => {
        if (cookies.token) {
            const verifyUser = async () => {
                axios.defaults.headers.common["x-access-token"] = `${cookies.token}`;
                try {
                    if (pathname.startsWith("/driver")) {
                        const data: any = await getDriver();
                        if (data) {
                            setUser({ user: data });
                        }
                    } else {
                        const data: any = await getUser();
                        if (data) {
                            setUser({ user: data });
                        }
                    }
                } catch (error) {
                    delete axios.defaults.headers.common["x-access-token"];
                    removeCookies("token", { path: "/" });
                }
            };
            verifyUser();
        }
    }, [cookies.token, pathname]);
};

export default useVerifyAuth;
