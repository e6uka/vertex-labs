const SERVICE_LINKS = ['Cloud Optimization', 'Software Development', 'Consulting']
const COMPANY_LINKS = ['Our Process', 'Contact']
// add case studies to company links when we have them

export default function Footer({ onNavigate }) {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t" style={{ backgroundColor: '#0F172A', borderColor: '#1E293B' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img src="/icon-white.svg" alt="Vertex Labs" className="w-8 h-8 rounded-lg" />
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
              {SERVICE_LINKS.map((s) => (
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
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-sm transition-colors text-left"
                  style={{ color: 'rgba(226,232,240,0.45)' }}
                  onMouseEnter={e => e.target.style.color = '#E2E8F0'}
                  onMouseLeave={e => e.target.style.color = 'rgba(226,232,240,0.45)'}
                >
                  About Us
                </button>
              </li>
              {COMPANY_LINKS.map((s) => (
                <li key={s}>
                  <a
                    href={s === 'Contact' ? '#contact' : '#'}
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
            © {year} Vertex Labs Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('privacy')}
              className="text-xs transition-colors"
              style={{ color: 'rgba(226,232,240,0.3)' }}
              onMouseEnter={e => e.target.style.color = 'rgba(226,232,240,0.6)'}
              onMouseLeave={e => e.target.style.color = 'rgba(226,232,240,0.3)'}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onNavigate('terms')}
              className="text-xs transition-colors"
              style={{ color: 'rgba(226,232,240,0.3)' }}
              onMouseEnter={e => e.target.style.color = 'rgba(226,232,240,0.6)'}
              onMouseLeave={e => e.target.style.color = 'rgba(226,232,240,0.3)'}
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
