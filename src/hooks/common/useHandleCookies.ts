import axios from "../../services/utils/axios";
import useAuthStore from "../../stores/auth-store";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

const useHandleCookies = () => {
    const removeUser = useAuthStore((s) => s.removeUser);
    const [cookies, _, removeCookies] = useCookies(["token", "jwt"]);
    const { push } = useRouter();
    const pathname = usePathname()

    useEffect(() => {
        if (!cookies.token && !pathname.startsWith("/auth")) {
            delete axios.defaults.headers.common["Authorization"];
            removeCookies("token", { path: "/" });
            removeUser();
            push("/auth/signin");
        }
    }, [cookies.token]);
};

export default useHandleCookies;
