import { Trophy } from 'lucide-react'
import Reveal from '../ui/Reveal'

const stats = [
  { value: "1941", label: "Established" },
  { value: "80+", label: "Years of Legacy" },
  { value: "940+", label: "Students Enrolled" },
  { value: "70+", label: "Faculty Members" },
]

const rankHolders = [
  {
    name: "Jinenle Wanth",
    rank: "State Rank 10",
    stream: "Arts Stream",
    year: "2021",
    board: "NBSE HSSLC",
  },
  {
    name: "Neimhelo-Ü Lasuh",
    rank: "State Rank 10",
    stream: "Commerce Stream",
    year: "2020",
    board: "NBSE HSSLC",
  },
]

const milestones = [
  {
    year: "1941",
    title: "Founded",
    description: "Established as Nagaland's first government high school through collaboration between an American missionary and the British Deputy Commissioner of Kohima.",
  },
  {
    year: "2002",
    title: "Higher Secondary",
    description: "Introduction of Class XI and XII education, expanding the school's academic mandate to higher secondary level.",
  },
  {
    year: "2023",
    title: "Subject Toppers",
    description: "RGHSS students secured state-highest marks in Psychology and Geography in the NBSE board examinations.",
  },
  {
    year: "2024",
    title: "New Academic Block",
    description: "Inauguration of a modern three-storey Higher Secondary Academic Block with 16 classrooms and upgraded facilities.",
  },
]

function Achievements() {
  return (
    <>

      <section id="achievements" className="bg-navy-dark py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-16">

          {/* Header */}
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
              <div className="max-w-xl">
                <p className="font-mono text-[11px] font-bold text-gold tracking-[0.16em] uppercase mb-4">
                  Legacy & Achievements
                </p>
                <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-[1.1]">
                  Eight Decades<br />
                  of <span className="text-gold">Excellence</span>
                </h2>
              </div>
              <p className="font-body text-base text-slate-400 leading-relaxed max-w-sm">
                Since 1941, Rüzhükhrie GHSS has shaped the intellectual and civic life of Nagaland —
                producing generations of scholars, public servants, and community leaders.
              </p>
            </div>
          </Reveal>

          {/* Stats Row */}
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-[4px] overflow-hidden mb-14">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-navy-dark px-6 py-8 flex flex-col gap-2">
                  <p className="font-display font-bold text-4xl text-white">
                    {stat.value}
                  </p>
                  <p className="font-body text-sm text-slate-400 tracking-wide">
                    {stat.label}
                  </p>
                  <div className="w-8 h-[2px] bg-gold mt-2" />
                </div>
              ))}
            </div>
          </Reveal>

          {/* State Rank Holders */}
          <Reveal>
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-4 h-4 bg-gold rounded-[2px] shrink-0" />
                <h3 className="font-display font-semibold text-2xl text-white">
                  State Rank Holders
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {rankHolders.map((holder, index) => (
                  <Reveal key={holder.name} stagger={150} index={index}>
                    <div
                      className="relative border border-white/10 hover:border-gold/50 rounded-[4px] p-8 transition-all duration-300"
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gold rounded-l-[4px]" />
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <p className="font-mono text-[10px] font-bold text-gold tracking-widest uppercase mb-2">
                            NBSE HSSLC · {holder.stream}
                          </p>
                          <h4 className="font-display font-bold text-2xl text-white">
                            {holder.name}
                          </h4>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="font-mono text-xs text-slate-400">{holder.year}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/10">
                        <Trophy size={14} className="text-gold shrink-0" strokeWidth={1.5} />
                        <p className="font-body text-sm font-semibold text-gold">
                          {holder.rank}
                        </p>
                        <span className="text-white/20">·</span>
                        <p className="font-body text-sm text-slate-400">
                          State Top 10 Merit List
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Timeline */}
          <Reveal>
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-4 h-4 bg-gold rounded-[2px] shrink-0" />
                <h3 className="font-display font-semibold text-2xl text-white">
                  Institutional Milestones
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-white/10 rounded-[4px] overflow-hidden">
                {milestones.map((item, index) => (
                  <Reveal key={item.year} stagger={100} index={index} as="div">
                    <div
                      className={`p-7 flex flex-col gap-3 hover:bg-white/5 transition-colors duration-200 h-full
                        ${index !== milestones.length - 1 ? 'md:border-r border-white/10' : ''}
                      `}
                    >
                      <p className="font-display font-bold text-3xl text-gold">
                        {item.year}
                      </p>
                      <p className="font-body font-bold text-sm text-white">
                        {item.title}
                      </p>
                      <p className="font-body text-sm text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Bottom line */}
          <Reveal delay={100}>
            <div className="mt-14 pt-10 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <p className="font-display text-xl text-white/60 italic max-w-2xl leading-relaxed">
                "Nagaland's first — and still among its finest."
              </p>
              <div className="shrink-0">
                <p className="font-mono text-xs text-gold tracking-widest uppercase">Est. 1941</p>
                <p className="font-body text-sm text-slate-400 mt-1">Kohima, Nagaland</p>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

    </>
  )
}

export default Achievements