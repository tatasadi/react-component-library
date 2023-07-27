import { createContext, useEffect, useRef, useState } from "react"

const ToggleContext = createContext()

export default function Toggle({ children, onToggle = () => {} }) {
  const [on, setOn] = useState(false)
  const firstRender = useRef(true)

  useEffect(() => {
    if (firstRender.current) firstRender.current = false
    else onToggle()
  }, [on])

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
