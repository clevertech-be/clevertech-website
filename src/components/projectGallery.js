import Link from 'next/link'
import { useTranslate } from '../hooks/useTranslate'
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
        <Link key={index} href={project.link}>
          <div className='gap-4 mt-8 sm:grid grid-cols-2 sm:mt-12'>
            <Image
              loading='lazy'
              width={600}
              src={project.image}
              height={300}
              className='mb-4 sm:mb-0 rounded-lg h-80 object-cover'
              alt='content gallery'
            />
            <div className='p-10 rounded-lg flex flex-col justify-between items-start text-left gap-5 hover:bg-black hover:text-white bg-gray-200 text-black transition-all ease-in-out duration-300 shadow-lg'>
              <div className='flex flex-col items-start'>
                <h2 className='mb-4 text-2xl font-extrabold text-primary-500'>
                  {t(project.title)}
                </h2>
                <p className='mb-4 text-xl'>{t(project.shortDescription)}</p>
              </div>
              <div className='flex flex-col items-start'>
                <h2 className='tracking-tight font-extrabold text-xl'>{t('project.features')}</h2>
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
            </div>
          </div>
        </Link>
      ))}
    </section>
  )
}
