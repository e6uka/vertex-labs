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

export default function Process() {
  return (
    <section id="process" className="py-32" style={{ backgroundColor: '#0F172A' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-20">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#636b2f' }}>
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
                <span className="text-lg font-bold" style={{ color: '#636b2f' }}>{num}</span>
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
