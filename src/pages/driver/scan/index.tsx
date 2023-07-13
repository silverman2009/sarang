import dynamic from "next/dynamic";
import React from "react";
const Qr = dynamic(() => import("../../../components/qr/index"), { ssr: false });
const Scan = () => {
    return (
        <>
            <Qr facingMode="user" />
        </>
    );
};

export default Scan;
