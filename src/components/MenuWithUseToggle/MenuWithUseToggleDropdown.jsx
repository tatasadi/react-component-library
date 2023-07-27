import React from "react"
import { MenuWithUseToggleContext } from "./MenuWithUseToggle"

export default function MenuWithUseToggleDropdown({ children }) {
  const { open } = React.useContext(MenuWithUseToggleContext)

  return <>{open ? <div className="menu-dropdown">{children}</div> : null}</>
}
