import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import Logo from "@/assets/images/logo.svg";
import { useFormik } from "formik";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import useForgetPassMutation from "@/hooks/mutation/auth/useForgetPassMutation";
import { validationSchemaForgetPass } from "@/helpers/utils/validation/auth";
import { toEnglishNumber } from "@/helpers/utils/toFarsiNumber";
import { Warr_iocn } from "@/components/global/icons";

const Forgetpass = () => {
    const { mutate, isError, isSuccess, data, error, isLoading } = useForgetPassMutation();
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            phone: "",
        },
        validationSchema: validationSchemaForgetPass,
        onSubmit: (values) => {
            mutate({ phone: toEnglishNumber(values.phone)! });
        },
    });

    useEffect(() => {
        if (isSuccess) {
            formik.resetForm();
        }
    }, [isSuccess]);

    return (
        <div className="bg-white min-h-screen flex flex-col justify-between">
            <div>
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

                <div className="layout mt-20">
                    <h1 className="font-artin-black text-xl">فراموش کردن رمز عبور</h1>
                    <p className="text-gray-400 font-artin-regular pt-1">
                        لطفا شماره تلفن خود را وارد کنید تا رمز عبور برای شما فرستاده شود.
                    </p>
                    <div className="mt-10">
                        <Input ltr classInput="bg-[#EFF2F6]" label="شماره تلفن همراه" formik={formik} name="phone" />
                    </div>
                </div>
            </div>

            {isError && (
                <div className="flex flex-col gap-3 items-center justify-center">
                    <Warr_iocn />
                    {/* @ts-ignore */}
                    <p className="text-center text-orange_light font-artin-light">{error?.response.data.Message}</p>
                </div>
            )}
            {isSuccess && (
                <div className="flex flex-col gap-3 items-center justify-center">
                    <Warr_iocn fill="#19B500" />
                    {/* @ts-ignore */}
                    <p className="text-center text-[#19B500] font-artin-light">{data}</p>
                </div>
            )}

            <div className="layout mb-10">
                <Button
                    isLoading={isLoading}
                    onClick={formik.handleSubmit}
                    classBtn="bg-[#464646] text-white"
                    name="درخواست کد بازیابی"
                />
            </div>
        </div>
    );
};

export default Forgetpass;
