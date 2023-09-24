import React from 'react'
import injected from '../injected.json'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslate } from '../hooks/useTranslate'
import { useLocale } from '../hooks/useLocale'
import { InvertedButton } from './button'

export default function Footer() {
  const { t } = useTranslate()
  const { switchLocale } = useLocale()

  return (
    <footer className='text-black text-sm'>
      <div className={`p-6 md:p-8 w-full max-w-screen-xl mx-auto`}>
        <div className='font-bold leading-normal w-full flex flex-col md:flex-row gap-10 items-center justify-between'>
          <div className='flex'>
            <Link href={'/'}>
              <Image loading='lazy' width={75} height={100} src='/logo.png' alt={`Logo`} />
            </Link>
          </div>
          <div className='flex flex-row gap-4 xl:gap-6 items-center'>
            <InvertedButton message={t('header.appointment')} link='/contact' />
          </div>
        </div>
      </div>
      <div className='p-6 md:p-8 w-full max-w-screen-xl mx-auto font-bold flex flex-col md:flex-row gap-10 md:gap-5 items-center md:items-start justify-between'>
        <div className='flex flex-col justify-between items-center md:items-start gap-4 font-normal text-black'>
          <div className='flex gap-2 flex-col items-center md:items-start text-center'>
            <div className='font-bold'>{injected.companyName}</div>
            <div className='text-base flex flex-col md:flex-row gap-2'>
              <div className='flex flex-row gap-2'>
                <Image
                  loading='lazy'
                  width={20}
                  height={20}
                  alt='Contact phone illustration'
                  src={'/icons/phone.svg'}
                />
                <Link href={`tel:+${injected.tel}`}>{injected.tel}</Link>
              </div>
              <div className='flex flex-row gap-2'>
                <Image
                  loading='lazy'
                  width={20}
                  height={20}
                  alt='Contact mail illustration'
                  src={'/icons/email.svg'}
                />
                <Link href={`mailto:+${injected.email}`}>{injected.email}</Link>
              </div>
            </div>
            <div>{injected.address.address}</div>
            <div>{injected.tva}</div>
          </div>
          <div className='flex gap-2 flex-col md:flex-row items-center font-bold'>
            <div>Follow us on</div>
            <div className='flex gap-2 flex-col md:flex-row items-center'>
              <div className='flex gap-2 flex-row'>
                {injected.socials.map((item, index) => (
                  <Link key={index} className='text-black' href={item.link}>
                    <Image
                      loading='lazy'
                      width={20}
                      height={20}
                      src={`/icons/${item.title}.svg`}
                      alt={`Social ${item.title} - ${item.link}`}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className='flex gap-2 flex-col md:flex-row items-center font-bold'>
            <select
              onChange={(e) => {
                switchLocale(e.target.value)
              }}
              className={`text-black bg-transparent border-none focus:ring-0 focus:outline-none p-0`}
            >
              {injected.locales.map((item, index) => (
                <option
                  key={index}
                  className={`uppercase text-black inline-flex items-center`}
                  value={item}
                >
                  {item.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className='flex flex-col md:flex-row gap-4 justify-between items-start text-left'>
          <div className='lg:mx-auto'>
            <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
              Company
            </h2>
            <ul className='text-gray-500 dark:text-gray-400'>
              <li className='mb-4'>
                <a href='#' className=' hover:underline'>
                  About
                </a>
              </li>
              <li className='mb-4'>
                <a href='#' className='hover:underline'>
                  Careers
                </a>
              </li>
              <li className='mb-4'>
                <a href='#' className='hover:underline'>
                  Brand Center
                </a>
              </li>
              <li className='mb-4'>
                <a href='#' className='hover:underline'>
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className='lg:mx-auto'>
            <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
              Help center
            </h2>
            <ul className='text-gray-500 dark:text-gray-400'>
              <li className='mb-4'>
                <a href='#' className='hover:underline'>
                  Discord Server
                </a>
              </li>
              <li className='mb-4'>
                <a href='#' className='hover:underline'>
                  Twitter
                </a>
              </li>
              <li className='mb-4'>
                <a href='#' className='hover:underline'>
                  Facebook
                </a>
              </li>
              <li className='mb-4'>
                <a href='#' className='hover:underline'>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className='lg:mx-auto'>
            <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
              Legal
            </h2>
            <ul className='text-gray-500 dark:text-gray-400'>
              <li className='mb-4'>
                <a href='#' className='hover:underline'>
                  Privacy Policy
                </a>
              </li>
              <li className='mb-4'>
                <a href='#' className='hover:underline'>
                  Licensing
                </a>
              </li>
              <li className='mb-4'>
                <a href='#' className='hover:underline'>
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='bg-gray-50 w-full'>
        <div className='p-6 md:p-8 mx-auto font-bold leading-normal max-w-screen-xl flex flex-col md:flex-row gap-4 justify-center items-center text-xs'>
          <div className='flex flex-row items-center gap-2'>
            {injected.sla.map((item, index) => (
              <Link
                key={index}
                className='font-normal hover:font-bold transition-all ease-in-out duration-300 hover:underline hover:underline-offset-8'
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
