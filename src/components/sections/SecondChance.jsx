import Reveal from '../ui/Reveal'

const streams = ['Arts', 'Science', 'Commerce']

function SecondChance() {
  return (
    <section id="admissions" className="bg-warm-white">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT — Text */}
          <div className="flex flex-col gap-8">
            <Reveal>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-gold rounded-[4px] flex-shrink-0" />
                  <span className="font-mono text-xs text-navy tracking-widest uppercase">Admissions Open</span>
                </div>
                <h2 className="font-display text-3xl lg:text-4xl text-charcoal leading-tight">
                  Begin Your Journey at{' '}
                  <span className="text-navy italic">Nagaland's First Government School.</span>
                </h2>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <p className="font-body text-soft-gray text-base leading-relaxed">
                RGHSS admits students into Class XI across Arts, Science, and Commerce streams. Admissions are open to all students who have completed Class X from any recognised board. Our institution has maintained an open, merit-based, and inclusive admission process since 1941.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {streams.map((s) => (
                  <div key={s} className="border border-gold/40 rounded-[4px] px-5 py-4 flex flex-col gap-1 bg-white">
                    <span className="font-mono text-xs text-gold tracking-widest uppercase">{s}</span>
                    <span className="font-body text-charcoal text-sm">Stream available in Class XI and XII</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <a
                  href="#admissions"
                  className="inline-flex items-center justify-center bg-navy text-warm-white font-body text-sm font-bold px-8 py-3 rounded-[4px] hover:bg-navy-dark transition-colors duration-200 tracking-wide"
                >
                  View Admissions Info
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center border border-navy text-navy font-body text-sm font-semibold px-8 py-3 rounded-[4px] hover:bg-navy hover:text-warm-white transition-colors duration-200 tracking-wide"
                >
                  Contact the Office
                </a>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="border-l-4 border-gold pl-5 py-1">
                <p className="font-mono text-xs text-soft-gray tracking-wide leading-relaxed">
                  Admissions open annually after NBSE Class X results. Contact the school office for exact dates.
                </p>
              </div>
            </Reveal>
          </div>

          {/* RIGHT — 2024 Building Image */}
          <Reveal direction="right">
            <div className="relative">
              <div className="hidden md:block absolute -bottom-3 -right-3 w-full h-full border-2 border-navy rounded-[4px] z-0" />
              <div className="relative z-10 rounded-[4px] overflow-hidden w-full h-[320px] md:h-[460px] bg-soft-gray/20 flex flex-col items-center justify-center">
                <img
                  src="https://nagalandtribune.in/wp-content/uploads/2024/07/Ruzhukhrie-GHSS-new-block-building-inaugurated-Advisor-Yhome-urges-for-protection-of-historic-colonial-buildings.jpg"
                  alt="RGHSS New Academic Block 2024"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.classList.add('flex', 'flex-col', 'items-center', 'justify-center')
                  }}
                />
              </div>
              <div className="absolute -bottom-4 right-6 z-20 bg-navy px-4 py-1.5 rounded-[4px]">
                <span className="font-mono text-xs text-gold tracking-widest uppercase font-bold">
                  New Block — 2024
                </span>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}

export default SecondChance