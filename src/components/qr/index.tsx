import React, {useState } from "react";
import QrReader from "react-qr-scanner";


const Qr = () => {
    const [error, setError] = useState("")
    const [result, setResult] = useState("")
    const handleScan = (data: string) => {
        setResult(data)
    };

    const handleError = (err: string) => {
        setError(err)
        console.error(err);
    };
    return (
        <>
            <QrReader
                delay={100}
                //style={previewStyle}
                onError={handleError}
                onScan={handleScan}
            />
            <p>{result}</p>
            <p>{error}</p>
        </>
    );
};
export default Qr;
