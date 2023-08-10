import React from 'react'
import classnames from "classnames"

export default function Badge({ variant, color, children, className, ...rest }) {
  const varianClass = variant && `badge-${variant}`
  const colorClass = color && `badge-${color}`
  const allClasses = classnames("badge", varianClass, colorClass, className)

  return (
    <div className={allClasses} {...rest}>{children}</div>
  )
}
