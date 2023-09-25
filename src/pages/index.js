import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Team from '../components/team'
import SimpleGallery from '../components/simpleGallery'
import Heading from '../components/heading'
import CTA from '../components/cta'
import Testimonials from '../components/testimonials'
import Blog from '../components/blog'
import Faq from '../components/faq'
import Pricing from '../components/pricing'
import Contact from '../components/contact'
import Featured from '../components/featured'
import FeatureList from '../components/featureList'
import Newsletter from '../components/newsletter'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Featured />
      <Heading />
      <SimpleGallery />
      <CTA />
      <FeatureList />
      <Pricing />
      <Newsletter />
      <Team />
      <Blog />
      <Testimonials />
      <Contact />
      <Faq />
    </Layout>
  )
}
