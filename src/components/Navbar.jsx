import React, {useState} from 'react'
import {PHONE, BRAND} from '../config'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const links = [
    {label: 'الرئيسية', href: '#'},
    {label: 'من أنا', href: '#about'},
    {label: 'أعمالي', href: '#works'},
    {label: 'التحولات', href: '#before-after'},
    {label: 'الخدمات', href: '#services'},
    {label: 'الحزم', href: '#packages'},
    {label: 'إنجازاتي', href: '#achievements'},
    {label: 'آراء العميلات', href: '#testimonials'},
    {label: 'الأسئلة', href: '#faq'},
    {label: 'الفروع', href: '#branches'},
  ]

  const handleNavClick = (href) => {
    if (href !== '#') {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-[var(--gold)]/10 shadow-sm">
      <nav className="max-w-7xl mx-auto container-tight py-4 flex items-center justify-between">
        {/* Logo & Brand */}
        <div className="flex items-center gap-3">
          <div className="text-2xl font-extrabold brand text-[var(--gold)]">{BRAND}</div>
          <div className="text-xs subtitle font-medium">✨ متخصصة ميك أب فاخر عالمي</div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {links.slice(0, 6).map((l) => (
            <button
              key={l.label}
              onClick={() => handleNavClick(l.href)}
              className="nav-link text-sm hover:text-[var(--gold)] px-2 sm:px-3 py-2 rounded-lg transition-colors font-medium hover:bg-[var(--gold)]/5"
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a
            href={`https://wa.me/${PHONE}?text=${encodeURIComponent('مرحباً، أرغب بالحجز والاستفسار عن الخدمات والأسعار')}`}
            target="_blank"
            rel="noreferrer"
            className="px-4 sm:px-6 py-2 rounded-full gold-btn text-white font-semibold text-xs sm:text-sm hover:shadow-lg transition-all"
          >
            احجزي الآن
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            aria-label="menu"
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-[var(--gold)]/10 shadow-xl">
          <div className="container-tight py-6 flex flex-col gap-4">
            {links.map((l) => (
              <button
                key={l.label}
                onClick={() => handleNavClick(l.href)}
                className="py-3 text-lg font-medium text-left border-b border-gray-100 hover:text-[var(--gold)] transition-colors"
              >
                {l.label}
              </button>
            ))}
            <div className="pt-4 mt-4 border-t border-gray-100">
              <a
                href={`https://wa.me/${PHONE}?text=${encodeURIComponent('مرحباً، أرغب بالحجز والاستفسار عن الخدمات')}`}
                target="_blank"
                rel="noreferrer"
                className="w-full block text-center px-6 py-3 rounded-full gold-btn text-white font-semibold"
              >
                احجزي استشارتك المجانية
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
