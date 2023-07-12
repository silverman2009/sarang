import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import ProfileInfo from "@/components/common/ProfileInfo";
import { Warr_iocn } from "@/components/global/icons";
import InformationPayWithCode from "@/components/pay/InformationPayWithCode";
import { PaymentTypeEnum } from "@/helpers/utils/data";
import { initialValuesPayWithCode } from "@/helpers/utils/initialValues";
import { toEnglishNumber } from "@/helpers/utils/toFarsiNumber";
import { validationSchemaPayWitCode } from "@/helpers/utils/validation/pay";
import useGetDriverByCityNumberQuery from "@/hooks/query/drivers/useGetDriverByCityNumberQuery";
import useDriverStore from "@/stores/driver-store";
import { useFormik } from "formik";
import React from "react";

const Code = () => {
    const { setPaymentTypeEnum } = useDriverStore();
    const { setCode } = useDriverStore();
    const { refetch, isLoading, isError, error } = useGetDriverByCityNumberQuery();
    const formik = useFormik({
        initialValues: initialValuesPayWithCode,
        validationSchema: validationSchemaPayWitCode,
        onSubmit: async (values) => {
            await setCode(toEnglishNumber(values.code)!);
            setPaymentTypeEnum(PaymentTypeEnum.USER_SCAN_QR_CODE);
            refetch();
        },
    });
    return (
        <div className="h-screen flex flex-col justify-between bg-white">
            <div>
                <ProfileInfo />
                <div className="layout mt-10">
                    <InformationPayWithCode />
                    <Input classInputTag="text-center" label="کد راننده" formik={formik} name="code" />
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
