import React from "react";
import Taxi from "@/assets/images/taxi.json";
import { useRouter } from "next/navigation";
import LottiePlayer from "lottie-react";

const Home = () => {
    const router = useRouter();
    return (
        <div className="h-[60vh] flex  justify-center items-center">
            <div className="flex-col gap-20 flex">
                <LottiePlayer className="mt-10 h-[300px]" animationData={Taxi} />
                <div className="layout ">
                    <div className="flex font-artin-regular h-[52px] gap-4">
                        <button
                            onClick={() => router.push("/driver/pay/scan")}
                            className="flex-1 bg-orange_light rounded-lg text-white"
                        >
                            پرداخت با Qr
                        </button>
                        <button
                            onClick={() => router.push("/driver/pay/scan")}
                            className="flex-1 border border-[#cecece] rounded-lg"
                        >
                            پرداخت با نام کاربری
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
