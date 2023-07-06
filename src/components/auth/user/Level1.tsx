import Input from "@/components/common/Input";
import React from "react";
import CustomRadioButton from "@/components/common/CustomRadioButton";
import Button from "@/components/common/Button";
import { sexPerson } from "@/helpers/utils/data";
interface Props {
    formik: any;
}
const Level1 = ({ formik }: Props) => {
    return (
        <div className="flex-1 h-full flex justify-between gap-14 flex-col">
            <div className="layout mt-8">
                <h1 className="text-center text-black font-artin-black text-lg ">برای تکمیل ثبت نام اطلاعات خود را وارد کنید.</h1>
                <div className="mt-5  flex flex-col gap-3">
                    <Input
                        formik={formik}
                        name="firstName"
                        placeholder="برای مثال: بهار"
                        classInput="bg-[#EFF2F6]"
                        label="نام خود را وارد کنید"
                    />
                    <Input
                        formik={formik}
                        name="lastName"
                        placeholder="برای مثال: دهقانی"
                        classInput="bg-[#EFF2F6]"
                        label="نام خانوادگی خود را وارد کنید"
                    />
                    <Input
                        formik={formik}
                        name="phone"
                        ltr
                        placeholder="09"
                        classInput="bg-[#EFF2F6]"
                        label="شماره تلفن همراه خود را وارد کنید"
                    />
                    <CustomRadioButton list={sexPerson} formik={formik} name="sex" />
                </div>
            </div>
            <div className="layout">
                <Button onClick={formik.handleSubmit} classBtn="mb-5 bg-[#464646] text-white" name="مرحله بعدی" />
            </div>
        </div>
    );
};

export default Level1;
