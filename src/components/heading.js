import { useTranslate } from '../hooks/useTranslate'

export default function Heading() {
  const { t } = useTranslate()
  return (
    <section className=''>
      <div className='gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6'>
        <div className='font-light text-black/80 sm:text-lg'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-black'>
            {t('home.heading.title')}
          </h2>
          <p className='mb-4'>{t('home.heading.description.1')}</p>
          <p>{t('home.heading.description.2')}</p>
        </div>
        <div className='grid grid-cols-2 gap-4 mt-8'>
          <img
            className='w-full rounded-lg'
            src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png'
            alt='office content 1'
          />
          <img
            className='mt-4 w-full lg:mt-10 rounded-lg'
            src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png'
            alt='office content 2'
          />
        </div>
      </div>
    </section>
  )
}
