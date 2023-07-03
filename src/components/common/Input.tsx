import Image from 'next/image';
import React from 'react'
interface Props {
    icon?: string;
    placeholder?: string;
    classInput?: string;
    ltr?: boolean;
    label?: string;
    placeholderColor?:string,
    classInputTag?:string;
}
const Input = ({ icon, placeholder, classInput, ltr, label , classInputTag}: Props) => {
    return (
        <div className=''>
            {label && <label className='font-artin-regular block mb-1 pr-1 text-[#2F2F2F]'>{label}</label>}
            <div className={`flex gap-1 w-full h-[52px] rounded-lg px-2 items-center  ${classInput}`}>
                {icon && <Image className='w-5 h-5 mb-[1px]' src={icon} alt='' />}
                <input className={`bg-transparent outline-none placeholder:text-right font-artin-regular  text-[14px] w-full text-inherit placeholder:text-[#d6d6d6] ${classInputTag}  ${ltr && "ltr"}`} placeholder={placeholder} />
            </div>
            <span className='block font-artin-light mt-[1px] text-[11px] text-red-500 pr-1'></span>
        </div>
    )
}

export default Input