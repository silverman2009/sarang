import Getotp from '@/components/auth/Getotp'
import Button from '@/components/common/Button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Warr from "@/assets/images/warr.svg";
import { useFormik } from 'formik'
import { initialValuesGetOtp } from '@/helpers/utils/initialValues'
import { validationSchemaGetOtp } from '@/helpers/utils/validation/auth'
import useGetCodeActivationSignupQuery from '@/hooks/query/auth/useGetCodeActivationSignupQuery'
import Lottie from "lottie-react";
import Loading from "@/assets/images/loading.json"
import { toEnglishNumber } from '@/helpers/utils/toFarsiNumber'
import useAuthStore from '@/stores/auth-store'
const GetOtpSignup = () => {
  const { setPhone } = useAuthStore()
  const formik = useFormik({
    initialValues: initialValuesGetOtp,
    validationSchema: validationSchemaGetOtp,
    onSubmit: (values) => {
      setPhone(values.phone)
      refetch()
    },
  });
  const { refetch, isLoading, isError, error } = useGetCodeActivationSignupQuery(toEnglishNumber(formik.values.phone))
  return (
    <>
      <div className="h-screen flex flex-col justify-between">
        <Getotp formik={formik} text="برای ثبت نام لطفا شماره تلفن همراه خود را وارد کنید" />
        {
          isLoading &&
          <Lottie animationData={Loading} className='!-mt-14' />
        }

        {
          isError &&
          <div className="flex flex-col gap-3 items-center -mt-10 justify-center">
            <Image src={Warr} alt="" />
            {/* @ts-ignore */}
            <p className="text-center text-orange_light font-artin-light">{error?.response?.data?.Message}</p>
          </div>
        }

        <div className="layout flex flex-col gap-5 mb-5">
          <Button
            isLoading={isLoading}
            onClick={formik.handleSubmit}
            classBtn="bg-[#464646] text-white"
            name="ارسال کد تائید"
          />
          <p className="border-b border-dashed border-[#e4e4e4]"></p>
          <Link href="/auth/user/signin">
            <div className="flex gap-1 text-gray-400 font-estedad-medium text-[12px] justify-center items-center">
              <p>قبلا ثبت نام کرده اید؟</p>
              ورود
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default GetOtpSignup