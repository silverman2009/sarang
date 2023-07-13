import { MoreMenuUser } from "@/helpers/utils/data";
import Link from "next/link";
import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";

const MoreMenu = () => {
    return (
        <div>
            {MoreMenuUser.map((menu, i) => (
                <div key={i} className="flex border-b py-4  border-gray-200 items-center justify-between">
                    <Link href={menu.url} className="flex gap-2  items-center">
                        <menu.icon size={26} color="#626262" />
                        <p className="font-artin-regular text-lg text-[#222222]">{menu.name}</p>
                    </Link>

                    <MdArrowBackIosNew color="#626262" size={18} />
                </div>
            ))}
        </div>
    );
};

export default MoreMenu;
