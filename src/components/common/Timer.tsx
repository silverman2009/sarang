import React from "react";
import { useState, useEffect } from "react";
import { TfiReload } from "react-icons/tfi";
const Timer = () => {
    const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval);
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000);
        return () => {
            clearInterval(myInterval);
        };
    });

    return (
        <div>
            {minutes === 0 && seconds === 0 ? (
                <button className="flex items-center gap-2 text-[12px] text-gray-500 font-artin-regular">
                    <TfiReload />
                    <span>ارسال مجدد کد تائید</span>
                </button>
            ) : (
                <h6 className="font-artin-bold text-orange_light">
                    {" "}
                    {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds} تا ارسال مجدد
                </h6>
            )}
        </div>
    );
};

export default Timer;
