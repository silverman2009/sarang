import React, { useEffect } from "react";
import { Html5Qrcode } from "html5-qrcode";
import Button from "../common/Button";
import { useRouter } from "next/router";
const qrConfig = { fps: 10, qrbox: { width: 300, height: 300 } };

interface Props{
    html5QrCode:any;
    handleStop:()=>void;
    onResult:(decodedText:string)=>void;
}
const Qr = ({html5QrCode,handleStop,onResult}:Props) => {
    const router = useRouter()
    useEffect(() => {
        html5QrCode = new Html5Qrcode("reader");
    }, []);

    const handleClickAdvanced = () => {
        const qrCodeSuccessCallback = (decodedText: any) => {
            onResult(decodedText);
            handleStop();
        };
        html5QrCode.start({ facingMode: "environment" }, qrConfig, qrCodeSuccessCallback);
    };



    useEffect(() => {
        handleClickAdvanced();
    }, []);

    return (
        <div className="relative h-screen bg-[#00000043]">
            <div id="reader" className="w-full" />
            <div className="absolute w-[90%] left-1/2 -translate-x-1/2 bottom-10">
                <Button onClick={()=> router.back()} classBtn="bg-orange_light text-white " name="بازگشت" />
            </div>
        </div>
    );
};
export default Qr;
