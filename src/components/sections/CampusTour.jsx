import { useState } from 'react'

const tabs = [
  {
    id: 'heritage',
    label: 'Heritage Building',
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHkKFI4vQudiVr7uWb_ssmsVRdBu_rLW0WUGrJLdIOlOg--dc-ouslYJnVHK4wiGvbGS-pF7H8KiaHfNqCtj5JMiHcf4Rt7XrFKzS2nWXzSAkuOoRLqHGzY1MVuHE5V41yCtar1=s1360-w1360-h1020-rw',
    description: 'The 1941 heritage building stands as a living monument to Nagaland\'s educational history — its colonial-era architecture a testament to the institution\'s founding vision and enduring legacy.',
    caption: 'Main Building · Est. 1941',
  },
  {
    id: 'academic',
    label: 'Academic Block',
    src: 'https://content.jdmagicbox.com/v2/comp/kohima/y9/9999px370.x370.221104230053.w6y9/catalogue/ruzhukhrie-govt-higher-secondary-school-lower-agri-kohima-schools-vdjo52omof.jpg',
    description: 'Inaugurated in 2024, the new Higher Secondary Academic Block brings modern classrooms, upgraded science laboratories, and contemporary learning infrastructure to the historic campus.',
    caption: 'New Academic Block · Inaugurated 2024',
  },
  {
    id: 'grounds',
    label: 'Campus Grounds',
    src: 'https://files.yappe.in/place/full/high-school-ground-11268209.webp',
    description: 'The open campus grounds serve as the heart of student life — hosting morning assemblies, annual sports weeks, cultural events, and the everyday rhythms of school community.',
    caption: 'Campus Grounds · Kohima, Nagaland',
  },
  {
    id: 'students',
    label: 'Student Spaces',
    src: 'https://nagalandtribune.in/wp-content/uploads/2024/07/Ruzhukhrie-GHSS-new-block-building-inaugurated-Advisor-Yhome-urges-for-protection-of-historic-colonial-buildings-2.jpg',
    description: 'From the school library to collaborative study areas, RGHSS provides spaces where students from Arts, Science, and Commerce streams connect, learn, and build lasting friendships.',
    caption: 'Student Life · Rüzhükhrie GHSS',
  },
]

function CampusTour() {
  const [active, setActive] = useState(0)
  const [fading, setFading] = useState(false)

  const handleTab = (index) => {
    if (index === active) return
    setFading(true)
    setTimeout(() => {
      setActive(index)
      setFading(false)
    }, 250)
  }

  const current = tabs[active]

  return (
    <>
      <section id="campus" className="bg-navy-dark py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-16">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="font-mono text-[11px] font-bold text-gold tracking-[0.16em] uppercase mb-3">
                Explore Our Campus
              </p>
              <h2 className="font-display font-semibold text-4xl text-white leading-snug">
                Discover the Spaces That{' '}
                <span className="text-gold">Shape Student Life</span>
              </h2>
            </div>
            <p className="font-body text-base text-white/50 leading-relaxed max-w-sm">
              A glimpse into the classrooms, grounds, and learning environments
              that have nurtured generations of students at Rüzhükhrie Government
              Higher Secondary School.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => handleTab(index)}
                className={`font-body text-sm font-semibold px-5 py-2.5 rounded-[4px] transition-all duration-300
                  ${active === index
                    ? 'bg-gold text-navy-dark'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="relative w-full overflow-hidden rounded-[4px] mb-8">
            {/* Gold top accent */}
            <div className="h-[3px] bg-gold w-full" />

            <div className="relative aspect-video md:aspect-[21/9] lg:aspect-[2.5/1] w-full overflow-hidden">
              <img
                src={current.src}
                alt={current.label}
                className="w-full h-full object-cover"
                style={{
                  opacity: fading ? 0 : 1,
                  transform: fading ? 'scale(1.02)' : 'scale(1)',
                  transition: 'opacity 0.25s ease, transform 0.25s ease',
                }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-navy-dark/30" />

              {/* Caption badge */}
              <div
                className="absolute bottom-4 left-4"
                style={{
                  opacity: fading ? 0 : 1,
                  transition: 'opacity 0.25s ease',
                }}
              >
                <span className="font-mono text-[10px] font-bold text-white tracking-widest uppercase bg-navy/80 px-3 py-1.5 rounded-[2px]">
                  {current.caption}
                </span>
              </div>

              {/* Tab indicator dots */}
              <div className="absolute bottom-4 right-4 flex gap-1.5">
                {tabs.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleTab(index)}
                    className={`rounded-full transition-all duration-300
                      ${active === index
                        ? 'w-5 h-1.5 bg-gold'
                        : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/60'
                      }
                    `}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Description */}
          <div
            className="flex flex-col md:flex-row gap-8 items-start mb-12"
            style={{
              opacity: fading ? 0 : 1,
              transition: 'opacity 0.25s ease',
            }}
          >
            <div className="flex-1">
              <h3 className="font-display font-semibold text-2xl text-white mb-3">
                {current.label}
              </h3>
              <p className="font-body text-base text-white/60 leading-relaxed max-w-2xl">
                {current.description}
              </p>
            </div>

            {/* Nav arrows */}
            <div className="flex gap-3 shrink-0">
              <button
                onClick={() => handleTab(active === 0 ? tabs.length - 1 : active - 1)}
                className="w-10 h-10 rounded-[4px] border border-white/10 flex items-center justify-center text-white/50 hover:border-gold hover:text-gold transition-all duration-300"
              >
                ←
              </button>
              <button
                onClick={() => handleTab(active === tabs.length - 1 ? 0 : active + 1)}
                className="w-10 h-10 rounded-[4px] border border-white/10 flex items-center justify-center text-white/50 hover:border-gold hover:text-gold transition-all duration-300"
              >
                →
              </button>
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center pt-4 border-t border-white/10">
            
            <a
              href="#admissions"
              className="font-body text-sm font-semibold text-white/60 hover:text-gold transition-colors duration-300 flex items-center gap-2"
            >
              <span>Explore Admissions</span>
              <span className="text-gold">→</span>
            </a>
          </div>

        </div>
      </section>
    </>
  )
}

export default CampusTour