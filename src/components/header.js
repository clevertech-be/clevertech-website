import React from 'react'
import injected from '../injected.json'
import Image from 'next/image'
import Link from 'next/link'
import Button from './button'
import { useTranslate } from '../hooks/useTranslate'
import { useScrollPosition } from '../hooks/useScrollPostition'
import { cn } from '../utils/cn'
import ChatIcon from '../icons/chat'
import getIcon from '../icons/icon'

export default function Header() {
  const scrollPosition = useScrollPosition()
  const { t } = useTranslate()
  return (
    <nav
      className={cn(
        'z-50 sticky top-0 mx-auto overflow-auto transition-all duration-300 ease-in-out shadow-sm text-white',
        scrollPosition > 0 ? 'py-5 bg-background-900' : 'py-5',
      )}
    >
      <div className={`py-5 px-5 w-full max-w-screen-xl mx-auto`}>
        <div className='font-bold leading-normal w-full flex flex-row gap-2 items-center justify-between'>
          <Link href={'/'} className='md:hidden block'>
            <Image loading='lazy' width={100} height={60} src='/logo-inverted.png' alt={`Logo`} />
          </Link>
          <Link href={'/'} className='hidden md:block'>
            <Image loading='lazy' width={80} height={60} src='/logo-inverted.png' alt={`Logo`} />
          </Link>
          <div className='md:flex md:flex-row gap-4 hidden'>
            {injected.pages
              .filter((i) => !i.hideHeader)
              .map((item, index) => (
                <Link
                  href={item.link}
                  key={index}
                  className='text-white font-normal text-sm md:text-md leading-normal flex flex-row gap-1 items-center py-2 hover:text-primary-600 transition-all ease-in-out duration-300'
                >
                  {item.icon && getIcon(item.icon)}
                  {t(item.title)}
                </Link>
              ))}
          </div>
          <Button message={t('header.contact')} link='/contact' primary={true}>
            <ChatIcon />
          </Button>
        </div>
      </div>
    </nav>
  )
}
