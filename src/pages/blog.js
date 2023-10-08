import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'
import { useTranslate } from '../hooks/useTranslate'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { allArticles, filters } from '../api/articles'
import Container from '../components/container'
import ArticleCard from '../components/card/article'
import Heading from '../components/heading'

export default function Blog() {
  const router = useRouter()
  const { t } = useTranslate()
  const [articles, setArticles] = useState(allArticles)
  const [filter, setFilter] = useState(filters[0])

  useEffect(() => {
    if (router.query.filter?.length > 0) {
      setFilter(router.query.filter)
      const filter = allArticles.find((item) => item.topic === router.query.filter)
      if (router.query.filter === filters[0]) {
        return setArticles(allArticles)
      }
      setArticles(allArticles.filter((item) => item.topic === filter?.topic) || [])
    }
  }, [router.query])

  return (
    <Layout>
      <Heading
        title='blog.heading.title'
        description='blog.heading.description'
        label='blog.heading.label'
        link='/about'
        cta='blog.heading.cta'
        image='/images/blog.png'
        cardLabel='blog.card.label'
        cardTitle='blog.card.title'
        cardDescription='blog.card.description'
      />
      <div className='bg-white w-full'>
        <Container>
          <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6'>
            <div className='flex flex-col items-start justify-between gap-4'>
              <p className='font-bold text-primary-600'>{t('blog.label')} </p>
              <div className='text-2xl xl:text-4xl font-bold'>{t('blog.title')}</div>
              <div className='text-base font-normal max-w-2xl'>{t('blog.description')}</div>
              <div className='flex flex-row text-primary-500 mt-10'>
                {filters.map((item, index) => (
                  <Link key={index} href={`/blog?filter=${item}`}>
                    <div
                      className={`transition-all cursor-pointer text-base pr-5 mb-5 text-black md:m-0 ${
                        item === filter && 'font-bold text-primary-500'
                      } border-b-2 py-2 border-transparent hover:border-primary-600 transition-all ease-in-out duration-300`}
                    >
                      {t(item)}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className='items-center w-full'>
              <div className='grid grid-flow-dense grid-cols-1 md:grid-cols-3 gap-4'>
                {articles.map((article) => (
                  <ArticleCard article={article} key={article.name} />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  )
}
