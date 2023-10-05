import Image from 'next/image'
import { useTranslate } from '../hooks/useTranslate'
import Link from 'next/link'
import { InvertedButton } from './button'

export default function Services({ services }) {
  const { t } = useTranslate()
  return (
    <section className=''>
      <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
        <div className='mx-auto max-w-screen-md text-center mb-8 lg:mb-16'>
          <p className='font-bold text-primary-600'>{t('home.services.label')}</p>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-black'>
            {t('home.services.title')}
          </h2>
          <p className='font-light text-black sm:text-xl'>{t('home.services.description')}</p>
        </div>
        <div className='space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 xl:gap-8 md:space-y-0'>
          {services.map((service, index) => (
            <div
              className='p-6 bg-black rounded shadow hover:from-primary-500 hover:to-primary-700 hover:bg-gradient-to-tr transition-all ease-in-out duration-300'
              key={index}
            >
              <div className='flex justify-center items-center mb-4 w-10 h-10 rounded lg:h-12 lg:w-12'>
                <Image
                  src={service.icon}
                  width={24}
                  height={24}
                  alt='icon'
                  className='w-5 h-5 text-white lg:w-6 lg:h-6'
                />
              </div>
              <h3 className='mb-2 text-xl font-bold text-white'>{t(service.title)}</h3>
              <p className='font-light text-white'>{t(service.description)}</p>
              <div className='flex flex-row gap-5 text-center items-center text-md text-white font-bold mt-5'>
                <Link href={service.link}>{t('home.services.more')}</Link>
                <Image
                  loading='lazy'
                  width={10}
                  height={10}
                  alt='Contact hint illustration'
                  src={'/icons/hint.svg'}
                />
              </div>
            </div>
          ))}
        </div>
        <div className='mt-10 justify-center flex'>
          <InvertedButton link='/services' message={t('home.services.button')} />
        </div>
      </div>
    </section>
  )
}
