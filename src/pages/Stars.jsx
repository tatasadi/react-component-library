import React from 'react'
import Star from '../components/Star'
import StarWithToggleDisplay from '../components/StarWithToggleDisplay'

export default function Stars() {
  return (
    <div className="flex gap-4 p-10">
      <Star onChange={() => console.log("Star clicked!")} />
      <StarWithToggleDisplay
        onChange={() => console.log("StarWithToggleDisplay clicked!")}
      />
    </div>
  )
}
