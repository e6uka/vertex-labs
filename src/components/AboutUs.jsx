import { ArrowIcon, BackArrowIcon } from './icons'

const VALUES = [
  {
    title: 'First Principles, Always',
    desc: 'We refuse to copy answers from somewhere else. Every engagement starts with a blank page and the right questions — not a template.',
  },
  {
    title: 'Depth Over Breadth',
    desc: "We'd rather be extraordinary at a few things than average at everything. We hire specialists, not generalists, and we stay in our lane deliberately.",
  },
  {
    title: 'Ownership Without Ego',
    desc: "We take full responsibility for outcomes — not just deliverables. When something is wrong, we say so. When something breaks, we fix it. No finger-pointing.",
  },
  {
    title: 'The Long Game',
    desc: "Quick wins that create long-term debt aren't wins. We build things that compound — systems that get faster, cheaper, and more capable over time.",
  },
]

export default function AboutUs({ onNavigate }) {
  return (
    <div className="min-h-screen font-sans antialiased" style={{ backgroundColor: '#0F172A', color: '#E2E8F0' }}>

      {/* Header */}
      <header
        className="border-b px-6 lg:px-8 py-4 flex items-center justify-between sticky top-0 z-50 backdrop-blur-xl"
        style={{ backgroundColor: 'rgba(15,23,42,0.92)', borderColor: '#1E293B' }}
      >
        <button onClick={() => onNavigate('home')} className="flex items-center gap-2.5">
          <img src="/icon-white.svg" alt="Vertex Labs" className="w-8 h-8 rounded-lg" />
          <span className="font-semibold tracking-tight" style={{ color: '#E2E8F0' }}>Vertex Labs</span>
        </button>
        <button
          onClick={() => onNavigate('home')}
          className="text-sm font-medium flex items-center gap-2"
          style={{ color: 'rgba(226,232,240,0.6)' }}
          onMouseEnter={e => e.currentTarget.style.color = '#E2E8F0'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(226,232,240,0.6)'}
        >
          <BackArrowIcon className="w-4 h-4" />
          Back to Home
        </button>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-24 px-6 lg:px-8">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-3xl opacity-10"
            style={{ background: 'radial-gradient(ellipse, #636b2f 0%, transparent 70%)' }}
          />
        </div>
        <div className="relative max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: '#636b2f' }}>
            Our Story
          </p>
          <h1
            className="font-extrabold tracking-tight leading-tight mb-8"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 4rem)', color: '#E2E8F0' }}
          >
            We built Vertex Labs because we were tired of watching great companies
            {' '}<span style={{ color: '#636b2f' }}>suffocate under bad systems.</span>
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: 'rgba(226,232,240,0.6)' }}>
            Not bad products. Not bad people. Just systems that were never designed
            for the problems they were actually being asked to solve.
          </p>
        </div>
      </section>

      {/* The Origin Story */}
      <section className="px-6 lg:px-8 pb-28" style={{ backgroundColor: '#0F172A' }}>
        <div className="max-w-3xl mx-auto space-y-10">

          <div className="border-l-2 pl-8 py-2" style={{ borderColor: '#636b2f' }}>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(226,232,240,0.75)' }}>
              Before Vertex Labs existed, our founders spent years inside enterprises — financial institutions,
              logistics firms, healthcare platforms — watching the same failure play out with different logos on the door.
            </p>
          </div>

          <p className="text-base leading-relaxed" style={{ color: 'rgba(226,232,240,0.65)' }}>
            A company would reach a certain scale and begin to crack. Deployments that once took minutes
            started taking hours. Infrastructure bills ballooned without explanation. Engineers spent their
            days fighting fires they hadn't started. Leaders made decisions based on dashboards that were,
            quietly, lying.
          </p>

          <p className="text-base leading-relaxed" style={{ color: 'rgba(226,232,240,0.65)' }}>
            The instinct — almost every time — was to buy more. More servers. More tooling. More headcount.
            Layer another solution on top of an undiagnosed problem and call it progress. We watched tens of
            millions of naira disappear into this cycle. We watched brilliant engineers burn out maintaining
            systems they hadn't designed and couldn't fully understand. We watched companies lose competitive
            ground not because the market shifted but because their own infrastructure made it impossible to move.
          </p>

          <div
            className="rounded-2xl p-8 border"
            style={{ backgroundColor: '#1E293B', borderColor: 'rgba(163,255,18,0.1)' }}
          >
            <p className="text-xl font-semibold leading-relaxed" style={{ color: '#E2E8F0' }}>
              "The problem was never the technology. It was that no one had ever stopped to ask
              whether the system was actually built for the problem it was supposed to solve."
            </p>
          </div>

          <p className="text-base leading-relaxed" style={{ color: 'rgba(226,232,240,0.65)' }}>
            That realization changed how we thought about engineering. Most systems aren't poorly built —
            they're correctly built for a problem that no longer exists. The company grew. The market shifted.
            The requirements changed. But the architecture didn't. And so the system, once an advantage,
            became a ceiling.
          </p>

          <p className="text-base leading-relaxed" style={{ color: 'rgba(226,232,240,0.65)' }}>
            We founded Vertex Labs with a single conviction: every system deserves to be understood before
            it's changed, and changed with the precision of someone who actually cares about what happens
            after they leave the room.
          </p>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="px-6 lg:px-8 py-28" style={{ backgroundColor: '#1E293B' }}>
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-20">
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#636b2f' }}>
              How We Think
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-6" style={{ color: '#E2E8F0' }}>
              We treat every problem as if it's
              the first time anyone has ever seen it.
            </h2>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(226,232,240,0.55)' }}>
              Because for your business, it probably is. The pattern might look familiar —
              but the combination of your team, your data, your constraints, and your market
              is unique. Cookie-cutter answers to unique problems are just expensive guesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 rounded-3xl overflow-hidden border" style={{ borderColor: 'rgba(163,255,18,0.1)' }}>
            {VALUES.map(({ title, desc }, i) => (
              <div
                key={title}
                className={`p-10 transition-colors ${
                  i % 2 === 0 && i < VALUES.length - 1
                    ? 'border-b md:border-b md:border-r'
                    : i < VALUES.length - 2
                      ? 'border-b'
                      : i === VALUES.length - 2
                        ? 'border-b md:border-b-0 md:border-r'
                        : ''
                }`}
                style={{ backgroundColor: '#0F172A', borderColor: 'rgba(163,255,18,0.1)' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#1E293B'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#0F172A'}
              >
                <h3 className="text-base font-bold mb-3" style={{ color: '#E2E8F0' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(226,232,240,0.55)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Work */}
      <section className="px-6 lg:px-8 py-28" style={{ backgroundColor: '#0F172A' }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#636b2f' }}>
            The Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10" style={{ color: '#E2E8F0' }}>
            We obsess over the details others skip.
          </h2>

          <div className="space-y-8">
            <p className="text-base leading-relaxed" style={{ color: 'rgba(226,232,240,0.65)' }}>
              When we engage with a client, we spend as much time understanding the problem as we do solving it.
              We read old incident reports. We talk to the engineers who've been there the longest. We pull the
              infrastructure diagrams and look for the workarounds — the places where someone, years ago,
              added a patch and never came back to fix the root cause.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(226,232,240,0.65)' }}>
              Those are the places that matter. The edge cases that only appear under load.
              The integrations that work perfectly until they don't. The services with no owner
              and no documentation that everything somehow depends on.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(226,232,240,0.65)' }}>
              We've learned that the best engineering isn't the kind that arrives loudly.
              It's the kind that makes everything else work better without anyone noticing
              — because the system just runs, quietly and without complaint, exactly as it should.
            </p>

            <div className="border-l-2 pl-8 py-2 mt-4" style={{ borderColor: '#636b2f' }}>
              <p className="text-base leading-relaxed font-medium" style={{ color: 'rgba(226,232,240,0.8)' }}>
                That is what we're here to build. Not the loudest solution.
                The right one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-8 py-28 relative overflow-hidden" style={{ backgroundColor: '#1E293B' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-3xl opacity-10"
            style={{ background: 'radial-gradient(ellipse, #636b2f 0%, transparent 70%)' }}
          />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold tracking-widest uppercase mb-6" style={{ color: '#636b2f' }}>
            Work With Us
          </p>
          <h2
            className="font-bold tracking-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', color: '#E2E8F0', lineHeight: 1.15 }}
          >
            If you have a problem worth solving,
            <br />
            <span style={{ color: '#636b2f' }}>we want to hear about it.</span>
          </h2>
          <p className="text-base mb-10 leading-relaxed max-w-xl mx-auto" style={{ color: 'rgba(226,232,240,0.55)' }}>
            We don't take every engagement. We take the ones where we're confident
            we can make a real difference — and we'll tell you honestly if we're not the right fit.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:info@vertex-labs.org"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold transition-opacity hover:opacity-85"
              style={{ backgroundColor: '#636b2f', color: '#0F172A' }}
            >
              Start a Conversation <ArrowIcon className="w-4 h-4" />
            </a>
            <button
              onClick={() => { onNavigate('home'); setTimeout(() => { document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }) }, 50) }}
              className="w-full sm:w-auto inline-flex items-center justify-center border px-8 py-4 rounded-full text-sm font-semibold transition-colors"
              style={{ borderColor: 'rgba(226,232,240,0.2)', color: 'rgba(226,232,240,0.6)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(226,232,240,0.5)'; e.currentTarget.style.color = '#E2E8F0' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(226,232,240,0.2)'; e.currentTarget.style.color = 'rgba(226,232,240,0.6)' }}
            >
              View Our Services
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t px-6 lg:px-8 py-8" style={{ borderColor: '#1E293B', backgroundColor: '#0F172A' }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: 'rgba(226,232,240,0.3)' }}>
            © {new Date().getFullYear()} Vertex Labs Ltd. All rights reserved.
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
      </footer>
    </div>
  )
}
