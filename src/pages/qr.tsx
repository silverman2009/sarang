import Qr from '@/components/qr'
import React from 'react'

const qr_code = () => {
    return (
        <Qr type={"QR"} onResult={(res:any) => alert(res)} />
    )
}

export default qr_code