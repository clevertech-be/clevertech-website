import { useTranslate } from '../hooks/useTranslate'
import Button from './button'

export default function HeroGallery() {
  const { t } = useTranslate()
  return (
    <section className='py-8 px-4 mx-auto max-w-screen-xl lg:px-12 sm:text-center lg:py-16'>
      <div className='gap-4 mt-8 sm:grid sm:grid-cols-4 sm:mt-12'>
        <img
          className='col-span-2 mb-4 sm:mb-0 rounded-lg'
          src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-1.png'
          alt='content gallery 1'
        />
        <img
          className='hidden col-span-1 sm:block rounded-lg'
          src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png'
          alt='content gallery 3'
        />
        <div className='rounded-lg flex flex-col justify-center items-center bg-primary-500 text-white'>
          <h2 className='mb-4 tracking-tight font-extrabold'>{t('about.heading.card.title')}</h2>
          <p className='mb-4'>{t('home.hero.card.description.1')}</p>
          <Button link='/services' message={t('home.hero.card.button')} />
        </div>
        <div className='rounded-lg flex flex-col justify-center items-center bg-primary-500 text-white'>
          <h2 className='mb-4 tracking-tight font-extrabold'>{t('home.hero.card.title')}</h2>
          <p className='mb-4'>{t('home.hero.card.description')}</p>
          <Button link='/about' message={t('home.hero.card.button')} />
        </div>
        <img
          className='col-span-2 rounded-lg'
          src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-5.png'
          alt='content gallery 5'
        />
        <img
          className='hidden col-span-1 sm:block rounded-lg'
          src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-6.png'
          alt='content gallery 6'
        />
      </div>
    </section>
  )
}
