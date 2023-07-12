import { User_icon } from "@/components/global/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaCar } from "react-icons/fa";

const Home = () => {
    return (
        <div className="min-h-screen bg-white">
            <div className="w-full px-4 pt-10">
                <h1 className="text-xl font-artin-black text-[#222]">به اپلیکیشن سارنگ خوش آمدید</h1>

                <div className="mt-1">
                    <p className="font-artin-regular text-[#626262]">
                        برای استفاده از این اپلیکیشن لطفا قوانین و مقررات را رعایت فرمایید
                    </p>
                    <div className="mt-10">
                        <p className="font-artin-bold">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و
                            متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                        </p>

                        <ul className=" mt-5 flex flex-col gap-2">
                            <li className="flex items-center gap-2">
                                <span className="w-1 h-1 rounded-full block bg-gray-700"></span>
                                <p className="font-artin-regular">پرداخت آسان </p>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1 h-1 rounded-full block bg-gray-700"></span>
                                <p className="font-artin-regular"> شیوه نوین در پرداخت </p>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1 h-1 rounded-full block bg-gray-700"></span>
                                <p className="font-artin-regular">نردیک ترین بانک به تو</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1 h-1 rounded-full block bg-gray-700"></span>
                                <p className="font-artin-regular">پول تو جیبته</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex mt-10 flex-col  gap-5 w-full ">
                    <Link
                        className="font-artin-regular text-xl bg-orange_light text-white border py-3 rounded-lg flex justify-center items-center gap-2"
                        href="/auth/driver/auth/signin"
                    >
                        <FaCar size={32} />
                        ورود به عنوان راننده
                    </Link>
                    <Link
                        className="font-artin-regular border text-xl py-3 text-white bg_profile rounded-lg justify-center items-center flex gap-2"
                        href="/auth/user/auth/signin"
                    >
                        <User_icon size="29" fill="#fff" />
                        ورود به عنوان کاربر
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
