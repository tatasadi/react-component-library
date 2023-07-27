import React from "react"
import Button from "../Button/Button"
import { MenuWithUseToggleContext } from "./MenuWithUseToggle"

export default function MenuWithUseToggleButton({ children }) {
  const { toggleOpen } = React.useContext(MenuWithUseToggleContext)
  return <Button onClick={toggleOpen}>{children}</Button>
}
