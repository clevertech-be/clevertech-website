import React from 'react'
import Layout from '../components/layout'
import Faq from '../components/faq'
import injected from '../injected.json'
import Container from '../components/container'
import InfoBox from '../components/infoBox'
import Button from '../components/button'
import { useTranslate } from '../hooks/useTranslate'
import Heading from '../components/heading'
import SimpleGallery from '../components/simpleGallery'
import SocialProof from '../components/socialProof'
import Team from '../components/team'
import Partners from '../components/partners'

export default function AboutUs() {
  const { t } = useTranslate()
  return (
    <Layout>
      <Container>
        <Heading />
        <Partners partners={injected.partners} />
        <SimpleGallery />
      </Container>
      <div>
        <SocialProof />
      </div>
      <Container>
        <Team team={injected.team} />
        <InfoBox title={t('appointment.title')} description={t('appointment.description')}>
          <Button message={t('appointment.button')} link={'/'} />
        </InfoBox>
        <Faq faqs={injected.faqs} />
      </Container>
    </Layout>
  )
}
