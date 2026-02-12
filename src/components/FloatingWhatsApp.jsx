import React, {useState, useRef, useEffect} from 'react'
import {PHONE} from '../config'

export default function FloatingWhatsApp(){
  const [open, setOpen] = useState(false)
  const panelRef = useRef()

  useEffect(()=>{
    const onDoc = (e)=>{ if(panelRef.current && !panelRef.current.contains(e.target)) setOpen(false) }
    const onKey = (e)=>{ if(e.key === 'Escape') setOpen(false) }
    document.addEventListener('click', onDoc)
    document.addEventListener('keydown', onKey)
    return ()=> { document.removeEventListener('click', onDoc); document.removeEventListener('keydown', onKey) }
  },[])

  const makeLink = (branch, extras='')=> `https://wa.me/${PHONE}?text=${encodeURIComponent(`مرحباً، أرغب بالحجز - فرع ${branch} ${extras}`)}`

  const quickMessages = [
    { icon: '👰', text: 'حجز عروسة', link: makeLink('العام', 'ميكاب عروسة') },
    { icon: '💍', text: 'حجز خطوبة', link: makeLink('العام', 'ميكاب خطوبة') },
    { icon: '✨', text: 'حجز سهرة', link: makeLink('العام', 'ميكاب سهرة') },
    { icon: '📸', text: 'فوتوسيشن', link: makeLink('العام', 'ميكاب فوتوسيشن') },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-40" ref={panelRef}>
      {/* Floating Button */}
      <button
        id="whatsapp-button"
        aria-label="فتح محادثة واتساب"
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
        className="w-16 h-16 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl focus-visible:ring-4 focus:ring-[var(--gold)]/30 transition-all transform hover:scale-110 bg-gradient-to-br from-[#25D366] to-[#128C7E]"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M20.52 3.48A11.94 11.94 0 0 0 12.01 0C5.38 0 .02 5.36.02 12c0 2.12.56 4.09 1.63 5.8L0 24l6.52-1.69A11.93 11.93 0 0 0 12 24c6.62 0 12-5.36 12-12 0-3.21-1.25-6.2-3.48-8.52zM12 21.5c-1.36 0-2.69-.33-3.86-.96l-.28-.15-3.88 1.01 1-3.78-.18-.31A8.5 8.5 0 1 1 20.5 12 8.49 8.49 0 0 1 12 21.5z" />
        </svg>
      </button>

      {/* Floating Panel */}
      {open && (
        <div className="absolute bottom-20 right-0 w-80 bg-white rounded-2xl lux-shadow-lg p-6 text-right animate-fadeIn">
          {/* Header */}
          <div className="mb-4 pb-4 border-b border-gray-200">
            <h3 className="font-bold text-lg text-[var(--charcoal)] mb-1">مرحباً! 👋</h3>
            <p className="text-sm text-gray-600">اختاري الخدمة المطلوبة أو أرسلي رسالة عامة</p>
          </div>

          {/* Quick Message Buttons */}
          <div className="space-y-3 mb-4">
            {quickMessages.map((msg, idx) => (
              <a
                key={idx}
                href={msg.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg border-2 border-[var(--gold)]/20 hover:border-[var(--gold)]/60 hover:bg-[var(--gold)]/5 transition-all text-gray-700 hover:text-[var(--gold)]"
              >
                <span className="text-2xl">{msg.icon}</span>
                <span className="text-sm font-medium">{msg.text}</span>
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-[var(--gold)]/20 to-transparent mb-4"></div>

          {/* Branch Selection */}
          <div className="mb-4">
            <p className="text-xs font-semibold text-gray-600 mb-2">أختاري الفرع:</p>
            <div className="flex gap-2">
              <a
                href={makeLink('الزقازيق')}
                target="_blank"
                rel="noreferrer"
                className="flex-1 px-3 py-2 rounded-lg text-sm font-semibold border-2 border-[var(--gold)]/30 hover:border-[var(--gold)] hover:bg-[var(--gold)]/10 text-gray-700 transition-all"
              >
                الزقازيق
              </a>
              <a
                href={makeLink('أبو حماد')}
                target="_blank"
                rel="noreferrer"
                className="flex-1 px-3 py-2 rounded-lg text-sm font-semibold border-2 border-[var(--gold)]/30 hover:border-[var(--gold)] hover:bg-[var(--gold)]/10 text-gray-700 transition-all"
              >
                أبو حماد
              </a>
            </div>
          </div>

          {/* Main CTA */}
          <a
            href={makeLink('العام', 'أرغب باستفسار عام')}
            target="_blank"
            rel="noreferrer"
            className="w-full block text-center px-4 py-3 rounded-full gold-btn text-white font-bold transition-all hover:shadow-lg"
          >
            💬 أرسلي رسالة الآن
          </a>

          {/* Close Hint */}
          <p className="text-xs text-gray-500 mt-3 text-center">اضغطي خارج القائمة أو الـ ESC للإغلاق</p>
        </div>
      )}
    </div>
  )
}
