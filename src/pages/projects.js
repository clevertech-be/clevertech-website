import React from 'react'
import Layout from '../components/layout'
import Container from '../components/container'
import Newsletter from '../components/newsletter'
import ProjectGallery from '../components/projectGallery'
import Heading from '../components/heading'
import { useTranslate } from '../hooks/useTranslate'
import { allProjects } from '../api/projects'

export default function Projects() {
  const { t } = useTranslate()
  return (
    <Layout>
      <Heading
        title='projects.heading.title'
        description='projects.heading.description'
        label='projects.heading.label'
        link='/about'
        cta='projects.heading.cta'
        image='/images/projects.png'
        cardLabel='projects.card.label'
        cardTitle='projects.card.title'
        cardDescription='projects.card.description'
      />
      <div className='w-full bg-white'>
        <Container>
          <ProjectGallery
            label={t('projects.gallery.label')}
            title={t('projects.gallery.title')}
            description={t('projects.gallery.description')}
            projects={allProjects}
          />
          <Newsletter />
        </Container>
      </div>
    </Layout>
  )
}
