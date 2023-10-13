import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Container from '../components/container'
import Newsletter from '../components/newsletter'
import Faq from '../components/faq'
import Testimonials from '../components/testimonials'
import Blog from '../components/blog'
import { allArticles } from '../api/articles'
import Services from '../components/services'
import Partners from '../components/partners'
import Usp from '../components/usp'
import ProjectGallery from '../components/projectGallery'
import { usps } from '../api/usps'
import { partners } from '../api/partners'
import { services } from '../api/services'
import { testimonials } from '../api/testimonials'
import { faqs } from '../api/faqs'
import { InvertedButton } from '../components/button'
import { useTranslate } from '../hooks/useTranslate'
import { allProjects } from '../api/projects'

export default function Home() {
  const { t } = useTranslate()
  return (
    <Layout>
      <Hero />
      <div className='w-full bg-white'>
        <Container>
          <Usp usps={usps} />
          <Partners partners={partners} />
          <Services services={services} />
          <ProjectGallery
            label={t('projects.gallery.label')}
            title={t('projects.gallery.title')}
            description={t('projects.gallery.description')}
            projects={allProjects}
          />
          <div className='mt-10 justify-center flex'>
            <InvertedButton link='/projects' message={t('projects.button')} />
          </div>
          <Testimonials testimonials={testimonials} />
          <Newsletter />
          <Blog articles={allArticles.slice(0, 3)} />
          <Faq faqs={faqs} />
        </Container>
      </div>
    </Layout>
  )
}
