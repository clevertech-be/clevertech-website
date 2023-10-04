import Link from 'next/link'
import { useTranslate } from '../hooks/useTranslate'
import Image from 'next/image'

export default function Partners({ partners }) {
  const { t } = useTranslate()
  return (
    <section className='from-primary-500 to-primary-700 bg-gradient-to-tr p-5 rounded-lg'>
      <div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-xl'>
        <h2 className='mb-4 text-3xl font-extrabold tracking-tight leading-tight text-center text-white md:text-4xl'>
          {t('home.partners.title')}
        </h2>
        <p className='mb-4 text-base font-light text-center text-white md:text-xl sm:px-14 md:px-24 lg:px-56 xl:px-72'>
          {t('home.partners.description')}
        </p>
        <div className='mt-6 space-y-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-4 xl:gap-8 md:space-y-0 md:mb-8 md:mt-12'>
          {partners.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className='flex justify-center items-center p-8 text-center bg-white hover:bg-white transition-all ease-in-out duration-300'
            >
              <Image
                className='h-8 text-primary-600'
                src={item.icon}
                width={100}
                height={100}
                alt='arrow'
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
