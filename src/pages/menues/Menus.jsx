import React from 'react'
import MenuExample from './MenuExample'
import MenuWithToggleExample from './MenuWithToggleExample'
import MenuWithUseToggleExample from './MenuWithUseToggleExample'

export default function Menus() {
  return (
    <div className='flex gap-20 p-10'>
      <MenuExample />
      <MenuWithToggleExample />
      <MenuWithUseToggleExample />
    </div>
  )
}
