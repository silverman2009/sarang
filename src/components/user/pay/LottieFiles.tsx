"use client";
import React from 'react'
import Lottie from "lottie-react";
import Car from "@/assets/images/car.json"
const LottieFiles = () => {
    return (
        <div className='mt-14'>
           <Lottie animationData={Car}/>
        </div>
    )
}

export default LottieFiles