import axios from "@/services/utils/axios";
import useAuthStore from "@/stores/auth-store";
import { Dialog } from "@mui/material";
import React from "react";
import { useCookies } from "react-cookie";

const Logout = () => {
    const [cookies, _, removeCookies] = useCookies(["token"]);
    const { logoutDialog, setLogoutDialog, removeUser } = useAuthStore();
    const logout = () => {
        delete axios.defaults.headers.common["x-access-token"];
        removeCookies("token", { path: "/" });
        removeUser();
        setLogoutDialog();
    };
    return (
        <Dialog fullWidth open={logoutDialog}>
            <div className="bg-white py-5">
                <h1 className="font-artin-bold text-center py-4 text-xl">آیا مطمعن هستید که میخواهید از حساب خود خارج شوید؟</h1>
                <div className="flex mt-5 justify-between gap-14 items-center px-2">
                    <button
                        onClick={setLogoutDialog}
                        className="flex-1 flex gap-1 justify-center rounded-lg items-center py-3 border border-gray-200 font-artin-regular"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.4272 18.8172C14.2372 18.8172 14.0472 18.7472 13.8972 18.5972C13.6072 18.3072 13.6072 17.8272 13.8972 17.5372L19.4372 11.9972L13.8972 6.45719C13.6072 6.16719 13.6072 5.68719 13.8972 5.39719C14.1872 5.10719 14.6672 5.10719 14.9572 5.39719L21.0272 11.4672C21.3172 11.7572 21.3172 12.2372 21.0272 12.5272L14.9572 18.5972C14.8072 18.7472 14.6172 18.8172 14.4272 18.8172Z"
                                fill="#3B3B3B"
                            />
                            <path
                                d="M20.33 12.75H3.5C3.09 12.75 2.75 12.41 2.75 12C2.75 11.59 3.09 11.25 3.5 11.25H20.33C20.74 11.25 21.08 11.59 21.08 12C21.08 12.41 20.74 12.75 20.33 12.75Z"
                                fill="#3B3B3B"
                            />
                        </svg>
                        منصرف شدم
                    </button>
                    <button onClick={logout} className="flex-1 font-artin-regular py-3 rounded-lg bg-[#FCE9EC] text-[#DF2040]">
                        خارج میشوم
                    </button>
                </div>
            </div>
        </Dialog>
    );
};

export default Logout;
