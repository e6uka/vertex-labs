const STATS = [
  { value: '9+', label: 'Years of Experience' },
  { value: '70+', label: 'Projects Delivered' },
  { value: '5+', label: 'Expert Engineers' },
  { value: '98%', label: 'Client Satisfaction' },
]

export default function Stats() {
  return (
    <section className="py-20 border-y" style={{ backgroundColor: '#1E293B', borderColor: '#0F172A' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {STATS.map(({ value, label }, i) => (
            <div
              key={i}
              className={`text-center md:px-8 ${i > 0 ? 'md:border-l' : ''}`}
              style={i > 0 ? { borderColor: 'rgba(15,23,42,0.8)' } : {}}
            >
              <div className="text-4xl md:text-5xl font-bold tracking-tight mb-2" style={{ color: '#636b2f' }}>
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
