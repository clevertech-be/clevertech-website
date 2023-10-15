import React from 'react'
import Layout from '../components/layout'
import Faq from '../components/faq'
import Container from '../components/container'
import Heading from '../components/heading'
import SimpleGallery from '../components/simpleGallery'
import Team from '../components/team'
import { team } from '../api/team'
import { faqs } from '../api/faqs'

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
        <Container>
          <Team team={team} />
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
