import Image from 'next/image'
import { useTranslate } from '../../hooks/useTranslate'
import { InvertedButton } from '../button'

export default function PricingCard({ pricing }) {
  const { t } = useTranslate()
  return (
    <div className='flex flex-col p-6 mx-auto max-w-lg text-center text-black bg-white rounded-lg border shadow xl:p-8'>
      <h3 className='mb-4 text-2xl font-semibold'>{t(pricing.name)}</h3>
      <p className='font-light text-black sm:text-lg '>{t(pricing.description)}</p>
      <div className='flex justify-center items-baseline my-8'>
        <span className='mr-2 text-5xl font-extrabold'>{t(pricing.price)}</span>
      </div>
      <ul role='list' className='mb-8 space-y-4 text-left'>
        {pricing.features.map((feature, index) => (
          <li className='flex items-center space-x-3' key={index}>
            <Image
              className='flex-shrink-0 w-5 h-5 text-green-500'
              src='/icons/green-check.svg'
              width={24}
              height={24}
              alt='arrow'
            />
            <span>{t(feature)}</span>
          </li>
        ))}
      </ul>
      <InvertedButton link={pricing.link} message={t('home.pricing.start')} />
    </div>
  )
}
