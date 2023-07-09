import HeaderSignup from "@/components/auth/user/HeaderSignup";
import Level1 from "@/components/auth/user/Level1";
import Level2 from "@/components/auth/user/Level2";
import { convertObjectEnglishNumber } from "@/helpers/utils/converObject";
import { initialValuesSignUpUser } from "@/helpers/utils/initialValues";
import { validationSchemaSignUp, validationSchemaSignUpStep2 } from "@/helpers/utils/validation/auth";
import useSignupUserMutation from "@/hooks/mutation/auth/useSignupUserMutation";
import { useFormik } from "formik";
import React, { useState } from "react";

const Signup = () => {
  const { mutate, isLoading } = useSignupUserMutation()
  const [step, setStep] = useState(0);
  const formik = useFormik({
    initialValues: initialValuesSignUpUser,
    validationSchema: step === 0 ? validationSchemaSignUp : validationSchemaSignUpStep2,
    onSubmit: (values) => {
      if (step === 0) return setStep(1);
      if (step === 1 && formik.isValid) {
        const results = convertObjectEnglishNumber(values)
        mutate({ ...results, city: values.city.city, state: values.state.state })
      }
    },
  });

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <HeaderSignup step={step} />
      {step === 0 && <Level1 formik={formik} />}
      {step === 1 && <Level2 loading={isLoading} formik={formik} setStep={setStep} />}
    </div>
  );
};

export default Signup;
