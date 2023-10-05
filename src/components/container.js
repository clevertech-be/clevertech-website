import React from 'react'

export default function Container({ children }) {
  return (
    <div className='py-10 max-w-screen-xl flex gap-14 flex-col items-center justify-between mx-auto text-black text-base leading-normal font-normal scroll-smooth transition-all duration-300 ease-in-out'>
      {children}
    </div>
  )
}
