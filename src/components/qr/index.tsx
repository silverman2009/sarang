import React, { useEffect } from "react";
import { Html5Qrcode } from "html5-qrcode";
const qrConfig = { fps: 10, qrbox: { width: 300, height: 300 } };
const brConfig = { fps: 10, qrbox: { width: 300, height: 150 } };
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
      { facingMode: "environment" },
      props.type === "QR" ? qrConfig : brConfig,
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
    <div style={{ position: "relative" }}>
      <div id="reader" style={{ width: "100%" }} />
    </div>
  );
};
export default Qr;
