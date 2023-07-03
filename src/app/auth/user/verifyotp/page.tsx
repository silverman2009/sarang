import Image from 'next/image'
import React from 'react'
import Logo from "@/assets/images/logo.svg"
import { BsArrowLeftShort } from "react-icons/bs"
import { Phone_icon, Warr_iocn } from '@/components/global/icons'
import Button from '@/components/common/Button'
import VerifyOtpCom from "@/components/auth/VerifyOtp"
const VerifyOtp = () => {
    return (
        <div className='flex flex-col justify-between h-screen'>
            <div className='bg_header text-white rounded-b-[26px] overflow-hidden container_header_signup'>
                <div className='layout py-14 flex   items-center justify-between'>
                    <div className='flex z-50 gap-3 items-center justify-between'>
                        <Image className='w-12 h-12' src={Logo} alt="" />
                        <p className='font-artin-regular text-xl'>سارنگ</p>
                    </div>
                    <BsArrowLeftShort size={34} />
                </div>
            </div>

            <div className='container_verify_otp'>
                <div className='layout'>
                    <div className='flex items-center gap-2'>
                        <Phone_icon size="19" fill='#464646' />
                        <p className='font-artin-regular text-lg text-black'>لطفا کد ارسال شده را وارد کنید</p>
                    </div>
                    <VerifyOtpCom />
                </div>
            </div>
            <div className='flex justify-center items-center flex-col'>
                <Warr_iocn fill='#19B500' />
                <p className='text-success font-artin-regular'>حساب به شماره وارد شده یافت شد.</p>
            </div>
            <div className='layout'>
                <Button classBtn='mb-4 bg-[#464646] text-white' name='تائید کد' />
            </div>
        </div>
    )
}

export default VerifyOtp