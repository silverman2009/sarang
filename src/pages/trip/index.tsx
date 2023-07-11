import Menu from "@/components/common/Menu";
import ProfileInfo from "@/components/common/ProfileInfo";
import CardTrip from "@/components/trip/CardTrip";
import useGetTripUserQuery from "@/hooks/query/trip/useGetTripUserQuery";
import React from "react";

const Trip = () => {
    const { isLoading, data } = useGetTripUserQuery();
    return (
        <div>
            <ProfileInfo />
            <div>{isLoading ? "در حال بررسی" :
                <div className="flex flex-col gap-5 mt-10 mb-28 ">
                    {
                        data?.map((trip, index) => <CardTrip trip={trip} key={index} />)
                    }
                </div>
            }</div>
            <Menu />
        </div>
    );
};

export default Trip;
