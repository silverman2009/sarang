import dynamic from 'next/dynamic'
import React from 'react'
const QrCode = dynamic(() => import("../components/qr/index"),{ssr:false})
const qr_code = () => {
    return (
        <QrCode />
    )
}

export default qr_code