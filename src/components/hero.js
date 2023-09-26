import Image from 'next/image'
import { useTranslate } from '../hooks/useTranslate'
import { InvertedButton } from './button'
import Link from 'next/link'

export default function Hero({ featured }) {
  const { t } = useTranslate()

  return (
    <section className=''>
      <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12'>
        <Link
          href='#pricing'
          className='inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-white bg-primary-600 rounded-full hover:bg-primary-700'
          role='alert'
        >
          <span className='text-xs bg-white rounded-full text-black px-4 py-1.5 mr-3'>
            {t('home.hero.label')}
          </span>{' '}
          <span className='text-sm font-medium'>{t('home.hero.message')}</span>
          <Image
            className='ml-2 w-5 h-5'
            src='/icons/arrow-right.svg'
            width={24}
            height={24}
            alt='arrow'
          />
        </Link>
        <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-black'>
          {t('home.hero.title')}
        </h1>
        <p className='mb-8 text-lg font-normal text-black/90 lg:text-xl sm:px-16 xl:px-48 '>
          {t('home.hero.description')}
        </p>
        <div className='flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4'>
          <InvertedButton link={'/contact'} message={'Contact us'} />
        </div>
        <div
          className='px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36'
          id='featured'
        >
          <span className='font-semibold text-black uppercase'>
            {t('home.hero.featured.title')}
          </span>
          <div className='flex flex-wrap justify-center items-center mt-8 text-black sm:justify-between'>
            {featured.map((item, index) => (
              <Link
                key={index}
                href='#featured'
                className='mr-5 mb-5 lg:mb-0 text-black/60  hover:text-black transition-all ease-in-out duration-300'
              >
                <Image
                  className='h-8'
                  src={item.icon}
                  width={200}
                  height={200}
                  alt='icon featured'
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
