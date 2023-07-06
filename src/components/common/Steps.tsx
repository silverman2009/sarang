import React, { useState } from "react";
import { Box_icon, Phone_check_icon, User_icon } from "../global/icons";

interface Props {
    step: number;
}
const Steps = ({ step }: Props) => {
    return (
        <div className="flex gap-2 items-center justify-between mt-8">
            <div>
                <Box_icon fill={step >= 0 ? "#626262" : "#fff"} />
            </div>
            <div className={`border-[0.08rem] border-dashed flex-1 ${step >= 1 ? "border-[#626262]" : "border-white"}`} />
            <div>
                <Phone_check_icon fill={step >= 1 ? "#626262" : "#fff"} />
            </div>
            <div className={`border-[0.08rem] border-dashed flex-1 ${step === 2 ? "border-[#626262]" : "border-white"}`} />
            <div>
                <User_icon fill={step === 2 ? "#626262" : "#fff"} />
            </div>
        </div>
    );
};

export default Steps;
