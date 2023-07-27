import React from "react"
import Toggle from "../Toggle/index"

export default function MenuWithToggle({ children, onOpen }) {
  return (
    <Toggle onToggle={onOpen}>
      <div className="menu">{children}</div>
    </Toggle>
  )
}
