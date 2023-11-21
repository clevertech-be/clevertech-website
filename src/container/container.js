import React from 'react'

export default function Container({ children }) {
  return (
    <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 sm:px-6 flex gap-20 flex-col items-center justify-between text-white text-base leading-normal font-normal scroll-smooth transition-all duration-300 ease-in-out'>
      {children}
    </div>
  )
}
