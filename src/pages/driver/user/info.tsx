import { useEffect } from "react";
import useDriverStore from "@/stores/driver-store";
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Input from "@/components/common/Input";
import { useFormik } from "formik";
import PlaqueTaxi from "@/components/driver/PlaqueTaxi";
import Button from "@/components/common/Button";
import useFarePaymentMutation from "@/hooks/mutation/Fare/useFarePaymentMutation";
import { initialValuesFare } from "@/helpers/utils/initialValues";
import { variantSchemaFare } from "@/helpers/utils/validation/fare";
import InfoDriverProfile from "@/components/driver/InfoDriverProfile";
import { HiOutlineArrowRight } from "react-icons/hi";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
const InfoUser = () => {
    const { mutate, isLoading } = useFarePaymentMutation();
    const [count, setCount] = useState(1);
    const { driver, paymentTypeEnum, setCode, setPhone } = useDriverStore();
    const router = useRouter();
    const pathname = usePathname();
    const formik = useFormik({
        initialValues: initialValuesFare,
        validationSchema: variantSchemaFare,
        onSubmit: (values) => {
            const data = {
                car: driver?.Car._id!,
                paymentType: paymentTypeEnum,
                amount: Number(values.amount),
            };
            mutate(data);
        },
    });

    const increment = () => {
        if (count === 4) return;
        setCount((count) => count + 1);
    };
    const decrement = () => {
        if (count === 1) return;
        setCount((count) => count - 1);
    };

    const onClick = () => {
        if (formik.values.amount) {
            formik.handleSubmit();
        } else {
            const data = {
                car: driver?.Car._id!,
                paymentType: paymentTypeEnum,
                numberOfPassenger: Number(count),
            };
            mutate(data);
        }
    };

    useEffect(() => {
        if (!driver?.CarRoute.Name) {
            if (pathname.startsWith("/driver")) {
                router.push("/driver");
            } else {
                router.push("/user");
            }
        }
    }, [driver]);

    const onClickBackPgae = () => {
        setCode("");
        setPhone("");
        router.back();
    };

    return (
        <div className="min-h-screen bg-white flex flex-col justify-between gap-20">
            <div>
                <div className="border-b border-[#3f7f7f7] pb-4 mt-5">
                    <h1 className="text-center font-artin-black text-2xl ">مشخصات کاربر</h1>
                    <HiOutlineArrowRight onClick={onClickBackPgae} size={25} className="absolute right-4 top-6" />
                </div>
                <div className="layout">
                    <InfoDriverProfile />
                    {/* type car */}
                    {!pathname.startsWith("/driver") && <PlaqueTaxi />}
                    {driver?.CarRoute.Name === "چرخشی" ? (
                        <div className="mt-10">
                            <Input
                                ltr
                                label="هزینه تاکسی"
                                placeholder="هزینه تاکسی را به تومان وارد کنید"
                                classInput=""
                                formik={formik}
                                name="amount"
                            />
                        </div>
                    ) : (
                        <div className="mt-10">
                            <div>
                                <h1 className="font-artin-black text-xl">پرداخت هزینه</h1>
                                <p className="font-artin-regular text-[#626262]">
                                    تعداد نفرات مشخص و سپس بر روی دکه پرداخت کلیک کنید
                                </p>
                            </div>
                            <div className="flex items-center mt-5 h-[54px]  rounded-lg  bg-[#fdf2e3]">
                                <button onClick={increment} className="h-full flex-1 flex justify-center items-center">
                                    <AiOutlinePlus size={27} color="#bf7412" />
                                </button>

                                <p className="bg-white rounded-lg border flex justify-center items-center text-[#784a08] border-[#bf7412] flex-1 h-full font-artin-bold">
                                    {count} نفر
                                </p>
                                <button onClick={decrement} className="h-full flex-1 flex justify-center items-center">
                                    <AiOutlineMinus size={27} color="#bf7412" />
                                </button>
                            </div>

                            <div className="flex justify-between items-center mt-4">
                                <p className="font-artin-bold">
                                    تعداد نفر : <span className="font-artin-black text-xl text-orange_light mx-1">{count}</span>
                                    نفر
                                </p>
                                <p className="font-artin-bold">
                                    کرایه:{" "}
                                    <span className="font-artin-black text-xl text-orange_light mx-1">
                                        {(count * driver?.CarRoute.Cost!).toLocaleString()}
                                    </span>
                                    تومان
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="layout pb-6">
                <Button isLoading={isLoading} onClick={onClick} name="پرداخت" classBtn="bg-[#464646] text-white" />
            </div>
        </div>
    );
};

export default InfoUser;
