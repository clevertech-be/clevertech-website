import Link from 'next/link'
import { useTranslate } from '../hooks/useTranslate'
import Image from 'next/image'

export default function Partners({ partners }) {
  const { t } = useTranslate()
  return (
    <section className=''>
      <div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-xl text-white'>
        <h2 className='mb-4 text-3xl font-extrabold tracking-tight leading-tight text-center md:text-4xl'>
          {t('home.partners.title')}
        </h2>
        <div className='mt-6 space-y-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-4 xl:gap-8 md:space-y-0 md:mb-8 md:mt-12'>
          {partners.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className='flex justify-center items-center p-8 text-center transition-all ease-in-out duration-300'
            >
              <Image
                className='h-8 text-white hover:text-primary-500'
                src={item.icon}
                width={100}
                height={100}
                alt='icon partner'
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
