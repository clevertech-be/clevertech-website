import Image from 'next/image'
import { useTranslate } from '../hooks/useTranslate'
import Link from 'next/link'

export default function Team({ team }) {
  const { t } = useTranslate()
  return (
    <section className=''>
      <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 '>
        <div className='mx-auto max-w-screen-sm text-center mb-8 lg:mb-16'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-black'>
            {t('team.title')}
          </h2>
          <p className='font-light text-black lg:mb-16 sm:text-xl'>{t('team.description')}</p>
        </div>
        <div className='grid gap-8 mb-6 lg:mb-16 grid-cols-3'>
          {team.map((member) => (
            <div
              key={member.name}
              className='items-center bg-black rounded-lg shadow sm:flex sm:flex-col'
            >
              <Image
                width={600}
                height={600}
                loading='lazy'
                className='w-full rounded-lg'
                src={member.avatar}
                alt={`${member.name} Avatar`}
              />
              <div className='p-5'>
                <h3 className='text-xl font-bold tracking-tight text-primary-500'>
                  {t(member.name)}
                </h3>
                <span className='text-white'>{t(member.role)}</span>
                <p className='mt-3 mb-4 font-light text-white'>{t(member.description)}</p>
                <ul className='flex space-x-4 sm:mt-0'>
                  {member.socials.map((social, index) => (
                    <li key={index}>
                      <Link href={social.link}>
                        <Image
                          width={20}
                          height={20}
                          loading='lazy'
                          src={`/icons/socials/${social.title}.svg`}
                          alt={`${social.title} icon`}
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
