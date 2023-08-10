import React from "react"
import MenuWithToggle from "../../components/MenuWithToggle/index"

export default function MenuWithToggleExample() {
  const menu = ["Home", "About", "Contact", "Blog"]

  return (
    <MenuWithToggle onOpen={() => console.log("Menu toggled.")}>
      <MenuWithToggle.Button>Menu</MenuWithToggle.Button>
      <MenuWithToggle.Dropdown>
        {menu.map((item) => (
          <MenuWithToggle.Item key={item}>{item}</MenuWithToggle.Item>
        ))}
      </MenuWithToggle.Dropdown>
    </MenuWithToggle>
  )
}
