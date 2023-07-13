import Menu from "@/components/common/Menu";
import ProfileInfo from "@/components/common/ProfileInfo";
import CardTrip from "@/components/trip/CardTrip";
import useGetTripUserQuery from "@/hooks/query/user/trip/useGetTripUserQuery";
import React from "react";

const Trip = () => {
    const { isLoading, data } = useGetTripUserQuery();
    return (
        <div>
            <ProfileInfo back />
            <div>
                {isLoading ? (
                    <p className="text-center font-artin-regular mt-10">در حال گرفتن اطلاعات ...</p>
                ) : (
                    <div className="flex flex-col gap-5 mt-10 mb-28 ">
                        {data?.map((trip, index) => (
                            <CardTrip trip={trip} key={index} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Trip;
