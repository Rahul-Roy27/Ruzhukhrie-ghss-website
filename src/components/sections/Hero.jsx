import { useEffect, useState } from 'react'
import TextileStripe from '../layout/TextileStripe'

function Hero() {
  const [visible, setVisible] = useState(false)
  const [imgLoaded, setImgLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  const HERO_IMG =
    'https://content3.jdmagicbox.com/v2/comp/kohima/y9/9999px370.x370.221104230053.w6y9/catalogue/ruzhukhrie-govt-higher-secondary-school-lower-agri-kohima-schools-y3gssixem1.jpg'

  const stats = [
    { value: '80+', label: 'Years of Legacy' },
    { value: '940+', label: 'Students' },
    { value: 'NBSE', label: 'Board Affiliated' },
  ]

  return (
    <section className="relative w-full h-screen min-h-[700px] max-h-[1080px] flex flex-col overflow-hidden bg-navy-dark" id='hero'>

      {/* ── Background layer ── */}
      <div className="absolute inset-0 z-0">
        {/* Image with slow Ken Burns zoom */}
        <img
          src={HERO_IMG}
          alt="Rüzhükhrie GHSS Campus"
          fetchPriority="high"
          onLoad={() => setImgLoaded(true)}
          className="w-full h-full object-cover"
          style={{
            opacity: imgLoaded ? 1 : 0,
            transform: imgLoaded ? 'scale(1.08)' : 'scale(1.15)',
            transition: 'opacity 1.2s ease, transform 18s ease-out',
          }}
        />

        {/* Left-to-right cinematic gradient — keeps text readable, reveals building on right */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              108deg,
              rgba(8,14,28,0.94) 0%,
              rgba(15,35,71,0.82) 35%,
              rgba(15,35,71,0.45) 60%,
              rgba(15,35,71,0.20) 80%,
              rgba(15,35,71,0.30) 100%
            )`,
          }}
        />

        {/* Bottom vignette for seamless section transition */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, transparent 55%, rgba(8,14,28,0.9) 100%)',
          }}
        />

        {/* Top subtle bar — navbar contrast */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(8,14,28,0.45) 0%, transparent 18%)',
          }}
        />

        {/* Subtle noise texture overlay for depth */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            {/* Left column — Headlines + CTAs */}
            <div className="lg:col-span-7 flex flex-col gap-6">

              {/* Institutional tag */}
              <div
                className="flex items-center gap-3"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateX(0)' : 'translateX(-20px)',
                  transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
                }}
              >
                <div className="w-10 h-[2px] bg-gold rounded-full" />
                <p className="font-mono text-[10px] font-bold text-gold tracking-[0.22em] uppercase">
                  Nagaland's First Government High School · Est. 1941
                </p>
              </div>

              {/* Headline */}
              <h1
                className="font-display font-bold text-[2.5rem] sm:text-5xl md:text-[3.75rem] text-white leading-[1.05] tracking-[-0.025em]"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(28px)',
                  transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.15s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.15s',
                }}
              >
                Educating Generations.
                <br />
                Shaping Nagaland.
                <br />
                <span
                  className="text-gold"
                  style={{
                    textShadow: '0 0 40px rgba(201,168,76,0.15)',
                  }}
                >
                  Since 1941.
                </span>
              </h1>

              {/* Divider accent */}
              <div
                className="flex items-center gap-2"
                style={{
                  opacity: visible ? 1 : 0,
                  transition: 'opacity 0.6s ease 0.35s',
                }}
              >
                <div className="w-10 h-[2px] bg-gold/50 rounded-full" />
                <div className="w-2.5 h-[2px] bg-gold/25 rounded-full" />
                <div className="w-1 h-[2px] bg-gold/15 rounded-full" />
              </div>

              {/* Description */}
              <p
                className="font-body text-[15px] md:text-base text-white/60 leading-[1.9] max-w-lg"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(14px)',
                  transition: 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s',
                }}
              >
                For over eight decades, Rüzhükhrie Government Higher Secondary School
                has stood at the forefront of public education in Nagaland — nurturing
                scholars, civic leaders, and generations of Nagaland's finest minds.
              </p>

              {/* CTAs */}
              <div
                className="flex flex-col sm:flex-row gap-3 mt-1"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(10px)',
                  transition: 'opacity 0.7s ease 0.45s, transform 0.7s ease 0.45s',
                }}
              >
                <a
                  href="#admissions"
                  className="w-full sm:w-auto sm:min-w-[220px] group relative bg-gold text-navy-dark font-body font-bold text-sm px-8 py-3.5 rounded-[4px] text-center tracking-wide overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-gold/25"
                >
                  <span className="relative z-10">Admissions →</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
                <a
                  href="#notices"
                  className="w-full sm:w-auto sm:min-w-[220px] border border-white/20 text-white/90 font-body font-semibold text-sm px-8 py-3.5 rounded-[4px] text-center tracking-wide transition-all duration-300 hover:border-gold/60 hover:text-gold hover:bg-gold/[0.06]"
                >
                  Notice Board
                </a>
              </div>

            </div>

            {/* Right column — Glassmorphism plaque card */}


          </div>
        </div>
      </div>

      {/* ── Bottom bar: mobile stats + scroll ── */}
      <div className="relative z-10 pb-6">



        {/* Scroll indicator */}
        <div
          className="flex justify-center"
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 1s ease 0.8s',
          }}
        >
          <a href="#about" className="group flex flex-col items-center gap-2 cursor-pointer">
            <p className="font-mono text-[8px] text-white/20 tracking-[0.3em] uppercase group-hover:text-gold/40 transition-colors duration-300">
              Scroll
            </p>
            <div className="relative w-[1px] h-8 overflow-hidden">
              <div
                className="absolute inset-0 bg-gradient-to-b from-white/25 to-transparent"
                style={{
                  animation: 'scrollPulse 2s ease-in-out infinite',
                }}
              />
            </div>
          </a>
        </div>
      </div>

      {/* Scroll pulse animation */}
      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(0.6); transform-origin: top; }
          50% { opacity: 1; transform: scaleY(1); transform-origin: top; }
        }
      `}</style>

      <div className="absolute bottom-0 w-full z-20">
        <TextileStripe />
      </div>

    </section>
  )
}

export default Hero