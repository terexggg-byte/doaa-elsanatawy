import React from 'react'
import {PHONE, BRAND} from '../config'

export default function Footer(){
  const currentYear = new Date().getFullYear()

  const footerSections = [
    { 
      title: 'الخدمات', 
      links: [
        { label: 'ميكاب عرايس', href: '#services' },
        { label: 'ميكاب خطوبة', href: '#services' },
        { label: 'ميكاب سهرة', href: '#services' },
        { label: 'جلسات تصوير', href: '#services' }
      ] 
    },
    { 
      title: 'حول الموقع', 
      links: [
        { label: 'من أنا', href: '#about' },
        { label: 'أعمالي', href: '#works' },
        { label: 'إنجازاتي', href: '#achievements' },
        { label: 'آراء العميلات', href: '#testimonials' }
      ] 
    },
    { 
      title: 'مراجع سريعة', 
      links: [
        { label: 'الحزم', href: '#packages' },
        { label: 'الفروع', href: '#branches' },
        { label: 'الأسئلة الشائعة', href: '#faq' },
        { label: 'التحولات', href: '#before-after' }
      ] 
    },
  ]

  const socialLinks = [
    { name: 'واتساب', icon: '💬', url: `https://wa.me/${PHONE}`, color: 'hover:bg-green-500' },
    { name: 'إنستجرام', icon: '📸', url: '#', color: 'hover:bg-pink-500' },
    { name: 'فيسبوك', icon: '👍', url: '#', color: 'hover:bg-blue-600' },
    { name: 'تيك توك', icon: '🎬', url: '#', color: 'hover:bg-black' },
  ]

  return (
    <footer className="bg-gradient-to-b from-[var(--charcoal)] to-black text-white mt-32 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-[var(--gold)]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[var(--rose)]/5 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto container-tight py-16 sm:py-20">
          {/* First Row - Brand & Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Brand Info */}
            <div className="col-span-1 lg:col-span-1">
              <div className="text-3xl font-extrabold brand mb-3">{BRAND}</div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                ✨ خدمات ميك أب احترافية وفاخرة لكل مناسبة خاصة وحدث مهم في حياتك
              </p>
              <div className="flex gap-2 flex-wrap">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    title={social.name}
                    className={`w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 transition-all transform hover:scale-110 flex items-center justify-center text-lg font-semibold ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links Sections */}
            {footerSections.map((section, idx) => (
              <div key={idx} className="col-span-1">
                <h4 className="font-bold text-lg mb-5 text-[var(--gold)]">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a 
                        href={link.href}
                        onClick={(e) => {
                          if(link.href.startsWith('#')) {
                            e.preventDefault()
                            document.querySelector(link.href)?.scrollIntoView({behavior: 'smooth', block: 'start'})
                          }
                        }}
                        className="text-gray-300 hover:text-[var(--gold)] transition-all flex items-center gap-2 group"
                      >
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-[var(--gold)]/50 to-transparent mb-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 flex-wrap">
            {/* Copyright */}
            <p className="text-gray-400 text-sm order-2 sm:order-1">
              © {currentYear} <span className="text-[var(--gold)] font-bold">{BRAND}</span> — جميع الحقوق محفوظة ✨
            </p>

            {/* Links */}
            <div className="flex gap-6 flex-wrap justify-center order-3 sm:order-2">
              <a href="#" className="text-gray-400 hover:text-[var(--gold)] transition-colors text-sm">سياسة الخصوصية</a>
              <a href="#" className="text-gray-400 hover:text-[var(--gold)] transition-colors text-sm">شروط الاستخدام</a>
              <a href="#" className="text-gray-400 hover:text-[var(--gold)] transition-colors text-sm">سياسة الاسترجاع</a>
            </div>

            {/* CTA Button */}
            <a
              href={`https://wa.me/${PHONE}?text=${encodeURIComponent('مرحباً دعاء، أرغب بالعودة للأعلى والحجز')}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 rounded-full gold-btn text-white font-semibold text-sm transition-all hover-lift shadow-gold order-1 sm:order-3"
            >
              <span>💬</span>
              <span>تواصلي معي</span>
            </a>
          </div>

          {/* Additional Info */}
          <div className="mt-8 p-6 rounded-xl bg-white/5 border border-white/10 text-center">
            <p className="text-gray-300 text-sm">
              📍 <span className="font-semibold">الفروع:</span> الزقازيق — أبو حماد | 
              📞 <span className="font-semibold">واتساب:</span> 
              <a href={`https://wa.me/${PHONE}`} target="_blank" rel="noreferrer" className="text-[var(--gold)] hover:text-white transition-colors">{PHONE.slice(0, 3)}...{PHONE.slice(-4)}</a>
            </p>
          </div>
        </div>

        {/* Floating CTA Button - Desktop Only */}
        <div className="fixed bottom-8 right-8 z-40 hidden lg:flex">
          <a
            href={`https://wa.me/${PHONE}?text=${encodeURIComponent('مرحباً دعاء، أرغب بالاستفسار عن الخدمات والحجز')}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full gold-btn text-white font-semibold shadow-premium hover-lift transition-all transform hover:scale-110"
          >
            <span>💬</span>
            <span>احجزي الآن</span>
          </a>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          className="fixed bottom-8 left-8 z-40 w-12 h-12 rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--gold-strong)] text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-110 flex items-center justify-center"
          aria-label="العودة للأعلى"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7-7m0 0l-7 7m7-7v12" />
          </svg>
        </button>
      </div>
    </footer>
  )
}
