import React, { useEffect } from "react";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import ProfileInfo from "@/components/common/ProfileInfo";
import { Warr_iocn } from "@/components/global/icons";
import InformationPayWithCode from "@/components/pay/InformationPayWithCode";
import { PaymentTypeEnum } from "@/helpers/utils/data";
import { initialValuesPayWithCode } from "@/helpers/utils/initialValues";
import { toEnglishNumber } from "@/helpers/utils/toFarsiNumber";
import { validationSchemaPayWitCode, validationSchemaPayWithPhone } from "@/helpers/utils/validation/pay";
import useDriverStore from "@/stores/driver-store";
import { useFormik } from "formik";
import useGetUserByPhoneQuery from "@/hooks/query/drivers/useGetUserByPhoneQuery";
import InformationPayWithPhone from "@/components/driver/InformationPayWithPhone";

const Code = () => {
    const { setPaymentTypeEnum } = useDriverStore();
    const { setPhone } = useDriverStore();
    const { refetch, isLoading, isError, error } = useGetUserByPhoneQuery();
    const formik = useFormik({
        initialValues: initialValuesPayWithCode,
        validationSchema: validationSchemaPayWithPhone,
        onSubmit: async (values) => {
            await setPhone(toEnglishNumber(values.code)!);
            setPaymentTypeEnum(PaymentTypeEnum.DRIVER_USER_CODE);
            refetch();
        },
    });
    useEffect(()=>{
        setPhone("")
    },[])
    return (
        <div className="h-screen flex flex-col justify-between bg-white">
            <div>
                <ProfileInfo />
                <div className="layout mt-10">
                    <InformationPayWithPhone />
                    <Input classInputTag="text-center" label="نام کاربری" formik={formik} name="code" />
                </div>
            </div>

            {isError && (
                <div className="flex flex-col gap-3 items-center justify-center">
                    <Warr_iocn />
                    {/* @ts-ignore */}
                    <p className="text-center text-orange_light font-artin-light">{error?.response?.data?.Message}</p>
                </div>
            )}
            <div className="layout mb-10">
                <Button isLoading={isLoading} classBtn="bg-[#464646] !text-white" name="استعلام" onClick={formik.handleSubmit} />
            </div>
        </div>
    );
};

export default Code;
