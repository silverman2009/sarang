import HeaderSignup from "@/components/auth/user/HeaderSignup";
import Level1 from "@/components/auth/user/Level1";
import { convertObjectEnglishNumber } from "@/helpers/utils/converObject";
import { initialValuesSignUpUser } from "@/helpers/utils/initialValues";
import { toEnglishNumber } from "@/helpers/utils/toFarsiNumber";
import { validationSchemaSignUp } from "@/helpers/utils/validation/auth";
import useSignupUserMutation from "@/hooks/mutation/auth/useSignupUserMutation";
import useAuthStore from "@/stores/auth-store";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Signup = () => {
    const router = useRouter();
    const { phone } = useAuthStore();
    const { mutate, isLoading } = useSignupUserMutation();
    const formik = useFormik({
        initialValues: initialValuesSignUpUser,
        validationSchema: validationSchemaSignUp,
        onSubmit: (values) => {
            const results = convertObjectEnglishNumber(values);
            mutate({ ...results, phone: toEnglishNumber(phone) });
        },
    });

    useEffect(() => {
        if (!phone) return router.push("/auth/signup/get-otp");
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <HeaderSignup step={0} />
            <Level1 formik={formik} isLoading={isLoading} />
        </div>
    );
};

export default Signup;
