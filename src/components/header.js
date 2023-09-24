import React from 'react'
import injected from '../injected.json'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslate } from '../hooks/useTranslate'
import { useRouter } from 'next/router'

export default function Header() {
  const { t } = useTranslate()
  const router = useRouter()
  return (
    <nav
      className={
        'z-50 sticky top-0 mx-auto overflow-auto transition-all duration-300 ease-in-ou text-black bg-gray-50 shadow-sm'
      }
    >
      <div className={`p-4 md:p-8 w-full max-w-screen-xl mx-auto`}>
        <div className='font-bold leading-normal w-full flex flex-row gap-2 items-center justify-between'>
          <div className='flex'>
            <Link href={'/'}>
              <Image loading='lazy' width={75} height={100} src='/logo.png' alt={`Logo`} />
            </Link>
          </div>
          <div className='hidden sm:flex sm:flex-row sm:flex-wrap sm:gap-4'>
            {injected.pages.map((item, index) => (
              <Link
                key={index}
                className={`${
                  router.route === item.link
                    ? 'text-primary-900 underline-offset-8 underline'
                    : 'text-gray-400'
                } hover:text-primary-900 hover:underline-offset-8 hover:underline cursor-pointer transition-all`}
                href={item.link}
              >
                {t(item.title)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
