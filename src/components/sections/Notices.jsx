import Reveal from '../ui/Reveal'

const notices = [
  {
    category: "ACADEMIC",
    title: "Class 11 Admission Prospectus 2024–25 Released",
    date: "15 May 2024",
    description: "Application forms for Class 11 Arts, Science, and Vocational streams are now available at the school office.",
    link: "#!"
  },
  {
    category: "BOARD CIRCULAR",
    title: "NBSE HSSLC Routine 2024 Revision",
    date: "10 May 2024",
    description: "The Nagaland Board of School Education has released a revised examination routine for Class 12 students.",
    link: "#!"
  },
  {
    category: "GENERAL",
    title: "Annual Sports Week Schedule and House Assignments",
    date: "02 May 2024",
    description: "The 83rd Annual Sports Week will commence from 20th May. All house captains are requested to submit their team lists.",
    link: "#!"
  },
]

const categoryColors = {
  "ACADEMIC": "text-navy bg-navy/10",
  "BOARD CIRCULAR": "text-gold bg-gold/10",
  "GENERAL": "text-soft-gray bg-slate-100",
}

function Notices() {
  return (
    <section id="notices" className="bg-[#FAFAF9] pt-24 pb-1  mb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        {/* Header */}
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-16">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-gold rounded-[2px] shrink-0" />
              <h2 className="font-display font-semibold text-3xl sm:text-4xl text-charcoal">
                Notices & Updates
              </h2>
            </div>
            <a href="#!" className="font-body text-sm font-semibold text-navy hover:text-gold transition-colors shrink-0">
              View All Circulars →
            </a>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {notices.map((notice, index) => (
            <Reveal key={notice.title} stagger={120} index={index}>
              <div
                className="bg-white rounded-[4px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
                style={{ borderTop: '3px solid #C9A84C' }}
              >
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <span className={`font-mono text-[11px] font-bold uppercase tracking-wider px-2 py-1 rounded-[2px] w-fit ${categoryColors[notice.category]}`}>
                    {notice.category}
                  </span>
                  <h3 className="font-body font-bold text-lg text-charcoal leading-snug">
                    {notice.title}
                  </h3>
                  <p className="font-body text-sm text-soft-gray leading-relaxed flex-1">
                    {notice.description}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100 mt-2">
                    <span className="font-body text-xs text-soft-gray">
                      📅 {notice.date}
                    </span>
                    <a href={notice.link} className="font-body text-sm font-semibold text-navy hover:text-gold transition-colors">
                      View Details →
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>


    </section>
  )
}

export default Notices