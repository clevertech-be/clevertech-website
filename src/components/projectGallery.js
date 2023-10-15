import { useTranslate } from '../hooks/useTranslate'
import Button from './button'
import Image from 'next/image'

export default function ProjectGallery({ projects, label, title, description }) {
  const { t } = useTranslate()
  return (
    <section className='py-8 px-4 mx-auto max-w-screen-xl lg:px-12 sm:text-center lg:py-16'>
      <div className='mx-auto max-w-screen-md text-center mb-8 lg:mb-16'>
        <p className='font-bold text-primary-600'>{t(label)}</p>
        <h2 className='mb-4 md:text-4xl text-2xl tracking-tight font-extrabold text-black'>
          {t(title)}
        </h2>
        <p className='font-light text-black sm:text-xl'>{t(description)}</p>
      </div>
      {projects.map((project, index) => (
        <div key={index} className='gap-4 mt-8 sm:grid sm:grid-cols-4 sm:mt-12'>
          <Image
            loading='lazy'
            width={600}
            src={project.image}
            height={300}
            className='col-span-2 mb-4 sm:mb-0 rounded-lg'
            alt='content gallery'
          />
          <div className='my-2 p-4  md:my-0 md:p-0 rounded-lg flex flex-col justify-center items-center bg-black text-white'>
            <h2 className='mb-4 tracking-tight font-extrabold'>{t('project.features')}</h2>
            {project.features.map((feature, index) => (
              <div
                key={index}
                className='mt-2 flex flex-row gap-5 text-center items-center text-sm'
              >
                <Image
                  loading='lazy'
                  width={10}
                  height={10}
                  alt='Contact hint illustration'
                  src={'/icons/hint.svg'}
                />
                <div>{t(feature)}</div>
              </div>
            ))}
          </div>
          <div className='my-2 p-4  md:my-0 md:p-0 rounded-lg flex flex-col justify-center items-center text-center bg-primary-500 text-white'>
            <h2 className='mb-4 tracking-tight font-extrabold'>{t(project.title)}</h2>
            <p className='mb-4'>{t(project.shortDescription)}</p>
            <Button link={project.link} message={t('project.button')} />
          </div>
        </div>
      ))}
    </section>
  )
}
