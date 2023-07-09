import React, { useState } from 'react'
import Html5QrcodePlugin from './Html5QrcodePlugin'
import ResultContainerPlugin from './ResultContainerPlugin'


const Qr = () => {
    const [decodedResults, setDecodedResults] = useState<any>([]);
    const onNewScanResult = (decodedText: any, decodedResult: any) => {
        setDecodedResults((prev: any) => [...prev, decodedResult]);
    };
    return (
        <>
            <Html5QrcodePlugin
                fps={10}
                qrbox={250}
                disableFlip={false}
                qrCodeSuccessCallback={onNewScanResult}
                
            />
            <ResultContainerPlugin results={decodedResults} />
        </>
    )
}

export default Qr