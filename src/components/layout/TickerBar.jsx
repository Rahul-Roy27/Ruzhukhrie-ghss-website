function TickerBar() {
  const notices = [
    "Class 11 Admissions Open for 2024–25 Session",
    "HSLC Results Declared — Overall Pass Percentage 94%",
    "Annual Sports Week Schedule Released",
    "NBSE Class 11 & 12 Mid-Term Examination Routine Published",
  ]

  return (
    <div className="bg-gold h-10 flex items-center overflow-hidden w-full">
      <span className="font-mono text-xs font-bold text-navy-dark px-4 shrink-0">
        LIVE:
      </span>
      <div className="flex overflow-hidden w-full">
        <div className="flex animate-marquee whitespace-nowrap gap-12">
          {notices.map((n, i) => (
            <span key={i} className="font-body text-sm font-semibold text-charcoal">
              {n} &nbsp;•
            </span>
          ))}
          {notices.map((n, i) => (
            <span key={`dup-${i}`} className="font-body text-sm font-semibold text-charcoal">
              {n} &nbsp;•
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TickerBar