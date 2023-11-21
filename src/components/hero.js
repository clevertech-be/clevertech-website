import { useTranslate } from '../hooks/useTranslate'
import { cn } from '../utils/cn'

export default function Hero() {
  const { t } = useTranslate()

  return (
    <section
      className={cn(
        `w-full bg-[url('/images/hero-home.png')] bg-no-repeat bg-cover bg-center bg-background-900/40 bg-blend-multiply text-white rounded-xl`,
      )}
    >
      <div className='py-60 mx-auto max-w-screen-xl text-center'>
        <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl'>
          {t('home.hero.title')}
        </h1>
        <span className='text-xl pl-2 mb-20'>{t('home.hero.title.span')}</span>
      </div>
    </section>
  )
}
