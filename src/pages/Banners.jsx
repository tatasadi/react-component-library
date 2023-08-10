import React from 'react'
import Banner from '../components/Banner/Banner'

export default function Banners() {
  return (
    <div className='flex flex-col gap-2'>
      <Banner variant="success" title="Congratulations!">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner>
      <Banner variant="warning" title="Attention">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner>
      <Banner variant="error" title="There is a problem with your application">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner>
      <Banner variant="neutral" title="Update available">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner>
      <div className='mt-10'></div>
      <Banner variant="success" title="Congratulations!" />
      <Banner variant="warning" title="Attention" />
      <Banner variant="error" title="There is a problem with your application" />
      <Banner variant="neutral" title="Update available" />
    </div>
  )
}
