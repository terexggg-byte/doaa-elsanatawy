import React, {useState} from 'react'
import useReveal from '../hooks/useReveal'

const IMAGES = [
  {src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=60', title: 'ميكاب عروسة'},
  {src: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=800&q=60', title: 'خطوبة'},
  {src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=60', title: 'سهرة'},
  {src: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=800&q=60', title: 'فوتوسيشن'},
  {src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=60', title: 'ميكاج طبيعي'},
  {src: 'https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=800&q=60', title: 'إطلالة مميزة'}
]

export default function Portfolio(){
  const ref = useReveal()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(null)

  return (
    <div ref={ref} className="fade-in">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">معرض أعمالنا الفاخر 🎨</h2>
        <p className="muted text-sm sm:text-lg md:text-xl max-w-2xl mx-auto px-4 sm:px-0">
          مجموعة مختارة بعناية من أجمل الجلسات الفاخرة والإطلالات المميزة — يبرز تركيزنا على الدقة والجمال والطبيعية الأصلية
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {IMAGES.map((item, i) => (
          <div 
            key={i} 
            className="group overflow-hidden rounded-xl cursor-pointer card image-frame relative"
            onClick={() => { setActive(item.src); setOpen(true); }}
            style={{
              animation: `slideInUp 500ms cubic-bezier(0.2, 0.9, 0.3, 1) forwards`,
              animationDelay: `${i * 50}ms`,
              opacity: 0
            }}
          >
            <div className="relative overflow-hidden h-72 bg-gradient-to-br from-gray-100 to-gray-50">
              <img 
                loading="lazy" 
                src={item.src} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                <div className="backdrop-blur-sm bg-white/15 px-4 py-2 rounded-lg border border-white/30 text-white text-sm font-medium">
                  {item.title}
                </div>
              </div>

              {/* Icon Indicator */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/40">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.5 1.5H5.75A4.25 4.25 0 001.5 5.75v8.5A4.25 4.25 0 005.75 18.5h8.5a4.25 4.25 0 004.25-4.25V9.5M18.5 1.5l-9 9M18.5 1.5h-5M18.5 1.5v5"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Gallery Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" onClick={() => setOpen(false)}>
          <div className="modal-center lux-shadow-lg max-h-[90vh] flex items-center justify-center animate-fadeIn">
            <button 
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
              aria-label="إغلاق"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
            <img src={active} alt="معاينة كاملة" className="w-full h-auto object-contain rounded-lg" />
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="mt-16 p-10 rounded-2xl bg-gradient-to-r from-[var(--gold)]/10 to-[var(--rose)]/10 border-2 border-[var(--gold)]/20 text-center">
        <h3 className="text-2xl font-bold mb-3">أعجبتك أعمالنا؟</h3>
        <p className="text-gray-700 mb-6">استعيدي ثقتك بنفسك واظهري بأجمل صورة في يومك الخاص الذي طالما حلمتِ به</p>
        <a 
          href="#services"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#services')?.scrollIntoView({behavior: 'smooth'});
          }}
          className="inline-block cta-btn gold-btn text-white px-8 py-3 rounded-full font-semibold"
        >
          استكشفي خدماتنا المتخصصة
        </a>
      </div>
    </div>
  )
}
