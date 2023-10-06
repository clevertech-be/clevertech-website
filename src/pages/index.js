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
import Pricing from '../components/pricing'
import ProjectGallery from '../components/projectGallery'
import { usps } from '../api/usps'
import { partners } from '../api/partners'
import { services } from '../api/services'
import { pricing } from '../api/pricing'
import { testimonials } from '../api/testimonials'
import { faqs } from '../api/faqs'

export default function Home() {
  return (
    <Layout>
      <Hero/>
      <div className='w-full bg-white'>
        <Container>
          <Usp usps={usps} />
          <Partners partners={partners} />
          <Services services={services} />
          <Pricing pricing={pricing} />
          <ProjectGallery />
          <Testimonials testimonials={testimonials} />
          <Newsletter />
          <Blog articles={allArticles.slice(0, 3)} />
          <Faq faqs={faqs} />
        </Container>
      </div>
    </Layout>
  )
}
