import Image from "next/image";
import React from "react";
import User from "@/assets/images/user.png";
const ImageProfile = () => {
    return (
        <div className="bg-orange_light rounded-full w-16 h-16 flex justify-center items-center">
            <Image src={User} alt="" />
        </div>
    );
};

export default ImageProfile;
