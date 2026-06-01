import Reveal from "../ui/Reveal";

const milestones = [
  {
    year: "1941",
    text: "Founded as the first government high school in Nagaland",
  },
  {
    year: "2002",
    text: "Upgraded to introduce Higher Secondary classes (Class XI & XII)",
  },
  {
    year: "2016",
    text: "Celebrated the historic 75th Platinum Jubilee milestone",
  },
  {
    year: "2024",
    text: "Inauguration of the state-of-the-art Higher Secondary block",
  },
];

function Heritage() {
  return (
    <section id="about" className="bg-navy-dark">
      <div className="max-w-7xl mx-auto px-6 py-10 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          <Reveal direction="left">
            <div className="relative">
              <div className="hidden md:block absolute -top-3 -left-3 w-full h-full border-2 border-gold rounded-[4px] z-0" />
              <div className="relative z-10 rounded-[4px] overflow-hidden w-full h-[320px] md:h-[420px]">
                <img
                  src="https://files.yappe.in/place/full/ruzhukhrie-government-higher-secondary-school-kohima-4934563.webp"
                  alt="RGHSS Heritage Building 1941"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 left-6 z-20 bg-gold px-4 py-1.5 rounded-[4px]">
                <span className="font-mono text-xs text-navy-dark tracking-widest uppercase font-bold">
                  Est. 1941
                </span>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-8">
            <Reveal>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-gold rounded-[4px] flex-shrink-0" />
                  <span className="font-mono text-xs text-gold tracking-widest uppercase">
                    Our Heritage
                  </span>
                </div>
                <h2 className="font-display text-3xl lg:text-4xl text-warm-white leading-tight">
                  Over Eight Decades of{" "}
                  <span className="text-gold italic">Academic Excellence</span>
                </h2>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <p className="font-body text-soft-gray text-base leading-relaxed">
                Founded in 1941 before Indian independence, Rüzhükhrie Government
                Higher Secondary School holds the distinct honor of being the
                first government high school established in Nagaland. Built on a
                foundation of deep community trust with land donated by Kohima
                Village, the institution has spent over eighty years serving as an
                intellectual anchor for the region.
              </p>
            </Reveal>

            <Reveal delay={150}>
              <p className="font-body text-soft-gray text-base leading-relaxed">
                Our hillside campus physically tells this story of evolution,
                preserving a historic British-era colonial heritage building
                alongside a massive, modern academic block inaugurated in 2024.
                Since expanding into higher secondary streams in 2002, RGHSS has
                consistently produced state board toppers while maintaining an
                uncompromising, inclusive mission.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="flex flex-col border-l-2 border-gold/30 pl-6 mt-2">
                {milestones.map((m, i) => (
                  <div key={i} className="relative pb-6 last:pb-0">
                    <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-gold border-2 border-navy-dark" />
                    <span className="font-mono text-xs text-gold tracking-widest block mb-1">
                      {m.year}
                    </span>
                    <span className="font-body text-soft-gray text-sm leading-relaxed">
                      {m.text}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={250}>
              <div className="mt-2">
                <a
                  href="/about"
                  className="inline-flex items-center gap-3 border border-gold text-gold font-body text-sm font-semibold px-6 py-3 rounded-[4px] hover:bg-gold hover:text-navy-dark transition-all duration-200 tracking-wide"
                >
                  Read Full History
                </a>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Heritage;
