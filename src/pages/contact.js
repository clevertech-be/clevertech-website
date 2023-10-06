import React from 'react'
import Layout from '../components/layout'
import Testimonials from '../components/testimonials'
import Faq from '../components/faq'
import Contact from '../components/contact'
import Container from '../components/container'
import Newsletter from '../components/newsletter'
import Heading from '../components/heading'
import { faqs } from '../api/faqs'
import { testimonials } from '../api/testimonials'

export default function ContactUs() {
  return (
    <Layout>
      <Heading />
      <div className='bg-white text-black'>
        <Container>
          <Contact />
          <Testimonials testimonials={testimonials} />
          <Newsletter />
          <Faq faqs={faqs} />
        </Container>
      </div>
    </Layout>
  )
}
