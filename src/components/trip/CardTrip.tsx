import { Driver } from '@/types/Driver'
import { Trip } from '@/types/Driver/ResponseUserTripQuery'
import React from 'react'
import { Location_icon } from '../global/icons'
interface Props {
    trip: Trip
}
const CardTrip = ({ trip }: Props) => {
    return (
        <div className='layout bg-white shadow rounded-lg p-2'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <p className='font-artin-bold'>نوع تاکسی :</p>
                    <p className='font-artin-regular'>{trip.car.Type}</p>
                </div>
                <p className='font-artin-bold text-gray-700'>{new Date(trip.CreatedAt).toLocaleDateString("fa-IR")}</p>

                {/* <p>{trip.PaymentType}</p> */}
                {/* <p>{trip.UserTransaction.Amount}</p> */}
                {/* <p>{trip.NumberOfPassengers}</p>  */}
            </div>

            <div className='flex items-center gap-1 mt-3 '>
                <Location_icon />
                <p className='font-estedad-medium text-xs'>{trip.Route.Name}</p>
            </div>
            <div className='flex items-center justify-between py-3'>
                <p className='font-artin-regular'>تعداد نفر : <span>{trip.NumberOfPassengers}</span></p>
                <p className='font-artin-regular'>مبلغ پرداختی : <span>{trip.UserTransaction.Amount}</span></p>
            </div>
            <p className='font-artin-regular'> روش پرداخت : <span>{trip.PaymentType}</span></p>
        </div>
    )
}

export default CardTrip