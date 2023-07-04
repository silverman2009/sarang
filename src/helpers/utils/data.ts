import { Menu_icon, Wallet_icon } from "@/components/global/icons"
import { BsClockHistory } from "react-icons/bs"

export const sexPerson = [
    {
        value: "مرد",
        label: "مرد"
    },
    {
        value: "زن",
        label: "زن"
    },
]


export const MenuItem = [
    {
      name:"سفر‌ها",
      icon:BsClockHistory,
      url:"/trip"
    },
    {
      name:"صحفه اصلی",
      icon:Menu_icon,
      url:"/"
    },
    {
      name:"کیف پول",
      icon:Wallet_icon,
      url:"/wallet"
    },
]