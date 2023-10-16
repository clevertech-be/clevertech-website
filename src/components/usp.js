import Image from 'next/image'
import { useTranslate } from '../hooks/useTranslate'
import Link from 'next/link'

export default function Usp({ usps }) {
  const { t } = useTranslate()
  return (
    <section className=''>
      <div className='py-8 px-4 mx-auto max-w-screen-xl text-center sm:py-16 lg:px-6'>
        <h2 className='mb-4 text-4xl tracking-tight font-extrabold'>{t('home.usp.title')}</h2>
        <p className=' sm:text-xl '>{t('home.usp.description')}</p>
        <div className='mt-8 lg:mt-12 space-y-8 grid md:grid-cols-3 grid-cols-1 gap-6 md:gap-12 md:space-y-0'>
          {usps.map((usp, index) => (
            <div
              key={index}
              className={`${
                index === 1 ? 'bg-black text-white' : 'bg-gray-200 text-black'
              } rounded-xl shadow-lg p-10 justify-between flex flex-col items-center`}
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
              <p className='mb-4'>{t(usp.description)}</p>
              <Link href={usp.link} className='inline-flex items-center text-sm font-medium'>
                {t(usp.messageLink)}{' '}
                <Image
                  className='ml-1 w-5 h-5'
                  src={'/icons/hint.svg'}
                  width={10}
                  loading='lazy'
                  height={10}
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
