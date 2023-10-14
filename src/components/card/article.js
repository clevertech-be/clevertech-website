import Link from 'next/link'
import { useTranslate } from '../../hooks/useTranslate'
import Image from 'next/image'

export default function ArticleCard({ article }) {
  const { t } = useTranslate()
  return (
    <div className='group'>
      <Link href={article.link}>
        <div className='p-4 bg-black group-hover:bg-primary-600 rounded-lg shadow-lg transition-all ease-in-out duration-300'>
          <Image
            className='mb-5 rounded-lg w-full'
            src={article.image}
            alt='office laptop working'
            width={200}
            height={300}
            loading='lazy'
          />
          <span className='group-hover:bg-black bg-primary-600 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded'>
            {t(article.topic)}
          </span>
          <h2 className='my-2 text-2xl font-bold tracking-tight text-white'>{t(article.title)}</h2>
          <p className='mb-4 font-light text-white'>{t(article.shortDescription)}</p>
          <div className='flex items-center space-x-4'>
            <div className='font-medium text-primary-500 group-hover:text-white'>
              <div>{article.author}</div>
              <div className='text-sm font-normal text-white'>{article.date}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
