import { useTranslate } from '../hooks/useTranslate'
import Link from 'next/link'
import HeroGallery from './heroGallery'

export default function Hero() {
  const { t } = useTranslate()

  return (
    <section className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12'>
      <Link
        href='#pricing'
        className='inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-white bg-primary-600 rounded-full hover:bg-primary-700'
        role='alert'
      >
        <span className='text-xs bg-white rounded-full text-black px-4 py-1.5 mr-3'>
          {t('home.hero.label')}
        </span>{' '}
        <span className='text-sm font-medium'>{t('home.hero.message')}</span>
      </Link>
      <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white'>
        {t('home.hero.title')}
        <span className='text-primary-600 pl-2'>{t('home.hero.title.span')}</span>
      </h1>
      <p className='mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48 '>
        {t('home.hero.description')}
      </p>
      <div className='flex flex-col mb-8 lg:mb-16 sm:flex-row sm:justify-center'>
        <HeroGallery />
      </div>
    </section>
  )
}
