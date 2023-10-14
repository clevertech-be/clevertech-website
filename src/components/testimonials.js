import Image from 'next/image'
import { useTranslate } from '../hooks/useTranslate'

export default function Testimonials({ testimonials }) {
  const { t } = useTranslate()
  return (
    <section className='p-5 rounded-lg' id='testimonials'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6'>
        <div className='mx-auto max-w-screen-sm mb-8 lg:mb-16'>
          <p className='font-bold text-primary-600 mb-5'>{t('home.testimonials.label')} </p>{' '}
          <h2 className='mb-4 md:text-4xl text-3xl tracking-tight font-extrabold text-black'>
            {t('home.testimonials.title')}
          </h2>
          <p className='font-light text-black sm:text-xl '>{t('home.testimonials.description')} </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto my-5'>
          {testimonials.map((item, index) => (
            <div
              className='mx-auto w-full max-w-screen-md bg-black p-5 justify-center items-center rounded-lg flex flex-col mb-4'
              key={index}
            >
              <p className='text-lg font-medium text-white'>{t(item.testimonial)}</p>
              <div className='flex justify-center items-center mt-6 space-x-3'>
                <Image
                  loading='lazy'
                  width={20}
                  height={20}
                  className='w-6 h-6 rounded-full'
                  src={item.avatar}
                  alt='profile picture'
                />
                <div className='flex items-center divide-x-2 divide-primary-600'>
                  <div className='pr-3 font-medium text-white'>{t(item.name)}</div>
                  <div className='pl-3 text-sm font-light text-white '>{t(item.role)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
