import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { InvertedButton } from './button'

export default function Header() {
  return (
    <nav
      className={
        'z-50 sticky top-0 mx-auto overflow-auto transition-all duration-300 ease-in-ou text-black shadow-sm bg-white'
      }
    >
      <div className={`p-4 w-full max-w-screen-xl mx-auto`}>
        <div className='font-bold leading-normal w-full flex flex-row gap-2 items-center justify-between'>
          <Link href={'/'}>
            <Image loading='lazy' width={50} height={60} src='/logo.png' alt={`Logo`} />
          </Link>
          <InvertedButton message='Contact' link='/contact' />
        </div>
      </div>
    </nav>
  )
}
