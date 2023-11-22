import { useTranslate } from '../hooks/useTranslate'
import HintIcon from '../icons/hint'
import NextIcon from '../icons/next'

export default function Testimonials({ testimonials }) {
  const { t } = useTranslate()
  return (
    <section className='w-full my-20'>
      <div className='flex flex-col gap-5 mb-20'>
        <div className='mb-6 lg:mb-8 flex flex-row gap-4 text-white'>
          <HintIcon />
          <h2 className='text-3xl lg:text-4xl tracking-tight font-extrabold text-left'>
            {t('home.testimonials.title')}
          </h2>
        </div>
        <p className='text-xl max-w-xl tracking-tight font-extrabold text-left text-white'>
          {t('home.testimonials.description')}
        </p>
      </div>
      <div
        id='testimonial-carousel'
        className='relative border-2 p-5 sm:p-10 rounded-xl border-white/50'
        data-carousel='slide'
      >
        <div className='overflow-hidden relative mx-auto max-w-screen-md h-80 sm:h-48'>
          {testimonials.map((item, index) => (
            <figure
              className='hidden mx-auto w-full max-w-screen-md text-center mt-10'
              data-carousel-item
              key={index}
            >
              <blockquote>
                <p className='text-lg font-medium text-white sm:mb-10'>{t(item.testimonial)}</p>
              </blockquote>
              <figcaption className='mt-6 space-x-3'>
                <div className='flex  justify-center items-center divide-x-2 divide-primary-500'>
                  <div className='pr-3 font-medium text-white'>{item.name}</div>
                  <div className='pl-3 text-sm font-light text-white '>{t(item.role)}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className='flex justify-center items-center'>
          <button
            type='button'
            className='flex justify-center items-center mr-4 h-full cursor-pointer group focus:outline-none'
            data-carousel-prev
          >
            <span className='text-primary-500  hover:text-white transition-all ease-in-out duration-300'>
              <div className='rotate-180'>
                <NextIcon />
              </div>
              <span className='hidden'>{t('home.testimonials.previous')}</span>
            </span>
          </button>
          <button
            type='button'
            className='flex justify-center items-center h-full cursor-pointer group focus:outline-none'
            data-carousel-next
          >
            <span className='text-primary-500  hover:text-white transition-all ease-in-out duration-300'>
              <div>
                <NextIcon />
              </div>
              <span className='hidden'>{t('home.testimonials.next')}</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
