"use client"
import Level1 from '@/components/auth/user/Level1'
import Level2 from '@/components/auth/user/Level2'
import Steps from '@/components/common/Steps'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'

const Signup = () => {
  const [step, setStep] = useState(0)
  const router = useRouter()
  return (
    <div className='flex flex-col min-h-screen'>
      <div className='bg_header min-h-[150px] flex justify-center items-center shadow-md  rounded-b-[26px]'>
        <div className='layout'>
          <div className='flex items-center justify-between text-white'>
            <h4 className='text-center font-artin-black  text-2xl'>اطلاعات هویتی</h4>
            <button onClick={() => router.push("/auth/user/signin")}>
              <BsArrowLeftShort size={34} />
            </button>
          </div>
          <Steps step={step} />
        </div>
      </div>
      {
        step === 0 && <Level1 setStep={setStep} />
      }
      {
        step === 1 && <Level2 setStep={setStep} />
      }
    </div>
  )
}

export default Signup