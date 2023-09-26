import Link from 'next/link'
import { useTranslate } from '../../hooks/useTranslate'

export default function ArticleCard({ article }) {
  const { t } = useTranslate()
  return (
    <article className='p-4 bg-primary-600 rounded-lg shadow-md'>
      <Link href={article.link}>
        <img className='mb-5 rounded-lg' src={article.image} alt='office laptop working' />
      </Link>
      <span className='bg-primary-900 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded '>
        {t(article.topic)}
      </span>
      <h2 className='my-2 text-2xl font-bold tracking-tight text-white'>{t(article.title)}</h2>
      <p className='mb-4 font-light text-white/80'>{t(article.description)}</p>
      <div className='flex items-center space-x-4'>
        <div className='font-medium text-white'>
          <div>{article.author}</div>
          <div className='text-sm font-normal text-white/80'>{article.date}</div>
        </div>
      </div>
    </article>
  )
}
