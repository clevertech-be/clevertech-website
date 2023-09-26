import Image from 'next/image'
import { useTranslate } from '../hooks/useTranslate'
import Link from 'next/link'

export default function Team({ team }) {
  const { t } = useTranslate()
  return (
    <section className=' antialiased'>
      <div className='max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24'>
        <div className='max-w-5xl'>
          <h2 className='text-3xl font-extrabold leading-tight sm:text-4xl text-black'>
            {t('home.team.title')}
          </h2>
          <p className='mt-4 text-base font-normal text-black/80 sm:text-xl '>
            {t('home.team.description')}
          </p>
        </div>

        <div className='grid grid-cols-1 mt-12 gap-y-12 gap-x-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {team.map((item, index) => (
            <div key={index}>
              <Image
                className='object-cover object-top w-full h-64 lg:h-48 rounded-lg'
                width={250}
                height={250}
                src={item.avatar}
                alt='team.member'
              />
              <div className='mt-4 space-y-2'>
                <div>
                  <h3 className='text-xl font-bold text-black'>{t(item.name)}</h3>
                  <p className='text-sm font-medium text-black/90'>{t(item.role)}</p>
                </div>
                <p className='text-base font-normal text-black/80 '>{t(item.description)}</p>
                <ul className='flex items-center gap-3'>
                  {item.socials.map((social, index) => (
                    <li key={index}>
                      <Link href={social.link}>
                        <span className='sr-only'>{social.title}</span>
                        <Image
                          src={`/icons/socials/${social.title}.svg`}
                          width={24}
                          height={24}
                          alt={social.title}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
