import React from 'react'
import Layout from '../components/layout'
import Testimonials from '../components/testimonials'
import Faq from '../components/faq'
import Contact from '../components/contact'
import injected from '../injected.json'
import Container from '../components/container'
import InfoBox from '../components/infoBox'
import Button from '../components/button'
import { useTranslate } from '../hooks/useTranslate'

export default function ContactUs() {
  const { t } = useTranslate()
  return (
    <Layout>
      <Container>
        <Contact />
        <Testimonials testimonials={injected.testimonials} />
        <InfoBox title={t('appointment.title')} description={t('appointment.description')}>
          <Button message={t('appointment.button')} link={'/'} />
        </InfoBox>
        <Faq faqs={injected.faqs} />
      </Container>
    </Layout>
  )
}
