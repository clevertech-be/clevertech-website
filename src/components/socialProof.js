import { useTranslate } from '../hooks/useTranslate'

export default function SocialProof({ socialProofs }) {
  const { t } = useTranslate()
  return (
    <section className='text-white bg-primary-500'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6'>
        <h2 className='mb-4 text-xl md:text-4xl tracking-tight font-extrabold  lg:text-5xl '>
          {t('about.socialProof.title')}
        </h2>
        <p className='font-light sm:text-lg sm:px-8 lg:px-32 xl:px-64 '>
          {t('about.socialProof.description')}
        </p>
        <dl className='grid grid-cols-1 gap-8 mx-auto mt-8 max-w-screen-md  lg:mt-14 sm:grid-cols-3 '>
          {socialProofs.map((socialProof, index) => (
            <div className='flex flex-col justify-center items-center' key={index}>
              <dt className='mb-2 text-4xl font-extrabold'>{t(socialProof.value)}</dt>
              <dd className='text-xl font-normal'>{t(socialProof.title)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
