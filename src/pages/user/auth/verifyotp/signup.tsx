import Image from "next/image";
import React, { useEffect } from "react";
import Logo from "@/assets/images/logo.svg";
import { BsArrowLeftShort } from "react-icons/bs";
import { Edit_icon, Phone_icon, Warr_iocn } from "@/components/global/icons";
import Button from "@/components/common/Button";
import VerifyOtpCom from "@/components/auth/VerifyOtp";
import Timer from "@/components/common/Timer";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { initialValuesCheckCode } from "@/helpers/utils/initialValues";
import { validationSchemaCheckCode } from "@/helpers/utils/validation/auth";
import useVerifyCodeSignupMutation from "@/hooks/mutation/auth/useVerifyCodeSignupMutation";
import useAuthStore from "@/stores/auth-store";
import Lottie from "lottie-react";
import Loading from "@/assets/images/loading.json";
import { toEnglishNumber } from "@/helpers/utils/toFarsiNumber";
const VerifyOtp = () => {
    const { phone } = useAuthStore();
    const { mutate, isError, error, isLoading } = useVerifyCodeSignupMutation();
    const router = useRouter();
    const formik = useFormik({
        initialValues: initialValuesCheckCode,
        validationSchema: validationSchemaCheckCode,
        onSubmit: (values) => {
            mutate({ Code: Number(values.Code), Phone: toEnglishNumber(phone) });
        },
    });

    useEffect(() => {
        if (!phone) return router.back();
    }, []);

    return (
        <div className="flex flex-col justify-between h-screen">
            <div className="bg_header text-white rounded-b-[26px] overflow-hidden container_header_signup">
                <div className="layout py-14 flex   items-center justify-between">
                    <div className="flex z-50 gap-3 items-center justify-between">
                        <Image className="w-12 h-12" src={Logo} alt="" />
                        <p className="font-artin-regular text-xl">سارنگ</p>
                    </div>
                    <button className="z-[9999]" onClick={() => router.back()}>
                        <BsArrowLeftShort size={34} />
                    </button>
                </div>
            </div>

            <div className="container_verify_otp ">
                <div className="layout">
                    <div className="flex items-center gap-2">
                        <Phone_icon size="19" fill="#464646" />
                        <p className="font-artin-regular text-lg text-black">لطفا کد ارسال شده را وارد کنید</p>
                    </div>
                    <VerifyOtpCom formik={formik} />
                    <div className="flex justify-between items-center mt-5">
                        <Timer />
                        <div className="flex items-center gap-1" onClick={() => router.back()}>
                            <Edit_icon fill="#F67D14" />
                            <p className="font-artin-regular text-[12px] text-orange_light">تغیر شماره تلفن</p>
                        </div>
                    </div>
                </div>
            </div>
            {isError && (
                <div className="flex justify-center items-center flex-col">
                    <Warr_iocn fill="#" />
                    {/* @ts-ignore */}
                    <p className="text-red-500 font-artin-regular">{error.response?.data?.Message}</p>
                </div>
            )}

            <span></span>

            <div className="layout">
                <Button onClick={formik.handleSubmit} classBtn="mb-4 bg-[#464646] text-white" name="تائید کد" />
            </div>
        </div>
    );
};

export default VerifyOtp;
