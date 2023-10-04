import React from 'react'
import injected from '../injected.json'
import Image from 'next/image'
import Link from 'next/link'
import { InvertedButton } from './button'
import { useTranslate } from '../hooks/useTranslate'
import { useLocale } from '../hooks/useLocale'

export default function Header() {
  const { switchLocale } = useLocale()
  const { t } = useTranslate()
  return (
    <nav
      className={
        'z-50 sticky top-0 mx-auto overflow-auto transition-all duration-300 ease-in-ou bg-black shadow-sm text-white'
      }
    >
      <div className={`p-6 md:p-8 w-full max-w-screen-xl mx-auto`}>
        <div className='font-bold leading-normal w-full flex flex-row gap-2 items-center justify-between'>
          <Link href={'/'} className='md:hidden block'>
            <Image loading='lazy' width={100} height={60} src='/logo.png' alt={`Logo`} />
          </Link>
          <Link href={'/'} className='hidden md:block'>
            <Image loading='lazy' width={150} height={60} src='/logo.png' alt={`Logo`} />
          </Link>
          <div className='md:flex md:flex-row gap-4 hidden'>
            {injected.pages.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className='text-white font-bold text-sm md:text-md leading-normal border-b-2  py-2 border-transparent hover:border-primary-600 transition-all ease-in-out duration-300'
              >
                {t(item.title)}
              </Link>
            ))}
          </div>
          <div className='flex flex-row gap-5 items-center'>
            <InvertedButton message='Contact' link='/contact' className={'hidden md:block'} />
            <div className='flex gap-2 flex-col md:flex-row items-center font-bold'>
              <select
                onChange={(e) => {
                  switchLocale(e.target.value)
                }}
                className={`text-white bg-transparent border-none focus:ring-0 focus:outline-none p-0`}
              >
                {injected.locales.map((item, index) => (
                  <option
                    key={index}
                    className={`uppercase text-white inline-flex items-center`}
                    value={item}
                  >
                    {item.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
