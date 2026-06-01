import Reveal from '../ui/Reveal'

function SchoolMotto() {
  return (
    <section className="bg-navy-dark py-10 md:py-14 relative overflow-hidden flex justify-center items-center border-t border-b border-gold/10">
      {/* Subtle background typographic element */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none overflow-hidden">
        <span className="font-display font-bold text-[6rem] md:text-[10rem] text-white whitespace-nowrap leading-none tracking-tighter">
          RGHSS
        </span>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 md:w-8 h-[1px] bg-gold/60" />
            <span className="font-mono text-[9px] md:text-[10px] text-gold tracking-[0.25em] uppercase font-semibold">
              Our Motto
            </span>
            <div className="w-4 md:w-8 h-[1px] bg-gold/60" />
          </div>
        </Reveal>

        <Reveal delay={40}>
          <div className="text-gold/40 text-2xl md:text-3xl font-display mb-2 leading-none select-none">
            &#10076;
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="font-display italic text-2xl md:text-4xl text-warm-white font-medium leading-tight mb-2 tracking-wide px-4">
            Educate One and All
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="text-gold/40 text-2xl md:text-3xl font-display mt-1 mb-4 leading-none select-none">
            &#10077;
          </div>
        </Reveal>

        <Reveal delay={160}>
          <p className="font-body text-[10px] md:text-xs text-white/50 tracking-[0.3em] uppercase">
            Since 1941
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export default SchoolMotto
