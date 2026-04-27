import { CloudIcon, CodeIcon, SystemIcon, CheckIcon, ArrowIcon } from './icons'

const SERVICES = [
  {
    icon: CloudIcon,
    title: 'Cloud Optimization',
    description: 'Slash costs, boost performance, and scale with confidence using modern cloud infrastructure strategies tailored to your business.',
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
    description: 'Custom software engineered for your most complex challenges — from web and mobile applications to enterprise-grade platforms.',
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
    description: 'Transform legacy systems into competitive advantages through architecture modernization, performance tuning, and deep integration.',
    features: [
      'System Architecture Design',
      'Performance Tuning',
      'Legacy Modernization',
      'System Integration',
      'Security Hardening',
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-32" style={{ backgroundColor: '#0F172A' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-20">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#636b2f' }}>
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6" style={{ color: '#E2E8F0' }}>
            End-to-end solutions for modern enterprises.
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: 'rgba(226,232,240,0.55)' }}>
            From the code to the cloud, we build and optimize the technology that drives your business forward.
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
                <Icon className="w-6 h-6" style={{ color: '#636b2f' }} />
              </div>

              <h3 className="text-xl font-bold mb-3" style={{ color: '#E2E8F0' }}>{title}</h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(226,232,240,0.55)' }}>{description}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: 'rgba(226,232,240,0.65)' }}>
                    <CheckIcon className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#636b2f' }} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-3"
                style={{ color: '#636b2f' }}
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
