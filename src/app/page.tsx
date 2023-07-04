import Menu from "@/components/common/Menu";
import ProfileInfo from "@/components/common/ProfileInfo";
import Pay from "@/components/user/pay";

const Home = () => {

    return (
        <div className="min-h-screen">
            <ProfileInfo />
            <Pay />
            <Menu />
        </div>
    );
};

export default Home;
