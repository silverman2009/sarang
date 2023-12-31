import React, { useEffect } from "react";
import Button from "../common/Button";
import { Html5Qrcode } from "html5-qrcode";
import { useRouter } from "next/navigation";
import { PaymentTypeEnum } from "@/helpers/utils/data";
import useDriverStore from "@/stores/driver-store";

let html5QrCode: any;
const qrConfig = { fps: 10, qrbox: { width: 300, height: 300 } };

const Qr = () => {
    const { phone, setPhone } = useDriverStore();
    const router = useRouter();
    const { setPaymentTypeEnum } = useDriverStore();

    useEffect(() => {
        html5QrCode = new Html5Qrcode("reader");
    }, []);

    const handleClickAdvanced = () => {
        const qrCodeSuccessCallback = () => {
            onResult();
            handleStop();
        };
        html5QrCode.start({ facingMode: "user" }, qrConfig, qrCodeSuccessCallback);
    };

    useEffect(() => {
        if (phone) {
            router.push("/driver");
            handleStop();
        } else {
            handleClickAdvanced();
        }
    }, [phone]);

    const handleStop = () => {
        try {
            html5QrCode
                .stop()
                .then(() => {
                    html5QrCode.clear();
                })
                .catch((err: any) => {
                    console.log(err.message);
                });
        } catch (err) {
            console.log(err);
        }
    };

    const backScreen = () => {
        router.back();
        return handleStop();
    };

    const onResult = () => {
        setPaymentTypeEnum(PaymentTypeEnum.DRIVER_SCAN_USER_CARD);
        setPhone("09052549406");
    };
    return (
        <div className="relative h-screen bg-[#00000043]">
            <div id="reader" className="w-full" />
            <div className="absolute w-[90%] left-1/2 -translate-x-1/2 bottom-10">
                <Button onClick={backScreen} classBtn="bg-orange_light text-white " name="بازگشت" />
            </div>
        </div>
    );
};
export default Qr;
