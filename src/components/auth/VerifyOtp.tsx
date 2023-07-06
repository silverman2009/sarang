import React from "react";
import ReactInputVerificationCode from "react-input-verification-code";

const VerifyOtp = () => {
    return (
        <div className="mt-5">
            <ReactInputVerificationCode placeholder="" length={4} />
        </div>
    );
};

export default VerifyOtp;
