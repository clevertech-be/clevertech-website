import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import SimpleGallery from '../components/simpleGallery'
import Heading from '../components/heading'
import Partners from '../components/partners'
import Testimonials from '../components/testimonials'
import Blog from '../components/blog'
import Faq from '../components/faq'
import Pricing from '../components/pricing'
import Contact from '../components/contact'
import Usp from '../components/usp'
import Services from '../components/services'
import Newsletter from '../components/newsletter'
import injected from '../injected.json'

export default function Home() {
  return (
    <Layout>
      <Hero featured={injected.featured} />
      <Usp usps={injected.usps} />
      <Heading />
      <Newsletter />
      <SimpleGallery />
      <Partners partners={injected.partners} />
      <Services services={injected.services} />
      <Pricing pricing={injected.pricing} />
      <Blog articles={injected.articles} />
      <Newsletter />
      <Testimonials testimonials={injected.testimonials} />
      <Contact />
      <Faq faqs={injected.faqs} />
    </Layout>
  )
}
