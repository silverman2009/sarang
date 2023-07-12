import { MenuItemDriver } from "@/helpers/utils/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MenuDriver = () => {
    const pathname = usePathname();
    return (
        <div className="flex items-center rounded-t-[24px] justify-center  fixed w-full bottom-0 h-[85px] menu">
            {MenuItemDriver.map((menu, i) => (
                <Link href={menu.url} className="flex flex-1 flex-col items-center justify-center gap-2" key={i}>
                    <menu.icon fill={pathname === menu.url ? "#F67D14" : "#9FA8B1"} size="27" />
                    <p className={`font-artin-bold ${pathname === menu.url ? "text-[#F67D14]" : "text-[#9FA8B1]"}`}>
                        {menu.name}
                    </p>
                </Link>
            ))}
        </div>
    );
};

export default MenuDriver;
