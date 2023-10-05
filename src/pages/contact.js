import React from 'react'
import Layout from '../components/layout'
import Testimonials from '../components/testimonials'
import Faq from '../components/faq'
import Contact from '../components/contact'
import injected from '../injected.json'
import Container from '../components/container'
import Newsletter from '../components/newsletter'
import Heading from '../components/heading'

export default function ContactUs() {
  return (
    <Layout>
      <Heading />
      <div className='bg-white text-black'>
        <Container>
          <Contact />
          <Testimonials testimonials={injected.testimonials} />
          <Newsletter />
          <Faq faqs={injected.faqs} />
        </Container>
      </div>
    </Layout>
  )
}
