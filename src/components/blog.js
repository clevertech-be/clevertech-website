import { useTranslate } from '../hooks/useTranslate'
import ArticleCard from './card/article'

export default function Blog({ articles }) {
  const { t } = useTranslate()
  return (
    <section className=''>
      <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
        <div className='mx-auto max-w-screen-sm text-center mb-8 lg:mb-16'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-black'>
            {t('home.blog.title')}
          </h2>
          <p className='font-light text-black/80 sm:text-xl '>{t('home.blog.description')} </p>
        </div>
        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {articles.map((article, index) => (
            <ArticleCard article={article} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
