import Image from 'next/image'
import { useTranslate } from '../hooks/useTranslate'

export default function Usp({ usps }) {
  const { t } = useTranslate()
  return (
    <section className=''>
      <div className='py-8 px-4 mx-auto max-w-screen-xl text-center sm:py-16 lg:px-6'>
        <h2 className='mb-4 text-4xl tracking-tight font-extrabold'>{t('home.usp.title')}</h2>
        <p className=' sm:text-xl'>{t('home.usp.description')}</p>
        <div className='mt-8 lg:mt-12 space-y-8 grid grid-cols-1 gap-6 md:gap-12 md:space-y-0'>
          {usps.map((usp, index) => (
            <div
              id={`usp${index + 1}`}
              key={index}
              className={'rounded-xl p-10 justify-between flex flex-col items-center'}
            >
              <Image
                className='mx-auto mb-4'
                src={usp.icon}
                width={200}
                loading='lazy'
                height={20}
                alt='icon usp'
              />
              <h3 className='mb-2 text-xl font-bold'>{t(usp.title)}</h3>
              <p className='mb-4 bg-primary-500 p-3 rounded-xl text-white font-bold'>
                {t(usp.description)}
              </p>
              <p className='mb-4'>{t(usp.text)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
