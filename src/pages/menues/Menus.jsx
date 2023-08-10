import React from 'react'
import MenuExample from './MenuExample'
import MenuWithToggleExample from './MenuWithToggleExample'
import MenuWithUseToggleExample from './MenuWithUseToggleExample'

export default function Menus() {
  return (
    <div className='flex gap-4'>
      <MenuExample />
      <MenuWithToggleExample />
      <MenuWithUseToggleExample />
    </div>
  )
}
