import React from 'react'
import Layout from '../components/layout'
import Container from '../components/container'
import injected from '../injected.json'
import Heading from '../components/heading'
import Faq from '../components/faq'
import Pricing from '../components/pricing'
import Testimonials from '../components/testimonials'
import Partners from '../components/partners'
import FeatureList from '../components/featureList'

export default function Services() {
  return (
    <Layout>
      <Heading />
      <div className='w-full bg-white'>
        <Container>
          <FeatureList />
          <Pricing pricing={injected.pricing} />
          <Testimonials testimonials={injected.testimonials} />
          <Partners partners={injected.partners} />
          <Faq faqs={injected.faqs} />
        </Container>
      </div>
    </Layout>
  )
}
