import React from 'react'
import Getotp from '@/components/auth/Getotp'
import Button from '@/components/common/Button'
import Link from 'next/link'
import Image from 'next/image'
import Warr from "@/assets/images/warr.svg"
const Signin = () => {
  return (

    <div className='h-screen flex flex-col justify-between'>
      <Getotp />
      <div className='flex flex-col gap-3 items-center justify-center'>
        <Image src={Warr} alt=""/>
        <p className='text-center text-orange_light font-artin-light'>
          زمانی که پنل درست شود به شما پیامک میدهیم
        </p>
      </div>


      <div className='layout flex flex-col gap-5 mb-5'>
        <Button classBtn="bg-[#464646] text-white" name='ارسال کد تائید' />
        <p className='border-b border-dashed border-[#e4e4e4]'></p>
        <div className='flex gap-1 text-gray-400 font-estedad-medium text-[12px] justify-center items-center'>
          <p>حساب کاربری ندارید؟</p>
          <Link href="">وارد شوید</Link>
        </div>
      </div>
    </div>
  )
}

export default Signin