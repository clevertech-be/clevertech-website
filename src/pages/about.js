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
import { socialProofs } from '../api/socialProofs'

export default function AboutUs() {
  return (
    <Layout>
      <div className='bg-white text-black'>
        <Heading
          title='about.heading.title'
          description='about.heading.description'
          label='about.heading.label'
          link='/services'
          cta='about.heading.cta'
          image='/images/about.png'
          cardLabel='about.card.label'
          cardTitle='about.card.title'
          cardDescription='about.card.description'
        />
        <SocialProof socialProofs={socialProofs} />
        <Container>
          <Team team={team} />
          <Partners partners={partners} />
          <SimpleGallery
            title={'about.gallery.title'}
            description={'about.gallery.description'}
            images={[
              '/images/about-gallery-2.png',
              '/images/about-gallery-3.png',
              '/images/about-gallery-4.png',
              '/images/about-gallery-6.png',
            ]}
          />
          <Faq faqs={faqs} />
        </Container>
      </div>
    </Layout>
  )
}
