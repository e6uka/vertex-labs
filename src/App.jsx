import { useState, useEffect, useCallback } from 'react'

import Nav from './components/Nav'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import Why from './components/Why'
import Process from './components/Process'
import CTA from './components/CTA'
import Footer from './components/Footer'

import AboutUs from './components/AboutUs'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'
import { Analytics } from '@vercel/analytics/react'

function getPageFromPath() {
  const path = window.location.pathname
  if (path === '/about') return 'about'
  if (path === '/privacy') return 'privacy'
  if (path === '/terms') return 'terms'
  return 'home'
}

export default function App() {
  const [page, setPage] = useState(getPageFromPath)

  const navigate = useCallback((target) => {
    window.history.pushState({}, '', target === 'home' ? '/' : `/${target}`)
    setPage(target)
  }, [])

  useEffect(() => {
    const onPop = () => setPage(getPageFromPath())
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [page])

  let content
  if (page === 'about') content = <AboutUs onNavigate={navigate} />
  else if (page === 'privacy') content = <PrivacyPolicy onNavigate={navigate} />
  else if (page === 'terms') content = <TermsOfService onNavigate={navigate} />
  else content = (
    <div className="font-sans antialiased">
      <Nav />
      <Hero />
      <Stats />
      <Services />
      <Why />
      <Process />
      <CTA />
      <Footer onNavigate={navigate} />
    </div>
  )

  return (
    <>
      {content}
      <Analytics />
    </>
  )
}