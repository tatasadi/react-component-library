import Button from "../Button/Button"
import Toggle from "../Toggle/index"

export default function MenuButtonWithToggle({ children }) {
  return (
    <Toggle.Button>
      <Button>{children}</Button>
    </Toggle.Button>
  )
}
