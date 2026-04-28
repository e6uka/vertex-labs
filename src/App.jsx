import { useState, useEffect, useCallback } from 'react'

const SEO = {
  home: {
    title: 'Vertex Labs | Cloud Optimization & Software Engineering',
    description: 'Vertex Labs Ltd helps enterprises optimize cloud infrastructure, build powerful software, and transform systems for the digital age. Cloud optimization, software development & system engineering.',
    canonical: 'https://vertex-labs.org/',
  },
  about: {
    title: 'About Us | Vertex Labs',
    description: 'Learn how Vertex Labs was founded and why we believe every great enterprise deserves systems built for the problems they actually need to solve.',
    canonical: 'https://vertex-labs.org/about',
  },
  privacy: {
    title: 'Privacy Policy | Vertex Labs',
    description: "Read Vertex Labs Ltd's privacy policy to understand how we collect, use, and protect your personal information.",
    canonical: 'https://vertex-labs.org/privacy',
  },
  terms: {
    title: 'Terms of Service | Vertex Labs',
    description: 'Read the Terms of Service governing your use of Vertex Labs Ltd products and services.',
    canonical: 'https://vertex-labs.org/terms',
  },
}

function applyPageSEO(page) {
  const seo = SEO[page] || SEO.home
  document.title = seo.title

  const setMeta = (sel, val) => {
    const el = document.querySelector(sel)
    if (el) el.setAttribute('content', val)
  }
  const setLink = (sel, val) => {
    const el = document.querySelector(sel)
    if (el) el.setAttribute('href', val)
  }

  setMeta('meta[name="description"]', seo.description)
  setLink('link[rel="canonical"]', seo.canonical)
  setMeta('meta[property="og:title"]', seo.title)
  setMeta('meta[property="og:description"]', seo.description)
  setMeta('meta[property="og:url"]', seo.canonical)
  setMeta('meta[name="twitter:title"]', seo.title)
  setMeta('meta[name="twitter:description"]', seo.description)
}

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
import { SpeedInsights } from '@vercel/speed-insights/react'

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
    applyPageSEO(page)
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
      <SpeedInsights />
    </>
  )
}