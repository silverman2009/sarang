import { useEffect } from "react";
import Menu from "@/components/common/Menu";
import ProfileInfo from "@/components/common/ProfileInfo";
import Pay from "@/components/user/pay";
import useDriverStore from "@/stores/driver-store";

const Home = () => {
    const { setCode } = useDriverStore()
    useEffect(() => {
        setCode("")
    }, [])
    return (
        <div className="min-h-screen">
            <ProfileInfo />
            <Pay />
            <Menu />
        </div>
    );
};

export default Home;
