import { toFarsiNumber } from "@/helpers/utils/toFarsiNumber";
import Image from "next/image";
import React from "react";
interface Props {
    icon?: string;
    placeholder?: string;
    classInput?: string;
    ltr?: boolean;
    label?: string;
    placeholderColor?: string;
    classInputTag?: string;
    name?: string;
    formik: any;
    type?: string;
}
const Input = ({ icon, placeholder, classInput, ltr, label, classInputTag, name, formik, type }: Props) => {
    return (
        <div className="">
            {label && <label className="font-artin-regular block mb-1 pr-1 text-[#2F2F2F]">{label}</label>}
            <div
                className={`flex gap-1 w-full h-[52px] border bg-[#EFF2F6]  rounded-lg px-2 items-center ${
                    formik.touched[name!] && formik.errors[name!] ? "!border-[#E40000]" : "border-transparent"
                }  ${classInput}`}
            >
                {icon && <Image className="w-5 h-5 mb-[1px]" src={icon} alt="" />}
                <input
                    type={type}
                    value={formik.values[name!]}
                    onChange={(e) => formik.setFieldValue(name, toFarsiNumber(e.target.value))}
                    name={name}
                    className={`bg-transparent outline-none placeholder:text-right font-artin-regular  text-[14px] w-full text-inherit placeholder:text-[#d6d6d6] ${classInputTag}  ${
                        ltr && "ltr"
                    } ${formik.touched[name!] && formik.errors[name!] && "bg-[#fbbe7b]"}`}
                    placeholder={placeholder}
                    autoCapitalize="off"
                />
            </div>
            <span className="block font-artin-light mt-[1px] text-[11px] pt-[2px] text-[#E40000] pr-1">
                {formik.touched[name!] && formik.errors[name!] ? formik.errors[name!] : null}
            </span>
        </div>
    );
};

export default Input;
