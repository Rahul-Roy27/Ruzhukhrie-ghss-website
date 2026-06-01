import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Heritage", href: "#about" },
    { label: "Academics", href: "#academics" },
    { label: "Admissions", href: "#admissions" },
    { label: "Notices", href: "#notices" },
    { label: "Gallery", href: "#gallery" },
    { label: "Campus Tour", href: "#campus" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Sub-bar */}
      <div className="bg-navy-dark h-9 flex items-center justify-between px-4 sm:px-6 md:px-12">
        <div className="hidden sm:flex gap-6">
          {["RTI Portal", "NBSE Official", "DoSE Nagaland"].map((link) => (
            <a
              key={link}
              href="#!"
              className="font-body text-xs text-slate-300 hover:text-gold transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="hidden md:flex gap-6">
          {["Student Login", "Staff Portal"].map((link) => (
            <a
              key={link}
              href="#!"
              className="font-body text-xs text-slate-300 hover:text-gold transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      {/* Main Nav */}
      <div className="bg-white border-b border-slate-200 h-18 flex items-center justify-between px-4 sm:px-6 md:px-12 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white font-bold font-display text-sm shrink-0">
            <img
              src="data:image/jpeg;base64,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"
              alt="RGHSS Logo"
              className="rounded-full"
            />
          </div>
          <div className="min-w-0">
            <p className="font-display font-bold text-navy text-base sm:text-lg leading-tight truncate">
              Rüzhükhrie Govt. Higher Secondary School
            </p>
            <p className="font-body text-xs text-soft-gray leading-tight">
              Kohima, Nagaland · Est. 1941
            </p>
          </div>
        </div>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm font-semibold text-charcoal hover:text-navy border-b-2 border-transparent hover:border-gold transition-all pb-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-charcoal transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-charcoal transition-all ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-charcoal transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-body text-sm font-semibold text-charcoal hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;
