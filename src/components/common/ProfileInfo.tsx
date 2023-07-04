import Image from 'next/image'
import React from 'react'
import User from "@/assets/images/user.png"
import Coin from "@/assets/images/coin.png"
import { Notifi_icon } from '../global/icons'
const ProfileInfo = () => {
    return (
        <div className='layout mt-5 flex justify-between items-center'>
            <div className='flex gap-3 items-center'>
                <div className='relative w-14 h-14 bg-orange_light rounded-full overflow-hidden'>
                    <Image fill src={User} alt="" />
                </div>
                <div className='space-y-1'>
                    <p className='font-estedad-bold'>مهدی شریفلو</p>
                    <div className='flex items-center'>
                        <p className='font-artin-regular'>موجودی : <span className='text-orange_light'>۲۵۰,۰۰۰</span> تومان</p>
                    </div>
                </div>
            </div>
            <Notifi_icon />
        </div>
    )
}

export default ProfileInfo