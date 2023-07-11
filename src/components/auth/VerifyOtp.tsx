import React from "react";
import ReactInputVerificationCode from "react-input-verification-code";
interface Props {
    formik: any;
}
const VerifyOtp = ({ formik }: Props) => {
    const onChange = (val: string) => {
        formik.setFieldValue("Code", val);
    };
    return (
        <div className="mt-5">
            <ReactInputVerificationCode onChange={onChange} placeholder="" length={4} />
        </div>
    );
};

export default VerifyOtp;
