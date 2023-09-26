import Image from 'next/image'
import { useTranslate } from '../hooks/useTranslate'
import Link from 'next/link'

export default function Usp({ usps }) {
  const { t } = useTranslate()
  return (
    <section className='from-primary-500 to-primary-700 bg-gradient-to-tr p-5 rounded-lg text-white'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl text-center sm:py-16 lg:px-6'>
        <h2 className='mb-4 text-4xl tracking-tight font-extrabold'>{t('home.usp.title')}</h2>
        <p className='text-white/80 sm:text-xl '>{t('home.usp.description')}</p>
        <div className='mt-8 lg:mt-12 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0'>
          {usps.map((usp, index) => (
            <div key={index}>
              <Image
                className='mx-auto mb-4 w-12 h-12 text-white'
                src={usp.icon}
                width={20}
                height={20}
                alt='icon usp'
              />
              <h3 className='mb-2 text-xl font-bold'>{t(usp.title)}</h3>
              <p className='mb-4 text-white/80 '>{t(usp.description)}</p>
              <Link
                href={usp.link}
                className='inline-flex items-center text-sm font-medium transition-all ease-in-out duration-300 hover:underline-offset-4 hover:underline text-white/90 hover:text-white'
              >
                {t(usp.messageLink)}{' '}
                <Image
                  className='ml-1 w-5 h-5'
                  src={'/icons/arrow-right.svg'}
                  width={20}
                  height={20}
                  alt='arrow'
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}