import React from 'react'
import Layout from '../components/layout'
import Container from '../components/container'
import Newsletter from '../components/newsletter'
import ProjectGallery from '../components/projectGallery'
import Heading from '../components/heading'

export default function Projects() {
  return (
    <Layout>
      <Heading />
      <div className='w-full bg-white'>
        <Container>
          <ProjectGallery />
          <Newsletter />
        </Container>
      </div>
    </Layout>
  )
}
