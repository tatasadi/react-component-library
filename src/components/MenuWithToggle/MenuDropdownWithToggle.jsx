import Toggle from "../Toggle/index"

export default function MenuDropdownWithToggle({ children }) {
  return (
    <Toggle.On>
      <div className="menu-dropdown">{children}</div>
    </Toggle.On>
  )
}
