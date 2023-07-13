import React from "react";

const InformationPayWithPhone = () => {
    return (
        <div className="mb-10">
            <h1 className="font-artin-black text-xl">پرداخت با نام کاربری</h1>
            <nav className="mt-5">
                <p className="font-artin-regular text-[#626262]">
                    برای پرداخت با نام کاربری، لطفا شماره تلفن همراه کاربر در کادر زیر وارد کنید
                </p>
                <ul className="flex flex-col gap-2 mt-3">
                    <li className="flex items-center  gap-3">
                        <span className="block w-1 h-1 mt-1 bg-gray-800 rounded-full"></span>
                        <p className="font-artin-regular">شماره موبایل باید 11 رقم باشد</p>
                    </li>
                    <li className="flex items-start  gap-3">
                        <span className="block w-1 h-1 mt-3 bg-gray-800 rounded-full"></span>
                        <p className="font-artin-regular">
                            بعد از وارد شماره تلفن همراه، اطلاعات کاربر را میتوانید مشاهده و کرایه را پرداخت کنید
                        </p>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default InformationPayWithPhone;
