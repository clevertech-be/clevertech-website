import { useTranslate } from '../hooks/useTranslate'
import PlusIcon from '../icons/plus'

export default function Faq({ faqs }) {
  const { t } = useTranslate()
  return (
    <section className=''>
      <div>
        <h2 className='mb-6 lg:mb-8 text-3xl lg:text-4xl tracking-tight font-extrabold text-left text-white'>
          {t('home.faq.title')}
        </h2>
        <div>
          <div
            id='faq-flush'
            data-accordion='collapse'
            data-active-classes='text-white'
            data-inactive-classes='text-white/60'
          >
            {faqs.map((item, index) => (
              <div key={index}>
                <h2 id={`faq-flush-heading-${index + 1}`}>
                  <button
                    type='button'
                    className='flex justify-between items-center py-5 w-full font-medium text-left text-white'
                    data-accordion-target={`#faq-flush-body-${index + 1}`}
                    aria-expanded={index === 0 ? 'true' : 'false'}
                    aria-controls={`faq-flush-body-${index + 1}`}
                  >
                    <span>{t(item.title)}</span>
                    <PlusIcon />
                  </button>
                </h2>
                <div
                  id={`faq-flush-body-${index + 1}`}
                  className=''
                  aria-labelledby={`faq-flush-heading-${index + 1}`}
                >
                  <div className='py-5'>
                    <p className='mb-2 text-white'>{t(item.description)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
