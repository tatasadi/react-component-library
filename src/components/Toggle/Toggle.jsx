import { createContext, useEffect, useRef, useState } from "react"
import useEffectOnUpdate from "../../hooks/useEffectOnUpdate"

const ToggleContext = createContext()

export default function Toggle({ children, onToggle = () => {} }) {
  const [on, setOn] = useState(false)

  useEffectOnUpdate(onToggle, [on])

  function toggle() {
    setOn((prevOn) => !prevOn)
  }

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  )
}

export { ToggleContext }
