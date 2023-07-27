import ButtonExample from "./components/Button/ButtonExample"
import MenuExample from "./components/Menu/MenuExample"
import MenuWithToggleExample from "./components/MenuWithToggle/MenuWithToggleExample"
import Star from "./components/Star"

function App() {
  return (
    <main>
      <ButtonExample />
      <hr className="my-10" />
      <MenuExample />
      <hr className="my-10" />
      <Star />
      <hr className="my-10" />
      <MenuWithToggleExample />
    </main>
  )
}

export default App
