import React from 'react'
import Layout from '../container/layout'
import Hero from '../components/hero'
import injected from '../injected.json'
import Services from '../components/services'
import Projects from '../components/projects'
import Blog from '../components/blog'
import Teams from '../components/teams'
import Testimonials from '../components/testimonials'
import CTA from '../components/cta'
import Button from '../components/button'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Services services={injected.services} />
      <Projects projects={injected.projects} />
      <Teams teams={injected.teams} />
      <Blog articles={injected.articles} />
      <Testimonials testimonials={injected.testimonials} />
      <CTA title='Ready to get started?' description='Get in touch or create an account.'>
        <Button className='w-full' link='/contact' primary={true} message='Contact Us' />
      </CTA>
    </Layout>
  )
}
