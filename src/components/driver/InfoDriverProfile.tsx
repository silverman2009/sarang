import Image from "next/image";
import React from "react";
import { Location_icon } from "../global/icons";
import User from "@/assets/images/user.png";
import useDriverStore from "@/stores/driver-store";
import { usePathname } from "next/navigation";

const InfoDriverProfile = () => {
    const { driver } = useDriverStore();
    const pathname = usePathname();

    return (
        <div className="flex items-center gap-2 mt-8 ">
            <div className="bg-orange_light rounded-full w-16 h-16 flex justify-center items-center">
                <Image src={User} alt="" />
            </div>
            <div className="flex flex-col gap-2">
                <p className="font-estedad-bold">
                    {pathname.startsWith("/driver") ? (
                        <span>
                            {driver?.user.FirstName} {driver?.user.LastName}
                        </span>
                    ) : (
                        <span>
                            {driver?.Firstname} {driver?.LastName}
                        </span>
                    )}
                </p>
                <div className="flex gap-2 items-center">
                    <Location_icon />
                    <p className="font-artin-regular">{driver?.CarRoute.Name}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoDriverProfile;
