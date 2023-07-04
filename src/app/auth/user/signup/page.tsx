"use client"
import Level1 from '@/components/auth/user/Level1'
import Level2 from '@/components/auth/user/Level2'
import Button from '@/components/common/Button'
import Steps from '@/components/common/Steps'
import { initialValuesSignUpUser } from '@/helpers/utils/initialValues'
import { validationSchemaSignUp } from '@/helpers/utils/validation/auth'
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'

const Signup = () => {
  const [step, setStep] = useState(0)
  const router = useRouter()
  const formik = useFormik({
    initialValues: initialValuesSignUpUser,
    validationSchema: validationSchemaSignUp,
    onSubmit: () => {
      if(step === 0){
        setStep(1)
      }

    }
  })


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
        step === 0 && <Level1 formik={formik} />
      }
      {
        step === 1 && <Level2 formik={formik} setStep={setStep}/>
      }

    </div>
  )
}

export default Signup