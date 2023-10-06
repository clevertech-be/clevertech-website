import React from 'react'
import Layout from '../components/layout'
import Faq from '../components/faq'
import Container from '../components/container'
import Heading from '../components/heading'
import SimpleGallery from '../components/simpleGallery'
import SocialProof from '../components/socialProof'
import Team from '../components/team'
import Partners from '../components/partners'
import { team } from '../api/team'
import { partners } from '../api/partners'
import { faqs } from '../api/faqs'

export default function AboutUs() {
  return (
    <Layout>
      <div className='bg-white text-black'>
        <Heading />
        <SocialProof />
        <Container>
          <Team team={team} />
          <Partners partners={partners} />
          <SimpleGallery />
          <Faq faqs={faqs} />
        </Container>
      </div>
    </Layout>
  )
}
