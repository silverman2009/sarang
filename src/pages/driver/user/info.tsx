import useDriverStore from "@/stores/driver-store";
import React, { useState, useEffect } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Input from "@/components/common/Input";
import { useFormik } from "formik";
import PlaqueTaxi from "@/components/driver/PlaqueTaxi";
import Button from "@/components/common/Button";
import useFarePaymentMutation from "@/hooks/mutation/Fare/useFarePaymentMutation";
import { initialValuesFare } from "@/helpers/utils/initialValues";
import { variantSchemaFare } from "@/helpers/utils/validation/fare";
import { useRouter } from "next/navigation";
const InfoUser = () => {
    const { mutate, isLoading } = useFarePaymentMutation();
    const [count, setCount] = useState(1);
    const { driver, paymentTypeEnum } = useDriverStore();
    const router = useRouter();
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

    // useEffect(() => {
    //     if (!driver?.CarRoute.Name) {
    //         router.push("/");
    //     }
    // }, [driver]);

    return (
        <div className="min-h-screen bg-white flex flex-col justify-between gap-20">
            <div>
                <h1 className="text-center font-artin-black text-2xl border-b border-[#3f7f7f7] pb-4 mt-5">
                    مشخصات راننده و پرداخت
                </h1>
                <div className="layout">
                    {/* <InfoUserProfile /> */}
                    {/* type car */}
                    <PlaqueTaxi />
                    {true? (
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
                                        {count * driver?.CarRoute.Cost!}
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
