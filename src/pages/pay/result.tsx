import React, { useEffect, useState } from 'react'
import ResultImage from "@/assets/images/result.svg"
import Image from 'next/image'
import { Check_iocn } from '@/components/global/icons'
import Button from '@/components/common/Button'
import Logo from "@/assets/images/logo.svg"
// @ts-ignore
import SuccessPay from "@/assets/images/success.json"
import Lottie from 'lottie-react'
const Result = () => {
    const [isView, setIsView] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setIsView(true)
        }, 1000)
    }, [])
    return (
        <div className='h-screen bg-white flex relative flex-col justify-between'>
            <div className={`bg-[#F57D0E] flex  rounded-b-[28px] shadow-md px-4 transition-all duration-[1.2s] justify-center items-center ${isView ? "flex-row-reverse h-[200px]" : "flex-col gap-10 h-[450px]"}`}>
                <div className={`relative duration-1000 transition-all ${isView ? "w-28 h-28" : "w-64 h-64"}`}>
                    <Image fill src={ResultImage} alt="" />
                </div>
                <div className={`flex flex-col flex-1 justify-center gap-3 ${isView ? "" : "hidden"}`}>
                    <Image src={Logo} alt="" />
                    <p className='font-artin-black text-xl pr-2 text-white'>سارنگ</p>
                </div>
                <div className={`flex flex-1  flex-col justify-center items-center gap-4 ${isView ? "hidden" : ""}`}>
                    <h1 className={` font-artin-black text-white transition-all duration-1000 text-2xl `}>پرداخت شما با موفقیت انجام شد</h1>
                    <Check_iocn />
                </div>

            </div>

            {/* <Lottie animationData={SuccessPay} /> */}
            <div className={`absolute bottom-0 w-[90%]  transition-all duration-[1.3s] left-1/2  ${isView ? "-translate-x-1/2" : "translate-x-full"}`}>
                <Button classBtn='bg-[#464646] mb-10 text-white' name='بازگشت به صحفه اصلی' />
            </div>
        </div>
    )
}

export default Result