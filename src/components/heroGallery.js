import { useTranslate } from '../hooks/useTranslate'

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
        <div className='sm:flex sm:flex-col sm:gap-2 hidden col-span-1 rounded-lg justify-between'>
          <div className='flex flex-row gap-2 text-white'>
            <div className='flex flex-row gap-1 text-center items-center'>
              <div className='flex flex-col gap-2 items-start text-left border-l-2 px-2 border-primary-600 transition-all ease-in-out duration-300'>
                <span>{t('home.hero.extra')}</span>
                <span className='text-primary-600'>{t('home.hero.extra')}</span>
              </div>
            </div>
          </div>
          <div className='flex flex-row gap-2 text-white items-end justify-end'>
            <div className='flex flex-row gap-1 text-center items-center'>
              <div className='flex flex-col gap-2 items-start text-left border-r-2 px-2 border-primary-600 transition-all ease-in-out duration-300'>
                <span>{t('home.hero.extra')}</span>
                <span className='text-primary-600'>{t('home.hero.extra')}</span>
              </div>
            </div>
          </div>
        </div>
        <div className='sm:flex sm:flex-col sm:gap-2 hidden col-span-1 rounded-lg justify-between'>
          <div className='flex flex-row gap-2 text-primary-600 items-end justify-end'>
            <div className='flex flex-row gap-1 text-center items-center'>
              <div className='flex flex-col gap-2 items-start text-left border-r-2 px-2 border-pwhite transition-all ease-in-out duration-300'>
                <span>{t('home.hero.extra')}</span>
                <span className='text-white'>{t('home.hero.extra')}</span>
              </div>
            </div>
          </div>
          <div className='flex flex-row gap-2 text-primary-600'>
            <div className='flex flex-row gap-1 text-center items-center'>
              <div className='flex flex-col gap-2 items-start text-left border-l-2 px-2 border-pwhite transition-all ease-in-out duration-300'>
                <span>{t('home.hero.extra')}</span>
                <span className='text-white'>{t('home.hero.extra')}</span>
              </div>
            </div>
          </div>
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
