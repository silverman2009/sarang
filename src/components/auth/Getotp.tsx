import React from "react";
import Input from "../common/Input";
import Phone from "@/assets/images/phone.svg";
import Image from "next/image";
import Logo from "@/assets/images/logo.svg";
import Link from "next/link";
interface Props {
    text?: string;
    formik?: any;
    isLogin?: boolean;
    isPass?: boolean;
}
const Getotp = ({ text, formik, isLogin, isPass }: Props) => {
    return (
        <div>
            <div className="rounded-b-[26px] z-30  shadow-md text-white bg_header bg_line h-fit flex flex-col py-5 justify-center items-center">
                <div className="w-[85%] mx-auto">
                    <Image className="mx-auto" src={Logo} alt="لوگو" />
                    <div className="pt-5 flex flex-col gap-4 justify-center items-center">
                        <p className="font-artin-regular">به اپلیکیشن سارنگ</p>
                        <div className="flex gap-2 items-center">
                            <span className="w-14 h-[0.1rem] bg-white"></span>
                            <span className="w-[0.14rem] h-[0.14rem] bg-white rounded-full"></span>
                            <span className="w-[0.14rem] h-[0.14rem] bg-white rounded-full"></span>
                        </div>
                        <h5 className="font-artin-black text-3xl -mt-1">خوش اومدین</h5>
                        <div className="mt-8 flex flex-col  gap-4 w-full">
                            {text && <p className="font-artin-regular pb-3">{text}</p>}
                            <Input
                                formik={formik}
                                name="phone"
                                type="tel"
                                classInputTag="placeholder:!text-[#fff]"
                                ltr
                                classInput="border-[0.1rem] border-white bg-white/40 text-white"
                                icon={Phone}
                                placeholder="لطفا شماره تماس خود را وارد کنید"
                            />
                            {isLogin && (
                                <Input
                                    type="password"
                                    formik={formik}
                                    name="password"
                                    classInputTag="placeholder:!text-[#fff]"
                                    ltr
                                    classInput="border-[0.1rem] border-white bg-white/40 text-white"
                                    icon={Phone}
                                    placeholder="لطفا رمز عبور خود را وارد کنید"
                                />
                            )}
                        </div>
                    </div>
                </div>
                {isPass && (
                    <Link
                        href="/auth/forgetpass"
                        className="text-black w-[90%] mx-auto flex justify-end cursor-pointer  relative !z-[9999] font-artin-bold px-4 pt-3"
                    >
                        فراموشی رمزعبور؟
                    </Link>
                )}
            </div>

        </div>
    );
};

export default Getotp;
