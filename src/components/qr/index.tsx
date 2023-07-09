import React, { useState } from "react";
import QrReader from "react-qr-scanner";


const Qr = () => {
    const [error, setError] = useState("")
    const [result, setResult] = React.useState(null);
    const onScan = (data:any) => {
        if (data) {
          setResult(data);
          console.log(data);
        }
      };
    

    const handleError = (err: string) => {
        setError(err)
        console.error(err);
    };
    return (
        <>
            <QrReader
                delay={100}
                onError={handleError}
                onScan={onScan}
                style={{ width: "100%" }}
            />
            <p>{result}</p>
            <p>{error}</p>
        </>
    );
};
export default Qr;
