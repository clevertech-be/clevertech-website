import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import injected from '../injected.json'
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
import SimpleGallery from '../components/simpleGallery'

export default function Home() {
  return (
    <Layout>
      <Hero featured={injected.featured} />
      <div className='w-full bg-white'>
        <Container>
          <Usp usps={injected.usps} />
          <Partners partners={injected.partners} />
          <Services services={injected.services} />
          <Pricing pricing={injected.pricing} />
          <SimpleGallery />
          <Testimonials testimonials={injected.testimonials} />
          <Newsletter />
          <Blog articles={allArticles.slice(0, 3)} />
          <Faq faqs={injected.faqs} />
        </Container>
      </div>
    </Layout>
  )
}
