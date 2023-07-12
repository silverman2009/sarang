import Menu from '@/components/common/Menu'
import React from 'react'
import useAuthStore from '@/stores/auth-store'
import Image from 'next/image'
import Logo from "@/assets/images/logo.svg"
import InfoUser from '@/components/user/pay/profile/InfoUser'
import MoreMenu from '@/components/user/pay/profile/MoreMenu'
import SocialMedia from '@/components/common/SocialMedia'
import { Logout_iocn } from '@/components/global/icons'
const Profile = () => {
    const { setLogoutDialog} = useAuthStore()
    return (
        <div>
            <div className='bg_profile pb-14 pt-8 flex justify-center items-center'>
                <Image alt='' src={Logo} />

            </div>
            <div className='bg-white min-h-screen px-4 rounded-t-[28px] -mt-6'>
                <InfoUser />
                <MoreMenu />
                <SocialMedia />
                <button onClick={setLogoutDialog} className='w-full px-2 mt-7 flex items-center gap-2 py-4 rounded-lg text-[#DF2040] bg-[#FCE9EC]'>
                    <Logout_iocn/>
                    <p className='font-artin-regular'>خروج از حساب</p>
                </button>
            </div>
            <Menu />
        </div>
    )
}

export default Profile