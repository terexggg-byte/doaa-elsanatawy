import React from 'react'
import {PHONE, BRAND} from '../config'

export default function Footer(){
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { title: 'الخدمات', links: ['ميكاب عرايس', 'ميكاب خطوبة', 'ميكاب سهرة', 'ميكاب فوتوسيشن'] },
    { title: 'المزيد', links: ['من أنا', 'أعمالي', 'التحولات المذهلة', 'الحزم والعروض', 'الإنجازات', 'الأسئلة الشائعة', 'الفروع'] },
  ]

  const socialLinks = [
    { name: 'واتساب', icon: '💬', url: `https://wa.me/${PHONE}` },
    { name: 'إنستجرام', icon: '📸', url: '#' },
    { name: 'فيسبوك', icon: 'f', url: '#' },
  ]

  return (
    <footer className="bg-gradient-to-b from-[var(--charcoal)] to-black text-white mt-32 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-[var(--gold)]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[var(--rose)]/5 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto container-tight py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Info */}
            <div className="col-span-1">
              <div className="text-3xl font-extrabold brand mb-2">{BRAND}</div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                ✨ خدمات ميك أب احترافية وفاخرة لكل مناسبة
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    title={social.name}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--gold)] transition-colors flex items-center justify-center text-sm font-semibold"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((column) => (
              <div key={column.title}>
                <h4 className="font-bold text-lg mb-4">{column.title}</h4>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-gray-400 hover:text-[var(--gold)] transition-colors text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-lg mb-4">تواصل معي</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-400 text-sm">واتساب</p>
                  <a
                    href={`https://wa.me/${PHONE}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[var(--gold)] font-semibold hover:text-white transition-colors"
                  >
                    اضغط هنا
                  </a>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">الفروع</p>
                  <p className="text-white text-sm">الزقازيق — أبو حماد</p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-[var(--gold)]/50 to-transparent mb-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>© {currentYear} {BRAND} — جميع الحقوق محفوظة ✨</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[var(--gold)] transition-colors">سياسة الخصوصية</a>
              <a href="#" className="hover:text-[var(--gold)] transition-colors">شروط الاستخدام</a>
            </div>
          </div>
        </div>

        {/* Floating CTA */}
        <div className="fixed bottom-8 right-8 z-40 hidden lg:block">
          <a
            href={`https://wa.me/${PHONE}?text=${encodeURIComponent('مرحباً، أرغب بالحجز والاستفسار عن الخدمات')}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full gold-btn text-white font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            <span>💬</span>
            <span>احجزي الآن</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
