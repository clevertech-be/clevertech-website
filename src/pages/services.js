import React from 'react'
import Layout from '../components/layout'
import Container from '../components/container'
import Heading from '../components/heading'
import Faq from '../components/faq'
import Pricing from '../components/pricing'
import Testimonials from '../components/testimonials'
import Partners from '../components/partners'
import FeatureList from '../components/featureList'
import { faqs } from '../api/faqs'
import { partners } from '../api/partners'
import { testimonials } from '../api/testimonials'
import { pricing } from '../api/pricing'
import { services } from '../api/services'

export default function Services() {
  return (
    <Layout>
      <Heading
        title='services.heading.title'
        description='services.heading.description'
        label='services.heading.label'
        link='/about'
        cta='services.heading.cta'
        image='/images/services.png'
        cardLabel='services.card.label'
        cardTitle='services.card.title'
        cardDescription='services.card.description'
      />
      <div className='w-full bg-white'>
        <Container>
          <FeatureList services={services} />
          <Pricing pricing={pricing} />
          <Testimonials testimonials={testimonials} />
          <Partners partners={partners} />
          <Faq faqs={faqs} />
        </Container>
      </div>
    </Layout>
  )
}
