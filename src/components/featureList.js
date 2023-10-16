import Image from 'next/image'
import { useTranslate } from '../hooks/useTranslate'

export default function FeatureList({ services }) {
  const { t } = useTranslate()
  return (
    <section className='bg-white dark:bg-gray-900' id='services'>
      <div className='py-8 px-4 mx-auto space-y-12 max-w-screen-xl lg:space-y-20 sm:py-16 lg:px-6 flex flex-col gap-10'>
        {services.map((service, index) => (
          <div
            id={`service${index + 1}`}
            className={`gap-8 items-center md:gap-16 flex justify-between flex-col ${
              index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
            }`}
            key={index}
          >
            <div
              className={`md:w-1/3 bg-black text-white rounded-xl text-center shadow-lg p-10 justify-between gap-5 flex flex-col items-center transition-all ease-in-out duration-300`}
            >
              <Image src={service.icon} width={200} height={24} alt='icon' />
              <h3 className='mb-2 text-xl font-bold'>{t(service.title)}</h3>
              <p className='font-light'>{t(service.cta)}</p>
            </div>
            <div className='md:w-2/3 sm:text-lg bg-gray-200 text-black rounded-xl text-left shadow-lg p-10 justify-between gap-5 flex flex-col items-start transition-all ease-in-out duration-300'>
              <p className='mb-2 lg:text-xl'>{t(service.description)}</p>
              <ul role='list' className='pt-4 my-4 space-y-5 border-t border-primary-600'>
                {service.features.map((feature, indexF) => (
                  <li className={`flex space-x-3`} key={indexF}>
                    <Image
                      loading='lazy'
                      width={10}
                      height={10}
                      alt='Contact hint illustration'
                      src={'/icons/hint.svg'}
                    />
                    <span className='text-base font-medium leading-tight'>{t(feature)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
