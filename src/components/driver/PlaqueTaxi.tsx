import Image from 'next/image'
import React from 'react'
import { AiFillCar } from 'react-icons/ai'
import Flag_iran from "@/assets/images/flag_iran.png"

const PlaqueTaxi = () => {
    return (
        <div className='mt-8'>
            <div className='flex gap-2 font-artin-bold'>
                <div className='flex items-center gap-1 text-gray-800'>
                    <AiFillCar size={27} />
                    <p className='font-artin-black text-xl'>نوع ماشین :</p>
                </div>
                <p className='text-lg text-[#626262]'>پراید</p>
            </div>
            {/* plak */}
            <div className='mt-6'>
                <div className='flex flex-row-reverse mt-3 border-[3px] border-black rounded-lg overflow-hidden bg-[#ffc913] items-center justify-between h-[60px]'>
                    {/* flag */}
                    <div className='flex flex-col h-full justify-between  items-center py-[5px] gap-1 w-[55px] bg-[#003399]'>
                        <Image width={25} height={25} src={Flag_iran} alt="" />
                        <p className='text-left font-artin-regular text-white text-[12px]'>
                            I.R.<br />
                            IRAN
                        </p>
                    </div>
                    {/* number */}
                    <div className=' text-4xl flex-1 font-artin-bold h-full flex  items-center justify-between px-4'>
                        <p>12</p>
                        <div className='flex flex-col items-center'>
                            <p className='text-lg mt-2 -mb-4 font-artin-regular'>TAXI</p>
                            <p className=''>ت</p>
                        </div>
                        <p>365</p>
                    </div>
                    {/* code city */}

                    <div className='w-[55px] border-l-[2px] h-full flex flex-col justify-center items-center border-black'>
                        <p className='font-estedad-medium text-[11px]'>ایران</p>
                        <p className='text-4xl font-artin-bold'>12</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlaqueTaxi