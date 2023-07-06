import React from "react";
interface Props {
    name?: string;
    classBtn?: string;
    onClick?: () => void;
    isLoading?: boolean;
}
const Button = ({ name, classBtn, onClick, isLoading }: Props) => {
    return (
        <button
            onClick={onClick}
            className={`w-full min-w-[100px] z-[9999] font-artin-regular h-[48px] text-inherit rounded-lg ${classBtn}`}
        >
            {isLoading ? "jd" : name}
        </button>
    );
};

export default Button;
