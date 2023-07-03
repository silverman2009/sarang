import Input from '@/components/common/Input'
import React from 'react'
import CustomRadioButton from '@/components/common/CustomRadioButton'
import Button from '@/components/common/Button'
interface Props{
  setStep:React.Dispatch<React.SetStateAction<number>>
}
const Level1 = ({setStep}:Props) => {
  return (
    <div className='flex-1 h-full flex justify-between gap-14 flex-col'>
      <div className='layout mt-8'>
        <h1 className='text-center text-black font-artin-black text-lg '>برای تکمیل ثبت نام اطلاعات خود را وارد کنید.</h1>
        <form className='mt-5  flex flex-col gap-3'>
          <Input placeholder='برای مثال: بهار' classInput='bg-[#EFF2F6]' label="نام خود را وارد کنید" />
          <Input placeholder='برای مثال: دهقانی' classInput='bg-[#EFF2F6]' label="نام خانوادگی خود را وارد کنید" />
          <Input ltr placeholder='09' classInput='bg-[#EFF2F6]' label="شماره تلفن همراه خود را وارد کنید" />
          <CustomRadioButton />
        </form>
      </div>
      <div className='layout'>
        <Button onClick={()=> setStep(1)} classBtn='mb-5 bg-[#464646] text-white' name='مرحله بعدی' />
      </div>
    </div>

  )
}

export default Level1