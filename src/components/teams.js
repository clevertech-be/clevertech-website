import { useTranslate } from '../hooks/useTranslate'
import HintIcon from '../icons/hint'
import Image from 'next/image'
import Button from './button'

export default function Teams({ teams }) {
  const { t } = useTranslate()
  return (
    <section>
      <div>
        <div className='mb-6 lg:mb-8 flex flex-row gap-4 text-white'>
          <HintIcon />
          <h2 className='text-3xl lg:text-4xl tracking-tight font-extrabold text-left'>
            {t('home.teams.title')}
          </h2>
        </div>
      </div>
      <div className='gap-4 my-8 sm:grid grid-cols-4 sm:mt-12'>
        <div className='col-span-2 text-2xl tracking-tight font-extrabold text-left text-white'>
          {t('home.teams.description')}
        </div>
        {teams.map((member, index) => (
          <div key={index} className='rounded-xl border-2 border-white/50'>
            <Image
              loading='lazy'
              width={600}
              height={300}
              src={member.image}
              className='rounded-t-xl h-80 object-cover'
              alt='member gallery'
            />
            <div className='text-white font-bold rounded-xl flex flex-col gap-4 px-5 py-5'>
              <h2 className='text-2xl font-extrabold text-white'>{member.name}</h2>
              <p className='text-xl text-white/50'>{t(member.role)}</p>
            </div>
          </div>
        ))}
      </div>
      <Button className='w-full' link='/teams' primary={true} message={t('home.team.button')} />
    </section>
  )
}
