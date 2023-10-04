import { useTranslate } from '../../hooks/useTranslate'
import Button, { InvertedButton } from '../button'

export default function PricingCard({ pricing, inverted }) {
  const { t } = useTranslate()
  return (
    <div
      className={`flex flex-col p-6 mx-auto max-w-lg text-center ${
        inverted ? 'bg-primary-500 text-white' : 'bg-black text-white'
      } rounded-lg border shadow xl:p-8`}
    >
      <h3 className='mb-4 text-2xl font-semibold'>{t(pricing.name)}</h3>
      <p className='font-light sm:text-lg '>{t(pricing.description)}</p>
      <div className='flex justify-center items-baseline my-8'>
        <span className='mr-2 text-5xl font-extrabold'>{t(pricing.price)}</span>
      </div>
      <ul role='list' className='mb-8 space-y-4 text-left'>
        {pricing.features.map((feature, index) => (
          <li className='flex items-center' key={index}>
            <span>{t(feature)}</span>
          </li>
        ))}
      </ul>
      {!inverted && <InvertedButton link={pricing.link} message={t('home.pricing.start')} />}
      {inverted && <Button link={pricing.link} message={t('home.pricing.start')} />}
    </div>
  )
}
