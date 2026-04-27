import { ArrowIcon } from './icons'

export default function CTA() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden" style={{ backgroundColor: '#1E293B' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-3xl opacity-15"
          style={{ background: 'radial-gradient(ellipse, #636b2f 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <p className="text-xs font-bold tracking-widest uppercase mb-6" style={{ color: '#636b2f' }}>
          Get In Touch
        </p>
        <h2
          className="font-bold tracking-tight leading-tight mb-6"
          style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)', color: '#E2E8F0' }}
        >
          Ready to build something
          <br />
          <span style={{ color: '#636b2f' }}>exceptional?</span>
        </h2>
        <p className="text-lg mb-10 max-w-xl mx-auto leading-relaxed" style={{ color: 'rgba(226,232,240,0.55)' }}>
          Let's talk about your project. We'll help you define the right strategy and build the technology to make it happen.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:info@vertex-labs.org"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold transition-opacity hover:opacity-85"
            style={{ backgroundColor: '#636b2f', color: '#0F172A' }}
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
