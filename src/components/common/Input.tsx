import Image from 'next/image';
import React from 'react'
interface Props {
    icon?: string;
    placeholder?: string;
    classInput?: string;
    ltr?:boolean
}
const Input = ({ icon, placeholder ,classInput,ltr}: Props) => {
    return (
        <div className={`flex gap-1 w-full h-[52px] rounded-lg px-2 items-center  ${classInput}`}>
            {icon && <Image className='w-5 h-5 mb-[1px]' src={icon} alt=''/>}
            <input className={`bg-transparent outline-none placeholder:text-right font-artin-regular placeholder:text-inherit text-[14px] w-full text-inherit  ${ltr && "ltr"}`} placeholder={placeholder} />
        </div>
    )
}

export default Input