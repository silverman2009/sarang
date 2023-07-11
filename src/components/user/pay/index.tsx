import React from "react";
import LottieFiles from "./LottieFiles";
import { useRouter } from "next/navigation";

const Pay = () => {
    const router = useRouter();
    return (
        <div className="h-[60vh] flex  justify-center items-center">
            <div className="flex-col gap-20 flex">
                <LottieFiles />
                <div className="layout ">
                    <div className="flex font-artin-regular h-[52px] gap-4">
                        <button onClick={() => router.push("/qr")} className="flex-1 bg-orange_light rounded-lg text-white">
                            پرداخت با Qr
                        </button>
                        <button className="flex-1 border border-[#cecece] rounded-lg">پرداخت با کد شهری</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pay;
