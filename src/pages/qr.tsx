import { useState } from "react"
import dynamic from 'next/dynamic'
import React from 'react'
import useGetDriverByCityNumberQuery from "@/hooks/query/drivers/useGetDriverByCityNumberQuery"
const QrCode = dynamic(() => import("../components/qr/index"), { ssr: false })
const Scan_qr = () => {
    const [code, setCode] = useState("")
    const { isLoading } = useGetDriverByCityNumberQuery(code)
    return (
        <>
            {
                isLoading ? <p>در حال گرفتن اطلاعات</p> :
                    <QrCode type={"QR"} onResult={(res: string) => setCode("12345")} />
            }
        </>
    )
}

export default Scan_qr