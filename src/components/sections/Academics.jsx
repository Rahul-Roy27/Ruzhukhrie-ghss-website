import { FlaskConical, BookOpen, TrendingUp, Award, Users, Library, Building2 } from 'lucide-react'
import Reveal from '../ui/Reveal'

const streams = [
  {
    title: "Science",
    description: "A rigorous foundation in natural sciences and mathematics, preparing students for engineering, medicine, and research.",
    subjects: ["Physics", "Chemistry", "Biology", "Mathematics", "Computer Science"],
    icon: FlaskConical,
  },
  {
    title: "Arts",
    description: "A broad humanistic curriculum rooted in Nagaland's intellectual tradition, developing critical thinkers and public leaders.",
    subjects: ["History", "Geography", "Political Science", "Tenyidie", "Economics"],
    icon: BookOpen,
  },
  {
    title: "Commerce",
    description: "A practical grounding in business, finance, and enterprise — equipping students for commerce and professional careers.",
    subjects: ["Accountancy", "Business Studies", "Economics", "Mathematics", "English"],
    icon: TrendingUp,
  },
]

const features = [
  {
    label: "NBSE Affiliated",
    description: "Fully affiliated with the Nagaland Board of School Education.",
    icon: Award,
  },
  {
    label: "Experienced Faculty",
    description: "Dedicated teachers with decades of combined academic service.",
    icon: Users,
  },
  {
    label: "Library Resources",
    description: "A well-stocked institutional library supporting all streams.",
    icon: Library,
  },
  {
    label: "Modern Infrastructure",
    description: "New 2024 academic block with science labs and smart classrooms.",
    icon: Building2,
  },
]

function Academics() {
  return (
    <section id="academics" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        {/* Section Header */}
        <Reveal>
          <div className="max-w-2xl mb-14">
            <p className="font-mono text-[11px] font-bold text-gold tracking-[0.16em] uppercase mb-3">
              Academic Programmes
            </p>
            <h2 className="font-display font-semibold text-4xl text-charcoal leading-snug mb-4">
              Shaping Minds,{' '}
              <span className="text-navy">Building Futures</span>
            </h2>
            <p className="font-body text-base text-soft-gray leading-relaxed">
              Rüzhükhrie GHSS offers Class XI and XII education across three streams under the
              Nagaland Board of School Education — grounded in academic rigour and the values
              of public service.
            </p>
          </div>
        </Reveal>

        {/* Stream Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {streams.map((stream, index) => {
            const Icon = stream.icon
            return (
              <Reveal key={stream.title} stagger={120} index={index}>
                <div
                  className="group bg-[#FAFAF9] rounded-[4px] border border-slate-200 hover:border-gold hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                >
                  <div className="h-[3px] bg-gold rounded-t-[4px]" />

                  <div className="p-7 flex flex-col gap-4 flex-1">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-[4px] bg-navy/8 flex items-center justify-center">
                        <Icon size={20} className="text-navy" strokeWidth={1.5} />
                      </div>
                      <span className="font-mono text-[10px] font-bold text-gold tracking-widest uppercase border border-gold px-2 py-0.5 rounded-[2px]">
                        Class XI — XII
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-2xl text-navy">
                      {stream.title}
                    </h3>

                    <p className="font-body text-sm text-soft-gray leading-relaxed flex-1">
                      {stream.description}
                    </p>

                    <div className="pt-4 border-t border-slate-200">
                      <p className="font-mono text-[10px] text-soft-gray uppercase tracking-widest mb-2">
                        Core Subjects
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {stream.subjects.map((subject) => (
                          <span
                            key={subject}
                            className="font-body text-xs text-navy bg-navy/5 border border-navy/10 px-2.5 py-1 rounded-[2px]"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Feature Row */}
        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 border border-slate-200 rounded-[4px] overflow-hidden">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.label}
                  className={`p-6 flex flex-col gap-2 bg-white hover:bg-[#FAFAF9] transition-colors duration-200
                    ${index !== features.length - 1 ? 'md:border-r border-slate-200' : ''}
                  `}
                >
                  <Icon size={18} className="text-gold mb-1" strokeWidth={1.5} />
                  <p className="font-display font-semibold text-base text-navy">
                    {feature.label}
                  </p>
                  <p className="font-body text-sm text-soft-gray leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </Reveal>

      </div>
    </section>
  )
}

export default Academics