import ButtonExample from "./components/Button/ButtonExample"
import MenuExample from "./components/Menu/MenuExample"
import MenuWithToggleExample from "./components/MenuWithToggle/MenuWithToggleExample"
import MenuWithUseToggleExample from "./components/MenuWithUseToggle/MenuWithUseToggleExample"
import Star from "./components/Star"
import StarWithToggleDisplay from "./components/StarWithToggleDisplay"

function App() {
  return (
    <main>
      <ButtonExample />
      <hr className="my-10" />
      <MenuExample />
      <hr className="my-10" />
      <div className="flex gap-4">
        <Star onChange={() => console.log("Star clicked!")} />
        <StarWithToggleDisplay
          onChange={() => console.log("StarWithToggleDisplay clicked!")}
        />
      </div>
      <hr className="my-10" />
      <div className="flex gap-4">
        <MenuWithToggleExample />
        <MenuWithUseToggleExample />
      </div>
    </main>
  )
}

export default App
