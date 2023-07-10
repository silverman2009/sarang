import Getotp from '@/components/auth/Getotp'
import Button from '@/components/common/Button'
import Link from 'next/link'
import React from 'react'
import { useFormik } from 'formik'
import { initialValuesGetOtp } from '@/helpers/utils/initialValues'
import { validationSchemaGetOtp } from '@/helpers/utils/validation/auth'
import useGetCodeActivationQuery from '@/hooks/query/auth/useGetCodeActivationQuery'
import { toEnglishNumber } from '@/helpers/utils/toFarsiNumber'
import useAuthStore from '@/stores/auth-store'
import { Warr_iocn } from '@/components/global/icons'
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
  const { refetch, isLoading, isError, error, } = useGetCodeActivationQuery(toEnglishNumber(formik.values.phone))
  return (
    <>
      <div className="h-screen flex flex-col justify-between">
        <Getotp formik={formik} text="برای ثبت نام لطفا شماره تلفن همراه خود را وارد کنید" />

        {
          isError &&
          <div className="flex flex-col gap-3 items-center -mt-10 justify-center">
            <Warr_iocn/>
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
          <Link href="/auth/signin">
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