import { MenuItem } from "@/helpers/utils/data";
import { usePathname } from "next/navigation";
import React from "react";

const Menu = () => {
    const pathname = usePathname();
    return (
        <div className="flex items-center rounded-t-[24px] justify-center  fixed w-full bottom-0 h-[100px] menu">
            {MenuItem.map((menu, i) => (
                <div className="flex flex-1 flex-col items-center justify-center gap-2" key={i}>
                    <menu.icon fill={pathname === menu.url ? "#F67D14" : "#9FA8B1"} size="27" />
                    <p className={`font-artin-bold ${pathname === menu.url ? "text-[#F67D14]" : "text-[#9FA8B1]"}`}>
                        {menu.name}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Menu;
