import { Home_icons, User_icon, Wallet_icon } from "@/components/global/icons";
import { BiLogoTelegram, BiSupport } from "react-icons/bi";
import { BsDiscord, BsFillCreditCardFill, BsTwitter } from "react-icons/bs";
import { FaCar } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
export const sexPerson = [
    {
        value: "مرد",
        label: "مرد",
    },
    {
        value: "زن",
        label: "زن",
    },
];

export const MenuItem = [
    {
        name: "پروفایل",
        icon: User_icon,
        url: "/user/profile",
    },
    {
        name: "صحفه اصلی",
        icon: Home_icons,
        url: "/user",
    },
    {
        name: "تراکنش ",
        icon: Wallet_icon,
        url: "/user/transactions",
    },
];

export const states = [
    { _id: "60486e2f98940cc14406ca54", state: "آذربایجان شرقی" },
    { _id: "60486f5098940cc14406cac6", state: "آذربایجان غربی" },
    { _id: "6048700ec917be5bd82d3d62", state: "اردبیل" },
    { _id: "6048700ec917be5bd82d3d63", state: "اصفهان" },
    { _id: "6048700ec917be5bd82d3d64", state: "البرز" },
    { _id: "6048700ec917be5bd82d3d65", state: "ایلام" },
    { _id: "6048700ec917be5bd82d3d66", state: "بوشهر" },
    { _id: "6048700ec917be5bd82d3d67", state: "تهران" },
    { _id: "6048700ec917be5bd82d3d68", state: "چهارمحال و بختیاری" },
    { _id: "6048700ec917be5bd82d3d69", state: "خراسان جنوبی" },
    { _id: "6048700ec917be5bd82d3d6a", state: "خراسان رضوی" },
    { _id: "6048700ec917be5bd82d3d6b", state: "خراسان شمالی" },
    { _id: "6048700ec917be5bd82d3d6c", state: "خوزستان" },
    { _id: "6048700ec917be5bd82d3d6d", state: "زنجان" },
    { _id: "6048700ec917be5bd82d3d6e", state: "سمنان" },
    { _id: "6048700ec917be5bd82d3d6f", state: "سیستان و بلوچستان" },
    { _id: "6048700ec917be5bd82d3d70", state: "فارس" },
    { _id: "6048700ec917be5bd82d3d71", state: "قزوین" },
    { _id: "6048700ec917be5bd82d3d72", state: "قم" },
    { _id: "6048700ec917be5bd82d3d73", state: "کردستان" },
    { _id: "6048700ec917be5bd82d3d74", state: "کرمان" },
    { _id: "6048700ec917be5bd82d3d75", state: "کرمانشاه" },
    { _id: "6048700ec917be5bd82d3d76", state: "کهگیلویه وبویراحمد" },
    { _id: "6048700ec917be5bd82d3d77", state: "گلستان" },
    { _id: "6048700ec917be5bd82d3d78", state: "گیلان" },
    { _id: "6048700ec917be5bd82d3d79", state: "لرستان" },
    { _id: "6048700ec917be5bd82d3d7a", state: "مازندران" },
    { _id: "6048700ec917be5bd82d3d7b", state: "مرکزی" },
    { _id: "6048700ec917be5bd82d3d7c", state: "هرمزگان" },
    { _id: "6048700ec917be5bd82d3d7d", state: "همدان" },
    { _id: "6048700ec917be5bd82d3d7e", state: "یزد" },
];

export const PaymentTypeEnum = {
    USER_SCAN_QR_CODE: "اسکن QR کد",
    USER_SCAN_QR_PAYMENT_GATEWAY: "اسکن QR کد و پرداخت از طریق درگاه پرداخت",
    USER_DRIVER_CODE: "وارد کردن کد راننده",
    USER_DRIVER_CODE_PAYMENT_GATEWAY: "وارد کردن کد راننده و پرداخت از طریق درگاه پرداخت",
    DRIVER_USER_CODE: "وارد کردن کد مشتری",
    DRIVER_SCAN_USER_CARD: "اسکن کارت مشتری به وسیله راننده",
};

export const MoreMenuUser = [
    {
        name: "تنظمات مالی و کارت",
        icon: BsFillCreditCardFill,
        url: "/user/settings",
    },
    {
        name: "سفر‌ها",
        icon: FaCar,
        url: "/user/trip",
    },
    {
        name: "پشتیبانی",
        icon: BiSupport,
        url: "/user/support",
    },
];

export const social_media = [
    {
        icon: BiLogoTelegram,
        color: "#3390ec",
    },
    {
        icon: IoLogoWhatsapp,
        color: "#00a844",
    },
    {
        icon: BsTwitter,
        color: "#0096f5",
    },
    {
        icon: BsDiscord,
        color: "#626262",
    },
];
