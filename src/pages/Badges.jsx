import React from 'react'
import Badge from '../components/Badge/Badge'

export default function Badges() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className='flex gap-4'>
        <Badge variant="square" color="gray">Badge</Badge>
        <Badge variant="square" color="red">Badge</Badge>
        <Badge variant="square" color="yellow">Badge</Badge>
        <Badge variant="square" color="green">Badge</Badge>
        <Badge variant="square" color="blue">Badge</Badge>
        <Badge variant="square" color="indigo">Badge</Badge>
        <Badge variant="square" color="purple">Badge</Badge>
        <Badge variant="square" color="pink">Badge</Badge>
      </div>
      <div className='flex gap-4'>
        <Badge variant="pill" color="gray">Badge</Badge>
        <Badge variant="pill" color="red">Badge</Badge>
        <Badge variant="pill" color="yellow">Badge</Badge>
        <Badge variant="pill" color="green">Badge</Badge>
        <Badge variant="pill" color="blue">Badge</Badge>
        <Badge variant="pill" color="indigo">Badge</Badge>
        <Badge variant="pill" color="purple">Badge</Badge>
        <Badge variant="pill" color="pink">Badge</Badge>
      </div>
    </div>
  )
}
