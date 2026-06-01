import Reveal from '../ui/Reveal'

const quickLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About Us', href: '#about' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Notice Board', href: '#notices' },
  { label: 'Contact', href: '#contact' },
]

const officialLinks = [
  { label: 'Nagaland Board of School Education', href: 'https://nbsenagaland.com' },
  { label: 'Nagaland Government', href: 'https://nagaland.gov.in' },
  { label: 'Ministry of Education', href: 'https://education.gov.in' },
  { label: 'UDISE Portal', href: 'https://udiseplus.gov.in' },
]

function Footer() {
  return (
    <footer className="bg-navy-dark mt-1">

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Col 1 — Identity */}
          <Reveal>
            <div className="flex flex-col gap-5 lg:col-span-1">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-gold rounded-[4px]" />
                  <span className="font-mono text-xs text-gold tracking-widest uppercase">
                    Est. 1941
                  </span>
                </div>

                <h3 className="font-display text-lg text-warm-white leading-snug">
                  Rüzhükhrie Government Higher Secondary School
                </h3>

                <p className="font-body text-soft-gray text-xs mt-2 leading-relaxed">
                  Kohima, Nagaland — The first government high school in Nagaland.
                </p>
              </div>

              <div className="w-12 h-[2px] bg-gold" />

              <p className="font-body text-soft-gray text-xs leading-relaxed">
                Administered under the Department of School Education,
                Government of Nagaland.
              </p>
            </div>
          </Reveal>

          {/* Col 2 — Quick Links */}
          <Reveal stagger={60} index={1}>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold rounded-[4px]" />
                <span className="font-mono text-xs text-gold tracking-widest uppercase">
                  Quick Links
                </span>
              </div>

              <ul className="flex flex-col gap-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-body text-soft-gray text-sm hover:text-gold transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Col 3 — Official Links */}
          <Reveal stagger={60} index={2}>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold rounded-[4px]" />
                <span className="font-mono text-xs text-gold tracking-widest uppercase">
                  Official Links
                </span>
              </div>

              <ul className="flex flex-col gap-3">
                {officialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-soft-gray text-sm hover:text-gold transition-colors duration-200 leading-snug block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Col 4 — Contact */}
          <Reveal stagger={60} index={3}>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold rounded-[4px]" />
                <span className="font-mono text-xs text-gold tracking-widest uppercase">
                  Contact
                </span>
              </div>

              <ul className="flex flex-col gap-4">

                <li className="flex flex-col gap-1">
                  <span className="font-mono text-xs text-gold/60 uppercase tracking-widest">
                    Address
                  </span>

                  <span className="font-body text-soft-gray text-sm leading-relaxed">
                    Rüzhükhrie, Kohima
                    <br />
                    Nagaland — 797001
                    <br />
                    India
                  </span>
                </li>

                <li className="flex flex-col gap-1">
                  <span className="font-mono text-xs text-gold/60 uppercase tracking-widest">
                    Phone
                  </span>

                  <span className="font-body text-soft-gray text-sm">
                    +91 00000 00000
                  </span>
                </li>

                <li className="flex flex-col gap-1">
                  <span className="font-mono text-xs text-gold/60 uppercase tracking-widest">
                    Email
                  </span>

                  <span className="font-body text-soft-gray text-sm">
                    rghss.kohima@nagaland.gov.in
                  </span>
                </li>

              </ul>
            </div>
          </Reveal>

        </div>
      </div>

      {/* Legal Row */}
      <div className="border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">

          <p className="font-mono text-xs text-soft-gray/60 tracking-wide">
            Government of Nagaland. All rights reserved.
          </p>

          <p className="font-mono text-xs text-soft-gray/60 tracking-wide">
            Department of School Education, Nagaland
          </p>

        </div>
      </div>

      {/* Bottom Strip */}
      <div className="bg-navy-black py-3 px-4 text-center">
        <p className="font-mono text-[10px] sm:text-xs text-soft-gray/40 tracking-widest uppercase">
          Rüzhükhrie Government Higher Secondary School — Kohima, Nagaland — Est. 1941
        </p>
      </div>

    </footer>
  )
}

export default Footer