import Image from "next/image";
import React from "react";
import User from "@/assets/images/user.png";
import { Notifi_icon } from "../global/icons";
import useAuthStore from "@/stores/auth-store";
const ProfileInfo = () => {
    const { user} = useAuthStore()
    return (
        <div className="layout mt-5 flex justify-between items-center">
            <div className="flex gap-3 items-center">
                <div className="relative w-14 h-14 bg-orange_light rounded-full overflow-hidden">
                    <Image fill src={User} alt="" />
                </div>
                <div className="space-y-1">
                    <p className="font-estedad-bold">{user?.FirstName} {user?.LastName}</p>
                    <div className="flex items-center">
                        <p className="font-artin-regular">
                            موجودی : <span className="text-orange_light">{user?.Balance}</span> تومان
                        </p>
                    </div>
                </div>
            </div>
            <Notifi_icon />
        </div>
    );
};

export default ProfileInfo;
