import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import React from "react";
import Lottie from "lottie-react";
import ScanJson from "@/assets/images/qr-code-scan.json";
import useGetDriverByCityNumberQuery from "@/hooks/query/drivers/useGetDriverByCityNumberQuery";
import Button from "@/components/common/Button";
const QrCode = dynamic(() => import("../../../components/qr/index"), { ssr: false });
const Scan_qr = () => {
    const { isLoading } = useGetDriverByCityNumberQuery();

    return (
        <>
            {isLoading ? (
                <div className="h-screen flex flex-col justify-between items-center">
                    <div className="mt-14">
                        <Lottie animationData={ScanJson} />
                        <p className="text-center  font-artin-bold text-xl">در حال گرفتن اطلاعات راننده..</p>
                    </div>
                    <div className="layout mb-10">
                        <Button classBtn="bg-orange_light text-white " name="بازگشت" />
                    </div>
                </div>
            ) : (
                <QrCode facingMode="environment"/>
            )}
        </>
    );
};

export default Scan_qr;
