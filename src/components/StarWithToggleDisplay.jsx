import React from "react"
import Toggle from "./Toggle/index"
import { BsStar, BsStarFill } from "react-icons/bs"
import ToggleDisplay from "./Toggle/ToggleDisplay"

export default function StarWithToggleDisplay({ onChange }) {
  return (
    <Toggle onToggle={onChange}>
      <Toggle.Button>
        <Toggle.Display>
          {(on) =>
            on ? (
              <BsStarFill className="star filled" />
            ) : (
              <BsStar className="star" />
            )
          }
        </Toggle.Display>
      </Toggle.Button>
    </Toggle>
  )
}
