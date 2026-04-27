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

export default function Why() {
  return (
    <section id="why" className="py-32" style={{ backgroundColor: '#1E293B' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-20">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#636b2f' }}>
            Why Vertex Labs?
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
              className={`p-10 transition-colors ${
                i % 2 === 0 && i < WHY_FEATURES.length - 1
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
