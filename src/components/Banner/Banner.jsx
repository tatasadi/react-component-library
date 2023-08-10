import React from 'react'
import classnames from "classnames"
import { HiCheckCircle, HiExclamation, HiXCircle, HiInformationCircle } from "react-icons/hi";

export default function Banner({ variant, className, title, children, ...rest }) {
  const varianClass = variant && `banner-${variant}`

  return (
    <div className={classnames('banner flex p-4 gap-4', varianClass, className)} {...rest}>
      {variant === "success" && <HiCheckCircle className='banner-icon' />}
      {variant === "warning" && <HiExclamation className='banner-icon' />}
      {variant === "error" && <HiXCircle className='banner-icon' />}
      {variant === "neutral" && <HiInformationCircle className='banner-icon' />}
      <div className='flex flex-col gap-4'>
        <div className='font-bold'>{title}</div>
        {children && <div className='text-sm'>{children}</div>}
      </div>
    </div>
  )
}
