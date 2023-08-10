import React from "react"
import MenuWithUseToggle from "../../components/MenuWithUseToggle/index"

export default function MenuWithUseToggleExample() {
  return (
    <MenuWithUseToggle onOpen={() => console.log("Opened/closed")}>
      <MenuWithUseToggle.Button>Menu</MenuWithUseToggle.Button>
      <MenuWithUseToggle.Dropdown>
        <MenuWithUseToggle.Item>Home</MenuWithUseToggle.Item>
        <MenuWithUseToggle.Item>About</MenuWithUseToggle.Item>
        <MenuWithUseToggle.Item>Contact</MenuWithUseToggle.Item>
        <MenuWithUseToggle.Item>Blog</MenuWithUseToggle.Item>
      </MenuWithUseToggle.Dropdown>
    </MenuWithUseToggle>
  )
}
