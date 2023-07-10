import React, { useEffect } from "react";
import { Html5Qrcode } from "html5-qrcode";
import Button from "../common/Button";
const qrConfig = { fps: 10, qrbox: { width: 300, height: 300 } };
const brConfig = { fps: 10, qrbox: { width: 300, height: 300 } };
let html5QrCode: any;

const Qr = (props: any) => {
  useEffect(() => {
    html5QrCode = new Html5Qrcode("reader");
  }, []);

  const handleClickAdvanced = () => {
    const qrCodeSuccessCallback = (decodedText: any) => {
      props.onResult(decodedText);
      handleStop();
    };
    html5QrCode.start(
      { facingMode: "environment" }, qrConfig,
      qrCodeSuccessCallback
    );
  };

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

  useEffect(() => {
    handleClickAdvanced()
  }, [])

  return (
    <div className="relative h-screen bg-[#00000043]">
      <div id="reader" className="w-full" />
      <div className="absolute w-[90%] left-1/2 -translate-x-1/2 bottom-10">
        <Button classBtn="bg-orange_light text-white " name="بازگشت" />
      </div>
    </div>
  );
};
export default Qr;
