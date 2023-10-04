import { useTranslate } from '../hooks/useTranslate'
import PricingCard from './card/pricing'

export default function Pricing({ pricing }) {
  const { t } = useTranslate()
  return (
    <section className=''>
      <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
        <div className='mx-auto max-w-screen-md text-center mb-8 lg:mb-12'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-black'>
            {t('home.pricing.title')}
          </h2>
          <p className='mb-5 font-light text-black/80 sm:text-xl '>
            {t('home.pricing.description')}
          </p>
        </div>
        <div className='space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0'>
          {pricing.map((pricing, index) => (
            <PricingCard key={index} pricing={pricing} inverted={index === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
