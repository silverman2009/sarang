import dynamic from 'next/dynamic'
import React from 'react'
const QrCode = dynamic(() => import("../components/qr/index"), { ssr: false })
const qr_code = () => {
    // const []
    return (
        <QrCode type={"QR"} onResult={(res: string) => alert(res)} />
    )
}

export default qr_code