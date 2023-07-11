import React from "react";
import ReactSelect, { components } from "react-select";
import { GetOptionLabel } from "react-select/dist/declarations/src";
interface Props {
    options: any[];
    formik: any;
    name: string;
    getOptionLabel?: GetOptionLabel<any> | undefined;
    getOptionValue?: GetOptionLabel<any> | undefined;
    label?: string;
    isLoading?: boolean;
    onChange?: (value: any) => void;
    isDisabled?: boolean;
}
const Select = ({ options, formik, name, getOptionValue, isDisabled, getOptionLabel, label, isLoading, onChange }: Props) => {
    const Input = ({ ...rest }) => (
        // @ts-ignore
        <components.Input {...rest} autoComplete={"nope"} />
    );
    const styles = {
        control: (base: any, state: any) => ({
            ...base,
            border: state.isFocused ? 0 : formik.touched[name!]?._id && formik.errors[name!]?._id ? "1px solid #ef4444" : 0,
            backgroundColor: "#EFF2F6",
            height: "52px",
            borderRadius: "8px",
            fontFamily: "artin-regular",
            // This line disable the blue border
            boxShadow: state.isFocused ? 0 : 0,
            "&:hover": {
                border: state.isFocused ? 0 : 0,
            },
            options: (styles: any) => ({
                ...styles,
                color: "red",
            }),
        }),
    };
    return (
        <div>
            {label && <label className="font-artin-regular block mb-1 pr-1 text-[#2F2F2F]">{label}</label>}
            <ReactSelect
                value={formik.values[name]}
                isLoading={isLoading}
                placeholder={<span className="!text-gray-400">انتخاب کنید</span>}
                styles={styles}
                options={options}
                getOptionLabel={getOptionLabel}
                getOptionValue={getOptionValue}
                onChange={onChange ? onChange : (value) => formik.setFieldValue(name, value)}
                name={name}
                noOptionsMessage={() => <span>لیست خالی است</span>}
                isDisabled={isDisabled}
            />
            <span className="block font-artin-light mt-[1px] text-[11px] text-red-500 pr-1">
                {formik.touched[name!]?._id && formik.errors[name!]?._id ? formik.errors[name!]?._id : null}
            </span>
        </div>
    );
};

export default Select;
