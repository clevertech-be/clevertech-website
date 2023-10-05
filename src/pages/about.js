import React from 'react'
import Layout from '../components/layout'
import Faq from '../components/faq'
import injected from '../injected.json'
import Container from '../components/container'
import Heading from '../components/heading'
import SimpleGallery from '../components/simpleGallery'
import SocialProof from '../components/socialProof'
import Team from '../components/team'
import Partners from '../components/partners'

export default function AboutUs() {
  return (
    <Layout>
      <div className='bg-white text-black'>
        <Heading />
        <Container>
          <Partners partners={injected.partners} />
          <SimpleGallery />
        </Container>
        <div>
          <SocialProof />
        </div>
        <Container>
          <Team team={injected.team} />
          <Faq faqs={injected.faqs} />
        </Container>
      </div>
    </Layout>
  )
}
