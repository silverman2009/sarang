import axios from "../../services/utils/axios";
import useAuthStore from "../../stores/auth-store";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

const useHandleCookies = () => {
    const removeUser = useAuthStore((s) => s.removeUser);
    const [cookies, _, removeCookies] = useCookies(["token", "jwt"]);
    const { push } = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (!cookies.token && !pathname.startsWith("/auth") && pathname !== "/") {
            delete axios.defaults.headers.common["x-access-token"];
            removeCookies("token", { path: "/" });
            removeUser();
            push("/");
        }
    }, [cookies.token]);
};

export default useHandleCookies;
