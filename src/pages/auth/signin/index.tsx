import React from "react";
import Getotp from "@/components/auth/Getotp";
import Button from "@/components/common/Button";
import Link from "next/link";
import Image from "next/image";
import Warr from "@/assets/images/warr.svg";
import { useFormik } from "formik";
import useAuthStore from "@/stores/auth-store";
import { initialValueLogin } from "@/helpers/utils/initialValues";
import { validationSchemaGetOtp } from "@/helpers/utils/validation/auth";
import useGetCodeActivationQuery from "@/hooks/query/auth/useGetCodeActivationQuery";
import { toEnglishNumber } from "@/helpers/utils/toFarsiNumber";
const Signin = () => {
    const { setPhone } = useAuthStore()
    const formik = useFormik({
        initialValues: initialValueLogin,
        validationSchema: validationSchemaGetOtp,
        onSubmit: (values) => {
            setPhone(values.phone)
            refetch()
        },
    });
    const { refetch, isError, error } = useGetCodeActivationQuery(toEnglishNumber(formik.values.phone))

    return (
        <div className="h-screen flex flex-col justify-between">
            <Getotp isLogin formik={formik} text="برای ورود لطفا شماره تلفن همراه خود و پسورد  را وارد کنید" />
            {
                isError &&
                <div className="flex flex-col gap-3 items-center justify-center">
                    <Image src={Warr} alt="" />
                    {/* @ts-ignore */}
                    <p className="text-center text-orange_light font-artin-light">{error.response.data.Message}</p>
                </div>
            }

            <div className="layout flex flex-col gap-5 mb-5">
                <Button
                    onClick={formik.handleSubmit}
                    classBtn="bg-[#464646] text-white"
                    name="ارسال کد تائید"
                />
                <p className="border-b border-dashed border-[#e4e4e4]"></p>
                <Link href="/auth/signup/get-otp">
                    <div className="flex gap-1 text-gray-400 font-estedad-medium text-[12px] justify-center items-center">
                        <p>حساب کاربری ندارید؟</p>
                        ثبت‌نام
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Signin;
