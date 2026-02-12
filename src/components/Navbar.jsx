import React, {useState, useEffect} from 'react'
import {PHONE, BRAND} from '../config'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  const links = [
    {label: 'الرئيسية', href: '#', icon: '🏠'},
    {label: 'من أنا', href: '#about', icon: '👋'},
    {label: 'أعمالي', href: '#works', icon: '🎨'},
    {label: 'التحولات', href: '#before-after', icon: '✨'},
    {label: 'الخدمات', href: '#services', icon: '💄'},
    {label: 'الحزم', href: '#packages', icon: '🎁'},
    {label: 'إنجازاتي', href: '#achievements', icon: '🏆'},
    {label: 'آراء العميلات', href: '#testimonials', icon: '💬'},
    {label: 'الأسئلة', href: '#faq', icon: '❓'},
    {label: 'الفروع', href: '#branches', icon: '📍'},
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    if (href !== '#') {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    setOpen(false)
  }

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'backdrop-blur-lg bg-white/90 shadow-premium border-b border-[var(--gold)]/20' 
        : 'backdrop-blur-md bg-white/70 border-b border-[var(--gold)]/10'
    }`}>
      <nav className="flex items-center justify-between w-full px-4 sm:px-6 py-4 max-w-7xl mx-auto">
        {/* Logo & Brand - Enhanced */}
        <button onClick={() => handleNavClick('#')} className="flex items-center gap-2 hover-glow rounded-lg p-2 flex-shrink-0 min-w-0">
          <div className="flex flex-col min-w-0">
            <div className="text-lg sm:text-xl font-extrabold brand text-[var(--gold)] whitespace-nowrap">{BRAND}</div>
            <div className="text-[9px] sm:text-xs subtitle-premium text-[var(--gold)]/80 whitespace-nowrap">💎 ميك أب فاخر</div>
          </div>
        </button>

        {/* Desktop Navigation - Enhanced */}
        <div className="hidden lg:flex items-center gap-1">
          {links.slice(0, 6).map((l, idx) => (
            <button
              key={l.label}
              onClick={() => handleNavClick(l.href)}
              className="nav-link text-xs sm:text-sm px-3 py-2 rounded-lg transition-all font-medium hover:bg-[var(--gold)]/8 group relative"
              style={{
                animation: `slideInDown 400ms cubic-bezier(0.2, 0.9, 0.3, 1) forwards`,
                animationDelay: `${idx * 50}ms`,
                opacity: 0
              }}
            >
              <span className="group-hover:text-[var(--gold)] transition-colors">{l.label}</span>
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--gold)] to-[var(--rose)] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-right"></span>
            </button>
          ))}
        </div>

        {/* Desktop CTA - Enhanced */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`https://wa.me/${PHONE}?text=${encodeURIComponent('مرحباً دعاء، أرغب بالاستفسار عن الخدمات والحجز')}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-2.5 rounded-full gold-btn text-white font-semibold text-sm hover-lift shadow-gold"
          >
            <span>💬</span>
            <span>احجزي الآن</span>
          </a>
        </div>

        {/* Mobile Menu Button - Enhanced */}
        <div className="lg:hidden flex-shrink-0">
          <button
            onClick={() => setOpen(!open)}
            aria-label="قائمة الملاحة"
            className={`p-3 rounded-lg transition-all ${
              open 
                ? 'bg-[var(--gold)]/20 text-[var(--gold)]' 
                : 'hover:bg-gray-100 text-gray-700'
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ transform: open ? 'rotate(90deg)' : 'rotate(0deg)' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer - Enhanced */}
      {open && (
        <div className="lg:hidden absolute top-full inset-x-0 bg-gradient-to-b from-white to-[var(--cream)] border-t border-[var(--gold)]/20 shadow-lg backdrop-blur-sm animate-slideDown overflow-hidden">
          <div className="w-full px-4 sm:px-6 py-6 flex flex-col gap-3">
            {links.map((l, idx) => (
              <button
                key={l.label}
                onClick={() => handleNavClick(l.href)}
                className="py-3 px-4 text-base font-medium text-left rounded-lg transition-all hover:bg-[var(--gold)]/15 hover:text-[var(--gold)] group flex items-center gap-3"
                style={{
                  animation: `slideInUp 300ms cubic-bezier(0.2, 0.9, 0.3, 1) forwards`,
                  animationDelay: `${idx * 40}ms`,
                  opacity: 0
                }}
              >
                <span className="text-xl">{l.icon}</span>
                <span>{l.label}</span>
              </button>
            ))}
            
            <div className="pt-4 mt-6 border-t border-[var(--gold)]/20">
              <a
                href={`https://wa.me/${PHONE}?text=${encodeURIComponent('مرحباً دعاء، أرغب بالحجز والاستفسار عن الخدمات')}`}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full gold-btn text-white font-semibold text-base transition-all hover-lift"
              >
                <span>📞</span>
                <span>احجزي استشارتك المجانية</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
