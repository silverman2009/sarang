import React from 'react'
import Input from '../common/Input'
import Phone from "@/assets/images/phone.svg"
import Image from 'next/image'
import Logo from "@/assets/images/logo.svg"

const Getotp = () => {
    return (

        <div className='rounded-b-[26px] shadow-md text-white bg_header bg_line h-fit flex flex-col py-10 justify-center items-center'>
            <div className='w-[85%] mx-auto'>
                <Image className='mx-auto' src={Logo} alt="لوگو" />
                <div className='pt-5 flex flex-col gap-4 justify-center items-center'>
                    <p className='font-artin-regular'>به اپلیکیشن سارنگ</p>
                    <div className='flex gap-2 items-center'>
                        <span className='w-14 h-[0.1rem] bg-white'></span>
                        <span className='w-[0.14rem] h-[0.14rem] bg-white rounded-full'></span>
                        <span className='w-[0.14rem] h-[0.14rem] bg-white rounded-full'></span>
                    </div>
                    <h5 className='font-artin-black text-3xl -mt-1'>خوش اومدین</h5>
                    <div className='mt-14 w-full'>
                        <Input ltr classInput='border-[0.1rem] border-white bg-white/40 text-white' icon={Phone} placeholder='لطفا شماره تماس خود را وارد کنید' />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Getotp