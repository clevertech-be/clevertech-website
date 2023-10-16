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
        <div className='space-y-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-8 md:space-y-0'>
          {services.map((service, index) => (
            <Link href={service.link} key={index}>
              <div
                className={`hover:bg-black hover:text-white bg-gray-200 text-black rounded-xl text-center shadow-lg p-10 justify-between gap-5 flex flex-col items-center transition-all ease-in-out duration-300`}
              >
                <Image src={service.icon} width={200} height={24} alt='icon' />
                <h3 className='mb-2 text-xl font-bold'>{t(service.title)}</h3>
                <p className='font-light'>{t(service.cta)}</p>
                <div className='flex flex-row gap-2 text-center items-center text-md font-bold'>
                  <div>{t('home.services.more')}</div>
                  <Image
                    loading='lazy'
                    width={10}
                    height={10}
                    alt='Contact hint illustration'
                    src={'/icons/hint.svg'}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className='mt-10 justify-center flex'>
          <InvertedButton link='/services' message={t('home.services.button')} />
        </div>
      </div>
    </section>
  )
}
