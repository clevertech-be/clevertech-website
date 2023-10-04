import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout'
import { useTranslate } from '../../hooks/useTranslate'
import { useRouter } from 'next/router'
import { allArticles } from '../../api/articles'
import Container from '../../components/container'
import { InvertedButton } from '../../components/button'
import Image from 'next/image'
import ArticleCard from '../../components/card/article'

export default function ArticleDetail() {
  const router = useRouter()
  const { t } = useTranslate()
  const [article, setArticle] = useState()

  useEffect(() => {
    if (router.query.slug?.length > 0) {
      setArticle(allArticles.find((item) => item.name === router.query.slug))
    }
  }, [router.query])

  return (
    <Layout>
      {article && (
        <div className='bg-white w-full'>
          <Container>
            <div className='max-w-4xl text-base text-black items-start justify-between flex flex-col gap-4 lg:gap-10'>
              <div className='rounded-xl h-[240px] md:h-[420px] lg:h-[340px] w-full relative'>
                <Image
                  loading='lazy'
                  className='rounded-xl'
                  fill
                  alt='Article illustration'
                  src={article.image}
                />
              </div>
              <div className='flex flex-col gap-4 items-start justify-between'>
                <div className='text-primary-600 font-bold'>{t(article.topic)}</div>
                <div className='font-bold text-2xl lg:text-4xl'>{article.title}</div>
                <div className='flex flex-row gap-2 items-center  justify-between'>
                  <div className='text-primary-600 text-sm font-bold flex flex-row gap-2'>
                    <Image
                      loading='lazy'
                      width={20}
                      height={20}
                      alt='Location phone illustration'
                      src={'/icons/location.svg'}
                    />
                    {article.location}
                  </div>
                  <div className='text-gray-400 text-xs'>
                    {article.date} - {article.author}
                  </div>
                </div>
              </div>
              <div className='font-bold text-base'>{article.description}</div>
              <div className='text-base'>
                {article.text.split('\n\n').map((paragraph, index) => (
                  <p key={`p-${index}`} className='py-2'>
                    {paragraph
                      .split('\n')
                      .reduce((total, line) => [total, <br key={`br-${index}`} />, line])}
                  </p>
                ))}
              </div>
            </div>
          </Container>
          <div className='text-black w-full py-20'>
            <div className='p-6 max-w-screen-xl mx-auto flex flex-col gap-14 items-center justify-between'>
              <div className='flex flex-col md:flex-row gap-3 justify-between items-start md:items-center w-full'>
                <div className='text-2xl sm:text-3xl font-bold leading-tight'>
                  {t('home.blog.title')}
                </div>
                <InvertedButton message={t('home.blog.button')} link='/blog' />
              </div>
              <div className='w-full grid grid-flow-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {allArticles.slice(0, 3).map((article) => (
                  <ArticleCard key={article.name} article={article} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}
