import { useTranslate } from '../hooks/useTranslate'
import Button, { InvertedButton } from './button'
import Image from 'next/image'

export default function ProjectGallery() {
  const { t } = useTranslate()
  return (
    <section className='py-8 px-4 mx-auto max-w-screen-xl lg:px-12 sm:text-center lg:py-16'>
      <div className='mx-auto max-w-screen-md text-center mb-8 lg:mb-16'>
        <p className='font-bold text-primary-600'>{t('projects.gallery.label')}</p>
        <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-black'>
          {t('projects.gallery.title')}
        </h2>
        <p className='font-light text-black sm:text-xl'>{t('projects.gallery.description')}</p>
      </div>
      <div className='gap-4 mt-8 sm:grid sm:grid-cols-4 sm:mt-12'>
        <img
          className='col-span-2 mb-4 sm:mb-0 rounded-lg'
          src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-1.png'
          alt='content gallery 1'
        />
        <div className='rounded-lg flex flex-col justify-center items-center bg-black text-white'>
          <h2 className='mb-4 tracking-tight font-extrabold'>{t('project.features')}</h2>
          <div className='mt-2 flex flex-row gap-5 text-center items-center text-sm'>
            <Image
              loading='lazy'
              width={10}
              height={10}
              alt='Contact hint illustration'
              src={'/icons/hint.svg'}
            />
            <div>{t('project.feature.1')}</div>
          </div>
          <div className='mt-2 flex flex-row gap-5 text-center items-center text-sm'>
            <Image
              loading='lazy'
              width={10}
              height={10}
              alt='Contact hint illustration'
              src={'/icons/hint.svg'}
            />
            <div>{t('project.feature.1')}</div>
          </div>
          <div className='mt-2 flex flex-row gap-5 text-center items-center text-sm'>
            <Image
              loading='lazy'
              width={10}
              height={10}
              alt='Contact hint illustration'
              src={'/icons/hint.svg'}
            />
            <div>{t('project.feature.1')}</div>
          </div>
        </div>
        <div className='rounded-lg flex flex-col justify-center items-center bg-primary-500 text-white'>
          <h2 className='mb-4 tracking-tight font-extrabold'>{t('project.title')}</h2>
          <p className='mb-4'>{t('project.description')}</p>
          <Button link='/about' message={t('project.button')} />
        </div>
      </div>
      <div className='gap-4 mt-8 sm:grid sm:grid-cols-4 sm:mt-12'>
        <div className='rounded-lg flex flex-col justify-center items-center bg-primary-500 text-white'>
          <h2 className='mb-4 tracking-tight font-extrabold'>{t('project.title')}</h2>
          <p className='mb-4'>{t('project.description')}</p>
          <Button link='/about' message={t('project.button')} />
        </div>{' '}
        <div className='rounded-lg flex flex-col justify-center items-center bg-black text-white'>
          <h2 className='mb-4 tracking-tight font-extrabold'>{t('project.features')}</h2>
          <div className='mt-2 flex flex-row gap-5 text-center items-center text-sm'>
            <Image
              loading='lazy'
              width={10}
              height={10}
              alt='Contact hint illustration'
              src={'/icons/hint.svg'}
            />
            <div>{t('project.feature.1')}</div>
          </div>
          <div className='mt-2 flex flex-row gap-5 text-center items-center text-sm'>
            <Image
              loading='lazy'
              width={10}
              height={10}
              alt='Contact hint illustration'
              src={'/icons/hint.svg'}
            />
            <div>{t('project.feature.1')}</div>
          </div>
          <div className='mt-2 flex flex-row gap-5 text-center items-center text-sm'>
            <Image
              loading='lazy'
              width={10}
              height={10}
              alt='Contact hint illustration'
              src={'/icons/hint.svg'}
            />
            <div>{t('project.feature.1')}</div>
          </div>
        </div>
        <img
          className='col-span-2 mb-4 sm:mb-0 rounded-lg'
          src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-1.png'
          alt='content gallery 1'
        />
      </div>
      <div className='gap-4 mt-8 sm:grid sm:grid-cols-4 sm:mt-12'>
        <div className='rounded-lg flex flex-col justify-center items-center bg-black text-white'>
          <h2 className='mb-4 tracking-tight font-extrabold'>{t('project.features')}</h2>
          <div className='mt-2 flex flex-row gap-5 text-center items-center text-sm'>
            <Image
              loading='lazy'
              width={10}
              height={10}
              alt='Contact hint illustration'
              src={'/icons/hint.svg'}
            />
            <div>{t('project.feature.1')}</div>
          </div>
          <div className='mt-2 flex flex-row gap-5 text-center items-center text-sm'>
            <Image
              loading='lazy'
              width={10}
              height={10}
              alt='Contact hint illustration'
              src={'/icons/hint.svg'}
            />
            <div>{t('project.feature.1')}</div>
          </div>
          <div className='mt-2 flex flex-row gap-5 text-center items-center text-sm'>
            <Image
              loading='lazy'
              width={10}
              height={10}
              alt='Contact hint illustration'
              src={'/icons/hint.svg'}
            />
            <div>{t('project.feature.1')}</div>
          </div>
        </div>
        <img
          className='col-span-2 mb-4 sm:mb-0 rounded-lg'
          src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-1.png'
          alt='content gallery 1'
        />
        <div className='rounded-lg flex flex-col justify-center items-center bg-primary-500 text-white'>
          <h2 className='mb-4 tracking-tight font-extrabold'>{t('project.title')}</h2>
          <p className='mb-4'>{t('project.description')}</p>
          <Button link='/about' message={t('project.button')} />
        </div>
      </div>
      <div className='mt-10 justify-center flex'>
        <InvertedButton link='/projects' message={t('projects.button')} />
      </div>
    </section>
  )
}
