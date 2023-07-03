import React from 'react'
interface Props{
    name?:string
    classBtn?:string;
    onClick?:()=>void
}
const Button = ({name,classBtn,onClick}:Props) => {
  return (
    <button onClick={onClick} className={`w-full min-w-[100px] font-artin-regular h-[48px] text-inherit rounded-lg ${classBtn}`}>{name}</button>
  )
}

export default Button