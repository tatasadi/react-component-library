import React from 'react'

export default function Card({ title, children }) {
  return (
    <div className='card'>
      <div className='card-title'>{title}</div>
      <div className='card-content'>{children}</div>
    </div>
  )
}
