import { useTranslate } from '../hooks/useTranslate'
import Button from './button'

export default function Heading() {
  const { t } = useTranslate()
  return (
    <section className='bg-black text-white'>
      <div className='gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6'>
        <div className='font-light sm:text-lg'>
          <h2 className='mb-4 text-xl tracking-tight font-bold text-primaryDark-600'>
            {t('about.heading.label')}
          </h2>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold'>
            {t('about.heading.title')}
          </h2>
          <p className='mb-4'>{t('about.heading.description.1')}</p>
          <p>{t('about.heading.description.2')}</p>
        </div>
        <div className='grid grid-cols-2 gap-4 mt-8'>
          <img
            className='w-full rounded-lg'
            src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png'
            alt='office content 1'
          />
          <div className='mt-4 w-full lg:mt-10 rounded-lg flex flex-col justify-center items-center bg-primary-500'>
            <h2 className='mb-4 text-xs tracking-tight font-bold bg-white text-black p-2 rounded-lg'>
              {t('about.heading.card.label')}
            </h2>
            <h2 className='mb-4 tracking-tight font-extrabold'>{t('about.heading.card.title')}</h2>
            <p className='mb-4'>{t('about.heading.card.description.1')}</p>
            <Button link='/services' message={t('about.heading.card.button')} />
          </div>
        </div>
      </div>
    </section>
  )
}
