import React from "react";

const InformationPayWithCode = () => {
    return (
        <div className="mb-10">
            <h1 className="font-artin-black text-xl">پرداخت با کد راننده</h1>
            <nav className="mt-5">
                <p className="font-artin-regular text-[#626262]">
                    برای پرداخت با کد راننده، لطفا کد ۵ رقمی را در کادر زیر وارد کنید
                </p>
                <ul className="flex flex-col gap-2 mt-3">
                    <li className="flex items-center  gap-3">
                        <span className="block w-1 h-1 mt-1 bg-gray-800 rounded-full"></span>
                        <p className="font-artin-regular">کد راننده باید شما ۵ رقم باشد</p>
                    </li>
                    <li className="flex items-start  gap-3">
                        <span className="block w-1 h-1 mt-3 bg-gray-800 rounded-full"></span>
                        <p className="font-artin-regular">چناچه کد 5 رقمی را پیدا نکردید، میتوانید از خود راننده بپرسید</p>
                    </li>
                    <li className="flex items-start  gap-3">
                        <span className="block w-1 h-1 mt-3 bg-gray-800 rounded-full"></span>
                        <p className="font-artin-regular">
                            بعد از وارد کد کد، اطلاعات راننده را میتوانید مشاهده و کرایه را پرداخت کنید
                        </p>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default InformationPayWithCode;
