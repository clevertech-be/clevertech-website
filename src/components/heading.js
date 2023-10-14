import Image from 'next/image'
import { useTranslate } from '../hooks/useTranslate'
import Button from './button'

export default function Heading({
  title,
  description,
  label,
  link,
  cta,
  image,
  cardTitle,
  cardDescription,
}) {
  const { t } = useTranslate()
  return (
    <section className='bg-black text-white'>
      <div className='gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6'>
        <div className='font-light sm:text-lg'>
          <h2 className='mb-4 text-xl tracking-tight font-bold text-primaryDark-600'>{t(label)}</h2>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold'>{t(title)}</h2>
          <p className='mb-4'>{t(description)}</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8'>
          <Image
            className='w-full rounded-lg'
            loading='lazy'
            width={200}
            height={200}
            src={image}
            alt={`heading image`}
          />
          <div className='p-4 mt-4 w-full lg:mt-10 rounded-lg md:flex md:flex-col md:justify-center md:text-center md:items-center bg-primary-500 hidden'>
            <h2 className='mb-4 tracking-tight font-extrabold'>{t(cardTitle)}</h2>
            <p className='mb-4'>{t(cardDescription)}</p>
            <Button link={link} message={t(cta)} />
          </div>
        </div>
      </div>
    </section>
  )
}
