import { ArrowIcon } from './icons'

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16 relative overflow-hidden"
      style={{ backgroundColor: '#0F172A' }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(ellipse, #636b2f 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div
          className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full mb-8 tracking-widest uppercase border"
          style={{ backgroundColor: 'rgba(163,255,18,0.08)', borderColor: 'rgba(163,255,18,0.2)', color: '#636b2f' }}
        >
          Cloud · Software · Systems
        </div>

        <h1
          className="font-extrabold tracking-tight leading-none mb-6"
          style={{ fontSize: 'clamp(2.8rem, 8vw, 5.5rem)', lineHeight: 1.05, color: '#E2E8F0' }}
        >
          Engineering Tomorrow's
          <br />
          <span style={{ color: '#636b2f' }}>Technology.</span>
        </h1>

        <p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: 'rgba(226,232,240,0.6)' }}
        >
          Vertex Labs Ltd helps enterprises optimize cloud infrastructure,
          build powerful software, and transform their systems for the digital age.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold transition-opacity hover:opacity-85"
            style={{ backgroundColor: '#636b2f', color: '#0F172A' }}
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
