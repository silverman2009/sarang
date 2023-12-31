import Image from "next/image";
import React from "react";
import User from "@/assets/images/user.png";
import { Notifi_icon } from "../global/icons";
import useAuthStore from "@/stores/auth-store";
import { usePathname, useRouter } from "next/navigation";
import { BiArrowBack } from "react-icons/bi";
interface Props {
    back?: boolean;
}
const ProfileInfo = ({ back }: Props) => {
    const { user } = useAuthStore();
    const pathname = usePathname();
    const router = useRouter();
    return (
        <div className="  flex justify-between sticky top-0 px-5 py-4 border-b pb-4 items-center z-[9999] bg-[#f3f3f3]">
            <div className="flex gap-3 items-center">
                <div className="relative w-14 h-14 bg-orange_light rounded-full overflow-hidden">
                    <Image fill src={User} alt="" />
                </div>
                <div className="space-y-1">
                    <p className="font-estedad-bold">
                        {user?.FirstName} {user?.LastName}
                    </p>
                    {}
                    <div className="flex items-center">
                        {!pathname.startsWith("/driver") && (
                            <p className="font-artin-regular">
                                موجودی : <span className="text-orange_light">{user?.Balance.toLocaleString()}</span> تومان
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {back ? <BiArrowBack onClick={() => router.back()} size={25} /> : <Notifi_icon />}
        </div>
    );
};

export default ProfileInfo;
