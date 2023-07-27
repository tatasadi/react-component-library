import React from "react"
import useToggle from "../../hooks/useToggle"

const MenuWithUseToggleContext = React.createContext()
export { MenuWithUseToggleContext }

export default function MenuWithUseToggle({ children, onOpen }) {
  const [open, toggleOpen] = useToggle({
    initialValue: false,
    onToggle: onOpen,
  })

  return (
    <MenuWithUseToggleContext.Provider value={{ open, toggleOpen }}>
      <div className="menu">{children}</div>
    </MenuWithUseToggleContext.Provider>
  )
}
