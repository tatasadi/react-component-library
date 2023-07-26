import { createContext, useState } from "react"
import MenuButton from "./MenuButton"
import MenuDropdown from "./MenuDropdown"
import "./Menu.css"

const MenuContext = createContext()

export default function Menu({ children }) {
  const [open, setOpen] = useState(false)

  function toggle() {
    setOpen((prevOpen) => !prevOpen)
  }

  return (
    <MenuContext.Provider value={{ open, toggle }}>
      <div className="menu">{children}</div>
    </MenuContext.Provider>
  )
}

export { MenuContext }
