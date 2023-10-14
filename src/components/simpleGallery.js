import Image from 'next/image'
import { useTranslate } from '../hooks/useTranslate'

export default function SimpleGallery({ title, description, images }) {
  const { t } = useTranslate()
  return (
    <section className=''>
      <div className='py-8 px-4 mx-auto max-w-screen-xl lg:px-12 sm:text-center lg:py-16'>
        <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-black'>{t(title)}</h2>
        <p className='font-light text-black sm:text-lg md:px-20 lg:px-38 xl:px-48'>
          {t(description)}
        </p>
        <div className='gap-4 mt-8 sm:grid sm:grid-cols-4 sm:mt-12'>
          {images.map((image, index) => (
            <Image
              loading='lazy'
              width={300}
              height={300}
              key={index}
              className='col-span-1 mb-4 sm:mb-0 rounded-lg'
              src={image}
              alt='content gallery'
            />
          ))}
        </div>
      </div>
    </section>
  )
}
