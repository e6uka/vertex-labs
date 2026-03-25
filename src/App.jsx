import { useState, useEffect } from 'react'

const CloudIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
  </svg>
)

const CodeIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  </svg>
)

const SystemIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
  </svg>
)

const CheckIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const ArrowIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
  </svg>
)

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    ['Services', '#services'],
    ['About', '#why'],
    ['Process', '#process'],
    ['Contact', '#contact'],
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'backdrop-blur-xl shadow-lg border-b'
          : 'bg-transparent'
        }`}
      style={scrolled ? { backgroundColor: 'rgba(15,23,42,0.92)', borderColor: '#1E293B' } : {}}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: '#4287f5' }}
            >
              <span className="font-bold text-sm" style={{ color: '#0F172A' }}>V</span>
            </div>
            <span className="font-semibold tracking-tight" style={{ color: '#E2E8F0' }}>Vertex Labs</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-sm font-medium transition-colors hover:opacity-100"
                style={{ color: 'rgba(226,232,240,0.65)' }}
                onMouseEnter={e => e.target.style.color = '#E2E8F0'}
                onMouseLeave={e => e.target.style.color = 'rgba(226,232,240,0.65)'}
              >
                {label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-1.5 text-sm px-5 py-2.5 rounded-full font-semibold transition-opacity hover:opacity-85"
            style={{ backgroundColor: '#4287f5', color: '#0F172A' }}
          >
            Get Started
          </a>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="block w-5 h-0.5" style={{ backgroundColor: '#E2E8F0' }} />
            <span className="block w-5 h-0.5" style={{ backgroundColor: '#E2E8F0' }} />
            <span className="block w-5 h-0.5" style={{ backgroundColor: '#E2E8F0' }} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-6 pt-4 border-t" style={{ borderColor: '#1E293B' }}>
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="block py-3 text-sm font-medium"
                style={{ color: 'rgba(226,232,240,0.65)' }}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex mt-2 text-sm px-5 py-2.5 rounded-full font-semibold"
              style={{ backgroundColor: '#4287f5', color: '#0F172A' }}
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16 relative overflow-hidden"
      style={{ backgroundColor: '#0F172A' }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(ellipse, #4287f5 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div
          className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full mb-8 tracking-widest uppercase border"
          style={{ backgroundColor: 'rgba(163,255,18,0.08)', borderColor: 'rgba(163,255,18,0.2)', color: '#4287f5' }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: '#4287f5' }} />
          Cloud · Software · Systems
        </div>

        <h1
          className="font-extrabold tracking-tight leading-none mb-6"
          style={{ fontSize: 'clamp(2.8rem, 8vw, 5.5rem)', lineHeight: 1.05, color: '#E2E8F0' }}
        >
          Engineering Tomorrow's
          <br />
          <span style={{ color: '#4287f5' }}>Technology.</span>
        </h1>

        <p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: 'rgba(226,232,240,0.6)' }}
        >
          Vertex Labs &amp; Services Ltd helps enterprises optimize cloud infrastructure,
          build powerful software, and transform their systems for the digital age.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold transition-opacity hover:opacity-85"
            style={{ backgroundColor: '#4287f5', color: '#0F172A' }}
          >
            Start a Project <ArrowIcon className="w-4 h-4" />
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-semibold transition-colors border"
            style={{ borderColor: 'rgba(226,232,240,0.2)', color: 'rgba(226,232,240,0.7)' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(226,232,240,0.5)'; e.currentTarget.style.color = '#E2E8F0' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(226,232,240,0.2)'; e.currentTarget.style.color = 'rgba(226,232,240,0.7)' }}
          >
            Explore Services
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ color: 'rgba(226,232,240,0.3)' }}>
        <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
        <div className="w-px h-8" style={{ background: 'linear-gradient(to bottom, rgba(226,232,240,0.3), transparent)' }} />
      </div>
    </section>
  )
}

const STATS = [
  { value: '10+', label: 'Years of Experience' },
  { value: '200+', label: 'Projects Delivered' },
  { value: '50+', label: 'Expert Engineers' },
  { value: '98%', label: 'Client Satisfaction' },
]

function Stats() {
  return (
    <section className="py-20 border-y" style={{ backgroundColor: '#1E293B', borderColor: '#0F172A' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0" style={{ '--divide-color': '#0F172A' }}>
          {STATS.map(({ value, label }, i) => (
            <div
              key={i}
              className={`text-center md:px-8 ${i > 0 ? 'md:border-l' : ''}`}
              style={i > 0 ? { borderColor: 'rgba(15,23,42,0.8)' } : {}}
            >
              <div className="text-4xl md:text-5xl font-bold tracking-tight mb-2" style={{ color: '#4287f5' }}>
                {value}
              </div>
              <div className="text-sm font-medium" style={{ color: 'rgba(226,232,240,0.5)' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const SERVICES = [
  {
    icon: CloudIcon,
    title: 'Cloud Optimization',
    description:
      'Slash costs, boost performance, and scale with confidence using modern cloud infrastructure strategies tailored to your business.',
    features: [
      'Cloud Migration & Strategy',
      'Infrastructure Management',
      'Cost Optimization',
      'Cloud-Native Development',
      'Multi-Cloud Architecture',
    ],
  },
  {
    icon: CodeIcon,
    title: 'Software Development',
    description:
      'Custom software engineered for your most complex challenges — from web and mobile applications to enterprise-grade platforms.',
    features: [
      'Web & Mobile Applications',
      'Enterprise Systems',
      'API Development & Integration',
      'Quality Assurance & Testing',
      'DevOps & CI/CD Pipelines',
    ],
  },
  {
    icon: SystemIcon,
    title: 'System Optimization',
    description:
      'Transform legacy systems into competitive advantages through architecture modernization, performance tuning, and deep integration.',
    features: [
      'System Architecture Design',
      'Performance Tuning',
      'Legacy Modernization',
      'System Integration',
      'Security Hardening',
    ],
  },
]

function Services() {
  return (
    <section id="services" className="py-32" style={{ backgroundColor: '#0F172A' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-20">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#4287f5' }}>
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6" style={{ color: '#E2E8F0' }}>
            End-to-end technology solutions for modern enterprises.
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: 'rgba(226,232,240,0.55)' }}>
            From the cloud to the code, we build and optimize the technology that drives your business forward.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map(({ icon: Icon, title, description, features }) => (
            <div
              key={title}
              className="group rounded-3xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 border"
              style={{ backgroundColor: '#1E293B', borderColor: 'rgba(163,255,18,0.08)' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(163,255,18,0.25)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(163,255,18,0.08)'}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shrink-0"
                style={{ backgroundColor: 'rgba(163,255,18,0.1)' }}
              >
                <Icon className="w-6 h-6" style={{ color: '#4287f5' }} />
              </div>

              <h3 className="text-xl font-bold mb-3" style={{ color: '#E2E8F0' }}>{title}</h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(226,232,240,0.55)' }}>{description}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: 'rgba(226,232,240,0.65)' }}>
                    <CheckIcon className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#4287f5' }} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-3"
                style={{ color: '#4287f5' }}
              >
                Learn more <ArrowIcon className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const WHY_FEATURES = [
  {
    title: 'Expert-Led Teams',
    desc: 'Our engineers bring deep domain expertise across cloud platforms, software architecture, and systems engineering — no generalists, only specialists.',
  },
  {
    title: 'Outcome-Driven',
    desc: 'We measure success by your results, not our deliverables. Every engagement is structured around measurable business outcomes.',
  },
  {
    title: 'Scalable by Design',
    desc: 'Every solution we build is architected to grow with your business. From startup to enterprise, our systems scale without breaking.',
  },
  {
    title: 'Long-Term Partnership',
    desc: "We don't disappear after delivery. We build lasting relationships, providing ongoing support, optimization, and continuous evolution.",
  },
]

function Why() {
  return (
    <section id="why" className="py-32" style={{ backgroundColor: '#1E293B' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-20">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#4287f5' }}>
            Why Vertex Labs
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6" style={{ color: '#E2E8F0' }}>
            We don't just deliver software.
            <br />
            <span style={{ color: 'rgba(226,232,240,0.35)' }}>We engineer outcomes.</span>
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: 'rgba(226,232,240,0.55)' }}>
            A technology partner you can rely on — not just for the project, but for the entire journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 rounded-3xl overflow-hidden border" style={{ borderColor: 'rgba(163,255,18,0.1)' }}>
          {WHY_FEATURES.map(({ title, desc }, i) => (
            <div
              key={title}
              className={`p-10 transition-colors ${i % 2 === 0 && i < WHY_FEATURES.length - 1
                  ? 'border-b md:border-b md:border-r'
                  : i < WHY_FEATURES.length - 2
                    ? 'border-b'
                    : i === WHY_FEATURES.length - 2
                      ? 'border-b md:border-b-0 md:border-r'
                      : ''
                }`}
              style={{ backgroundColor: '#0F172A', borderColor: 'rgba(163,255,18,0.1)' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#1E293B'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#0F172A'}
            >
              <h3 className="text-lg font-bold mb-3" style={{ color: '#E2E8F0' }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(226,232,240,0.55)' }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const STEPS = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We deeply understand your business, systems, and goals before recommending a single solution.',
  },
  {
    num: '02',
    title: 'Design',
    desc: 'Our architects craft a tailored solution — scalable, secure, and built for the long term.',
  },
  {
    num: '03',
    title: 'Build',
    desc: 'We engineer with precision using agile delivery, code review, and automated testing.',
  },
  {
    num: '04',
    title: 'Optimize',
    desc: 'Post-launch, we measure, learn, and continuously improve. Great software is never "done".',
  },
]

function Process() {
  return (
    <section id="process" className="py-32" style={{ backgroundColor: '#0F172A' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-20">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#4287f5' }}>
            How We Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6" style={{ color: '#E2E8F0' }}>
            A proven process for every engagement.
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: 'rgba(226,232,240,0.55)' }}>
            From first conversation to long-term partnership — here's how we deliver excellence every time.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-12 md:gap-8">
          {STEPS.map(({ num, title, desc }, i) => (
            <div key={num} className="relative">
              {i < STEPS.length - 1 && (
                <div
                  className="hidden md:block absolute top-7 left-[4.5rem] right-0 h-px"
                  style={{ background: 'linear-gradient(to right, rgba(163,255,18,0.2), transparent)' }}
                />
              )}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border"
                style={{ backgroundColor: '#1E293B', borderColor: 'rgba(163,255,18,0.15)' }}
              >
                <span className="text-lg font-bold" style={{ color: '#4287f5' }}>{num}</span>
              </div>
              <h3 className="text-lg font-bold mb-3" style={{ color: '#E2E8F0' }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(226,232,240,0.55)' }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden" style={{ backgroundColor: '#1E293B' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-3xl opacity-15"
          style={{ background: 'radial-gradient(ellipse, #4287f5 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <p className="text-xs font-bold tracking-widest uppercase mb-6" style={{ color: '#4287f5' }}>
          Get In Touch
        </p>
        <h2
          className="font-bold tracking-tight leading-tight mb-6"
          style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)', color: '#E2E8F0' }}
        >
          Ready to build something
          <br />
          <span style={{ color: '#4287f5' }}>exceptional?</span>
        </h2>
        <p className="text-lg mb-10 max-w-xl mx-auto leading-relaxed" style={{ color: 'rgba(226,232,240,0.55)' }}>
          Let's talk about your project. We'll help you define the right strategy and build the technology to make it happen.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:hello@vertexlabs.io"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold transition-opacity hover:opacity-85"
            style={{ backgroundColor: '#4287f5', color: '#0F172A' }}
          >
            Contact Us <ArrowIcon className="w-4 h-4" />
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center border px-8 py-4 rounded-full text-sm font-semibold transition-colors"
            style={{ borderColor: 'rgba(226,232,240,0.2)', color: 'rgba(226,232,240,0.6)' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(226,232,240,0.5)'; e.currentTarget.style.color = '#E2E8F0' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(226,232,240,0.2)'; e.currentTarget.style.color = 'rgba(226,232,240,0.6)' }}
          >
            View Our Services
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const year = new Date().getFullYear()
  const serviceLinks = ['Cloud Optimization', 'Software Development', 'System Optimization', 'Consulting']
  const companyLinks = ['About Us', 'Our Process', 'Case Studies', 'Contact']

  return (
    <footer className="border-t" style={{ backgroundColor: '#0F172A', borderColor: '#1E293B' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: '#4287f5' }}
              >
                <span className="font-bold text-sm" style={{ color: '#0F172A' }}>V</span>
              </div>
              <span className="font-semibold tracking-tight" style={{ color: '#E2E8F0' }}>Vertex Labs</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'rgba(226,232,240,0.45)' }}>
              Engineering tomorrow's technology, today. Cloud optimization, software development,
              and system modernization for enterprises worldwide.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-5" style={{ color: '#E2E8F0' }}>Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm transition-colors"
                    style={{ color: 'rgba(226,232,240,0.45)' }}
                    onMouseEnter={e => e.target.style.color = '#E2E8F0'}
                    onMouseLeave={e => e.target.style.color = 'rgba(226,232,240,0.45)'}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-5" style={{ color: '#E2E8F0' }}>Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    className="text-sm transition-colors"
                    style={{ color: 'rgba(226,232,240,0.45)' }}
                    onMouseEnter={e => e.target.style.color = '#E2E8F0'}
                    onMouseLeave={e => e.target.style.color = 'rgba(226,232,240,0.45)'}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: '#1E293B' }}>
          <p className="text-xs" style={{ color: 'rgba(226,232,240,0.3)' }}>
            © {year} Vertex Labs &amp; Services Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service'].map((l) => (
              <a
                key={l}
                href="#"
                className="text-xs transition-colors"
                style={{ color: 'rgba(226,232,240,0.3)' }}
                onMouseEnter={e => e.target.style.color = 'rgba(226,232,240,0.6)'}
                onMouseLeave={e => e.target.style.color = 'rgba(226,232,240,0.3)'}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="font-sans antialiased">
      <Nav />
      <Hero />
      <Stats />
      <Services />
      <Why />
      <Process />
      <CTA />
      <Footer />
    </div>
  )
}
