import React from "react"
import Toggle from "../Toggle/index"

export default function MenuWithToggle({ children }) {
  return (
    <Toggle>
      <div className="menu">{children}</div>
    </Toggle>
  )
}
