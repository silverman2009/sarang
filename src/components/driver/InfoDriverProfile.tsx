import Image from 'next/image'
import React from 'react'
import { Location_icon } from '../global/icons'
import User from "@/assets/images/user.png"

const InfoDriverProfile = () => {
    return (
        <div className='flex items-center gap-2 mt-8 '>
            <div className='bg-orange_light rounded-full w-16 h-16 flex justify-center items-center'>
                <Image src={User} alt="" />
            </div>
            <div className='flex flex-col gap-2'>
                <p className='font-estedad-bold'>مهدی شریفلو</p>
                <div className='flex gap-2 items-center'>
                    <Location_icon />
                    <p className='font-artin-regular'>خراسان رضوی , نیشابور , بوژان</p>
                </div>
            </div>
        </div>
    )
}

export default InfoDriverProfile