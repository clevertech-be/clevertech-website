import React from 'react'
import SEO from './seo'
import Footer from '../components/footer'
import Header from '../components/header'
import CookieBanner from '../components/banners/cookie'
import Container from './container'

export default function Layout({ children }) {
  return (
    <>
      <main>
        <SEO />
        <CookieBanner />
        <Header />
        <Container>{children}</Container>
        <Footer />
      </main>
    </>
  )
}
