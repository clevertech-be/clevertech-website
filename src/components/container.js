import React from 'react'

export default function Container({ children }) {
  return (
    <div className='max-w-screen-xl 2xl:max-w-screen-2xl flex gap-4 flex-col flex-wrap items-center justify-between mx-auto px-6 md:px-16 pb-24 text-white text-base leading-normal font-normal bg-primary-600 scroll-smooth transition-all duration-300 ease-in-out'>
      {children}
    </div>
  )
}
