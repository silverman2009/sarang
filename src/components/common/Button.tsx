import React from 'react'
interface Props{
    name?:string
    classBtn?:string
}
const Button = ({name,classBtn}:Props) => {
  return (
    <button className={`w-full font-artin-regular h-[48px] text-inherit rounded-lg ${classBtn}`}>{name}</button>
  )
}

export default Button