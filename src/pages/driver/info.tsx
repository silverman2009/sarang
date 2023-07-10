import useDriverStore from '@/stores/driver-store'
import React from 'react'

const InfoDriver = () => {
    const {driver} = useDriverStore()
  return (
    <div>
        <h1 className='text-2xl'>{driver?.Firstname}{driver?.LastName}</h1>
    </div>
  )
}

export default InfoDriver