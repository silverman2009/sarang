import React from "react";
import Getotp from "@/components/auth/Getotp";
import Button from "@/components/common/Button";
import Link from "next/link";
import { useFormik } from "formik";
import useAuthStore from "@/stores/auth-store";
import { initialValueLogin } from "@/helpers/utils/initialValues";
import { validationSchemaGetOtp } from "@/helpers/utils/validation/auth";
import { Warr_iocn } from "@/components/global/icons";
import useLoginUserMuation from "@/hooks/mutation/auth/useLoginUserMuation";
import { LoginUser } from "@/types/Auth";
import { convertObjectEnglishNumber } from "@/helpers/utils/converObject";
const Signin = () => {
    const { mutate, isError, error, isLoading } = useLoginUserMuation();
    const { setPhone } = useAuthStore();
    const formik = useFormik<LoginUser>({
        initialValues: initialValueLogin,
        validationSchema: validationSchemaGetOtp,
        onSubmit: (values) => {
            const results = convertObjectEnglishNumber(values);
            setPhone(values.phone);
            mutate(results);
        },
    });

    return (
        <div className="h-screen flex flex-col justify-between">
            <Getotp isPass isLogin formik={formik} text="برای ورود لطفا شماره تلفن همراه خود و پسورد  را وارد کنید" />

            {isError && (
                <div className="flex flex-col gap-3 items-center justify-center">
                    <Warr_iocn />
                    {/* @ts-ignore */}
                    <p className="text-center text-orange_light font-artin-light">{error?.response?.data?.Message}</p>
                </div>
            )}

            <div className="layout flex flex-col gap-5 mb-5">
                <Button
                    isLoading={isLoading}
                    onClick={formik.handleSubmit}
                    classBtn="bg-[#464646] text-white"
                    name="ارسال کد تائید"
                />
            </div>
        </div>
    );
};

export default Signin;
