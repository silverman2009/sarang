import dynamic from "next/dynamic";
import React from "react";
import Lottie from "lottie-react";
import ScanJson from "@/assets/images/qr-code-scan.json";
import Button from "@/components/common/Button";
import useGetUserByPhoneQuery from "@/hooks/query/drivers/useGetUserByPhoneQuery";
const QrCodeDriver = dynamic(() => import("../../../components/driver/Scan"), { ssr: false });
const Scan = () => {
    const { isLoading } = useGetUserByPhoneQuery();
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
                <QrCodeDriver />
            )}
        </>
    );
};

export default Scan;
