import { useState } from "react";
import dynamic from "next/dynamic";
import React from "react";
import useGetDriverByCityNumberQuery from "@/hooks/query/drivers/useGetDriverByCityNumberQuery";
import useDriverStore from "@/stores/driver-store";
import { PaymentTypeEnum } from "@/helpers/utils/data";
const QrCode = dynamic(() => import("../components/qr/index"), { ssr: false });
const Scan_qr = () => {
    let html5QrCode:any;
    const { setPaymentTypeEnum } = useDriverStore()
    const [code, setCode] = useState("");
    const { isLoading } = useGetDriverByCityNumberQuery(code);
    const onResult = (result: string) => {
        setPaymentTypeEnum(PaymentTypeEnum.USER_SCAN_QR_CODE)
        setCode("12345")
    }


    const handleStop = () => {
        try {
            html5QrCode
                .stop()
                .then((res: any) => {
                    html5QrCode.clear();
                })
                .catch((err: any) => {
                    console.log(err.message);
                });
        } catch (err) {
            console.log(err);
        }
    };

    return <>{isLoading ? <p>در حال گرفتن اطلاعات</p> : <QrCode html5QrCode={html5QrCode} handleStop={handleStop}  onResult={onResult} />}</>;
};

export default Scan_qr;
