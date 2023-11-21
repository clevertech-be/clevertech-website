import React from 'react'
import Layout from '../container/layout'
import injected from '../injected.json'
import CTA from '../components/cta'
import Button from '../components/button'
import { useTranslate } from '../hooks/useTranslate'
import Link from 'next/link'
import Image from 'next/image'

export default function Blog() {
  const { t } = useTranslate()
  return (
    <Layout>
      <div className='w-full flex flex-row gap-10 justify-between text-start items-center text-white rounded-xl border-2 border-white/50 font-bold text-2xl'>
        <h1 className='border-r-2 border-white/50 p-5'>Our latest Articles</h1>
        <p className='p-5'>
          We’ve worked with a wide range of businesses, from startups to enterprises. We are
          confident that we can help you achieve your goals.
        </p>
      </div>
      <div className='gap-10 my-8 grid grid-cols-2'>
        {injected.articles.map((article, index) => (
          <Link
            key={index}
            href={article.link}
            className='text-white font-bold flex flex-col gap-4'
          >
            <Image
              loading='lazy'
              width={900}
              height={300}
              src={article.image}
              className='rounded-xl h-96 object-cover'
              alt='article illustration'
            />
            <div className='text-white text-base flex flex-col gap-2'>
              <p className='text-primary-500 text-xs'>November 3, 2023</p>
              <h2 className='font-extrabold text-lg'>{t(article.name)}</h2>
            </div>
          </Link>
        ))}
      </div>
      <CTA title='Ready to get started?' description='Get in touch or create an account.'>
        <Button className='w-full' link='/contact' primary={true} message='Contact Us' />
      </CTA>
    </Layout>
  )
}
