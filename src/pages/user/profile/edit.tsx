import Button from "@/components/common/Button";
import CustomRadioButton from "@/components/common/CustomRadioButton";
import Input from "@/components/common/Input";
import { sexPerson } from "@/helpers/utils/data";
import { initialValuesEditProfile } from "@/helpers/utils/initialValues";
import useEditUserMutation from "@/hooks/mutation/auth/useEditUserMutation";
import useAuthStore from "@/stores/auth-store";
import { useFormik } from "formik";
import Link from "next/link";
import React, { useEffect } from "react";
import { MdArrowBackIosNew } from "react-icons/md";

const Edit = () => {
    const { mutate, isLoading } = useEditUserMutation();
    const { user } = useAuthStore();
    const formik = useFormik<any>({
        initialValues: initialValuesEditProfile,
        onSubmit: (values) => {
            const data = {
                updatedField: {
                    Sex: values.Sex,
                    FirstName: values.FirstName,
                    LastName: values.LastName,
                },
            };
            mutate(data);
        },
    });
    useEffect(() => {
        if (user?.FirstName) {
            formik.setValues({
                ...user,
            });
        }
    }, [user]);
    return (
        <div className="px-6 flex flex-col justify-between min-h-screen bg-white">
            <div>
                <div className="flex items-center border-b border-gray-200 py-3 justify-between ">
                    <p className="font-artin-bold text-xl">ویرایش اطلاعات شخصی</p>
                    <Link href="/profile">
                        {" "}
                        <MdArrowBackIosNew size={20} />
                    </Link>
                </div>

                <form className="mt-7 flex flex-col gap-3">
                    <Input label="نام" formik={formik} name="FirstName" />
                    <Input label="نام‌خانوادگی" formik={formik} name="LastName" />
                    <CustomRadioButton formik={formik} name="Sex" list={sexPerson} />
                </form>
            </div>
            <Button isLoading={isLoading} onClick={formik.handleSubmit} name="ویرایش" classBtn="bg-[#464646] text-white mb-10" />
        </div>
    );
};

export default Edit;
