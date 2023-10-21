import React from 'react'
import injected from '../injected.json'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslate } from '../hooks/useTranslate'
import Newsletter from './newsletter'

export default function Footer() {
  const { t } = useTranslate()

  return (
    <footer className='text-white bg-black text-sm'>
      <div className={`p-6 md:p-8 w-full max-w-screen-xl mx-auto`}>
        <div className='border-b-2 border-primary-600 pb-10 mb-10'>
          <div className='grid gap-8 grid-cols-1 md:grid-cols-4'>
            <div className='flex flex-col md:flex-row gap-5 text-center items-center'>
              <Image
                loading='lazy'
                width={25}
                height={25}
                alt='Contact phone illustration'
                src={'/icons/phone.svg'}
              />
              <Link href={`tel:+${injected.tel}`}>
                <div className='flex flex-col gap-1'>
                  <div className='font-bold'>{injected.tel}</div>
                  <div className=''>{t('footer.tel.description')}</div>
                </div>
              </Link>
            </div>
            <div className='flex flex-col md:flex-row gap-5 text-center items-center'>
              <Image
                loading='lazy'
                width={25}
                height={25}
                alt='Contact email illustration'
                src={'/icons/email.svg'}
              />
              <Link href={`mailto:+${injected.email}`}>
                <div className='flex flex-col gap-1'>
                  <div className='font-bold'>{injected.email}</div>
                  <div className=''>{t('footer.email.description')}</div>
                </div>
              </Link>
            </div>
            <div className='flex flex-col md:flex-row gap-5 text-center items-center'>
              <Image
                loading='lazy'
                width={25}
                height={25}
                alt='Contact location illustration'
                src={'/icons/location.svg'}
              />
              <Link href={injected.address.url}>
                <div className='flex flex-col gap-1'>
                  <div className='font-bold'>{injected.address.address}</div>
                  <div className=''>{t('footer.location.description')}</div>
                </div>
              </Link>
            </div>
            <div className='flex flex-col-reverse md:flex-row gap-5 text-center items-center text-xl'>
              <Link href='/contact'>{t('footer.action.link')}</Link>
              <Image
                loading='lazy'
                width={25}
                height={25}
                alt='Contact hint illustration'
                src={'/icons/hint.svg'}
              />
            </div>
          </div>
        </div>
        <div className='grid gap-8 md:gap-4 grid-cols-1 md:grid-cols-4'>
          <div className='leading-normal flex flex-col gap-10 items-center md:justify-start md:items-start'>
            <Link href={'/'}>
              <Image loading='lazy' width={200} height={60} src='/logo.png' alt={`Logo`} />
            </Link>
            <div className='flex gap-5 flex-col items-center md:items-start text-center'>
              <div className='flex gap-2 flex-col items-center md:items-start text-center'>
                <div className='font-bold'>{injected.companyName}</div>
                <div>{injected.tva}</div>
              </div>
              <div className='md:text-start '>{t('footer.description')}</div>
            </div>
            <div className='flex gap-5 flex-row'>
              {injected.socials.map((item, index) => (
                <Link key={index} href={item.link}>
                  <Image
                    loading='lazy'
                    width={20}
                    height={20}
                    src={`/icons/socials/${item.title}.svg`}
                    alt={`Social ${item.title} - ${item.link}`}
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-4 items-center'>
            <div className='font-bold text-lg'>{t('footer.navigation.title')}</div>
            <div className='flex flex-col gap-4'>
              {injected.pages.map((item, index) => (
                <div className='flex flex-row gap-5 text-md' key={index}>
                  <Image
                    loading='lazy'
                    width={10}
                    height={10}
                    alt='Contact hint illustration'
                    src={'/icons/hint.svg'}
                  />
                  <Link href={item.link}>{t(item.title)}</Link>
                </div>
              ))}
            </div>
          </div>
          <div className='col-span-2'>
            <Newsletter />
          </div>
        </div>
      </div>
      <div className='bg-primary-600 w-full hidden'>
        <div className='p-6 md:p-8 mx-auto font-bold leading-normal max-w-screen-xl flex flex-col md:flex-row gap-4 justify-center items-center text-xs'>
          <div className='flex flex-col md:flex-row items-center gap-2'>
            {injected.sla.map((item, index) => (
              <Link
                key={index}
                className='text-white font-bold text-sm md:text-md leading-normal border-b-2 py-2 border-transparent hover:border-white transition-all ease-in-out duration-300'
                href={item.link}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
