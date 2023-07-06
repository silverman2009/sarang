import Steps from "@/components/common/Steps";
import { useRouter } from "next/navigation";
import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
interface Props {
    step: number;
}
const HeaderSignup = ({ step }: Props) => {
    const router = useRouter();
    return (
        <div className="bg_header min-h-[150px] flex justify-center items-center shadow-md  rounded-b-[26px]">
            <div className="layout">
                <div className="flex items-center justify-between text-white">
                    <h4 className="text-center font-artin-black  text-2xl">اطلاعات هویتی</h4>
                    <button onClick={() => router.push("/auth/user/signin")}>
                        <BsArrowLeftShort size={34} />
                    </button>
                </div>
                <Steps step={step} />
            </div>
        </div>
    );
};

export default HeaderSignup;
