import Button from '@/components/common/Button'
import Input from '@/components/common/Input'
import Select from '@/components/common/Select'
import React from 'react'
interface Props{
    setStep:React.Dispatch<React.SetStateAction<number>>
}
const Level2 = ({setStep}:Props) => {
    return (
        <div className='flex-1 h-full flex justify-between gap-14 flex-col'>
            <div className='layout mt-8'>
                <h1 className='text-center text-black font-artin-black text-lg '>برای تکمیل ثبت نام اطلاعات خود را وارد کنید.</h1>
                <form className='mt-5  flex flex-col gap-4'>
                   <Select label='استان خود را انتخاب کنید' list={["آذربیحان غربی","آذربیجان شرقی"]}/>
                   <Select label='شهرستان خود را انتخاب کنید' list={["آذربیحان غربی","آذربیجان شرقی"]}/>
                   <Input classInput='bg-[#EFF2F6] border-[1.5px] border-gray-300' label='رمز عبور'/>
                   <Input classInput='bg-[#EFF2F6] border-[1.5px] border-gray-300' label='تکرار رمز عبور'/>
                </form>
            </div>
            <div className='layout flex gap-4 items-center'>
                <Button onClick={()=>setStep(0)} classBtn='mb-5 border text-gray-500 flex-1' name='بازگشت' />
                <Button classBtn='mb-5 bg-[#464646]  text-white' name='ثبت اطلاعات' />
            </div>
        </div>
    )
}

export default Level2