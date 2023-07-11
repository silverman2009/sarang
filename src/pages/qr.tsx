import { useState } from "react";
import dynamic from "next/dynamic";
import React from "react";
import useGetDriverByCityNumberQuery from "@/hooks/query/drivers/useGetDriverByCityNumberQuery";
import useDriverStore from "@/stores/driver-store";
import { PaymentTypeEnum } from "@/helpers/utils/data";
const QrCode = dynamic(() => import("../components/qr/index"), { ssr: false });
const Scan_qr = () => {
    const {setPaymentTypeEnum} = useDriverStore()
    const [code, setCode] = useState("");
    const { isLoading } = useGetDriverByCityNumberQuery(code);
    const onResult = (result: string) => {
        setPaymentTypeEnum(PaymentTypeEnum.USER_SCAN_QR_CODE)
        setCode("12345")
    }
    return <>{isLoading ? <p>در حال گرفتن اطلاعات</p> : <QrCode type={"QR"} onResult={onResult} />}</>;
};

export default Scan_qr;
