import React, {useState} from 'react'
import useReveal from '../hooks/useReveal'

const IMAGES = [
  {src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=60', title: 'ميكاب عروسة فاخر', category: 'عروس'},
  {src: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=800&q=60', title: 'خطوبة مميزة', category: 'خطوبة'},
  {src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=60', title: 'سهرة براقة', category: 'سهرة'},
  {src: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=800&q=60', title: 'فوتوسيشن احترافي', category: 'تصوير'},
  {src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=60', title: 'ميكاج طبيعي', category: 'يومي'},
  {src: 'https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=800&q=60', title: 'إطلالة مميزة', category: 'عروس'}
]

const categories = ['الكل', ...new Set(IMAGES.map(img => img.category))]

export default function Portfolio(){
  const ref = useReveal()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(null)
  const [activeCategory, setActiveCategory] = useState('الكل')

  const filteredImages = activeCategory === 'الكل' 
    ? IMAGES 
    : IMAGES.filter(img => img.category === activeCategory)

  return (
    <div ref={ref} className="fade-in">
      {/* Header */}
      <div className="text-center mb-12 sm:mb-16">
        <div className="inline-block badge-gold mb-4">🎨 معرض أعمالنا</div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">معرض الأعمال الفاخر</h2>
        <p className="muted text-sm sm:text-lg md:text-xl max-w-3xl mx-auto px-4 sm:px-0">
          مجموعة مختارة بعناية من أجمل الإطلالات والجلسات الفاخرة — نبرز تركيزنا على <span className="text-[var(--gold)] font-semibold">الدقة والجمال والطبيعية</span>
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-3 mb-12 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full font-semibold transition-all text-sm sm:text-base ${
              activeCategory === cat
                ? 'gold-btn text-white shadow-gold'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
        {filteredImages.map((item, i) => (
          <div 
            key={item.src}
            className="group overflow-hidden rounded-2xl card image-frame relative cursor-pointer hover-lift"
            onClick={() => { setActive(item); setOpen(true); }}
            style={{
              animation: `slideInUp 500ms cubic-bezier(0.2, 0.9, 0.3, 1) forwards`,
              animationDelay: `${i * 60}ms`,
              opacity: 0
            }}
          >
            {/* Image Container */}
            <div className="relative overflow-hidden h-72 bg-gradient-to-br from-gray-100 to-gray-50">
              <img 
                loading="lazy" 
                src={item.src} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-120"
              />
              
              {/* Enhanced Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-end justify-between p-6">
                <div className="self-end">
                  <span className="text-[var(--gold)] text-xs font-semibold uppercase tracking-wider">{item.category}</span>
                </div>
                <div className="backdrop-blur-md bg-white/10 px-4 py-3 rounded-xl border border-white/30 text-white">
                  <p className="font-bold">{item.title}</p>
                </div>
              </div>

              {/* Floating Icon Indicator */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 group-hover:bg-white/30 transition-all">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.5 1.5H5.75A4.25 4.25 0 001.5 5.75v8.5A4.25 4.25 0 005.75 18.5h8.5a4.25 4.25 0 004.25-4.25V9.5M18.5 1.5l-9 9M18.5 1.5h-5M18.5 1.5v5"/>
                  </svg>
                </div>
              </div>

              {/* Badge */}
              <span className="absolute top-4 left-4 bg-[var(--gold)] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                ⭐ اختيارنا
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Gallery Modal - Enhanced */}
      {open && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-fadeIn"
          onClick={() => setOpen(false)}
        >
          <div className="relative modal-center lux-shadow-lg max-h-[90vh] overflow-auto">
            {/* Close Button */}
            <button 
              onClick={(e) => {
                e.stopPropagation()
                setOpen(false)
              }}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all z-10 backdrop-blur-md"
              aria-label="إغلاق"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>

            {/* Image */}
            <div className="flex flex-col items-center justify-center">
              <img 
                src={active?.src} 
                alt={active?.title} 
                className="w-full h-auto object-contain rounded-lg max-w-4xl" 
              />
              
              {/* Image Info */}
              <div className="bg-gradient-to-r from-[var(--gold)]/10 to-[var(--rose)]/10 w-full mt-6 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold text-[var(--charcoal)] mb-2">{active?.title}</h3>
                <p className="text-gray-600">التصنيف: <span className="font-semibold text-[var(--gold)]">{active?.category}</span></p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action Section */}
      <div className="mt-16 p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[var(--gold)]/15 to-[var(--rose)]/15 border-2 border-[var(--gold)]/30 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-[var(--charcoal)]">أعجبتك أعمالنا؟ 💎</h3>
          <p className="text-gray-700 mb-8 text-base sm:text-lg">
            استعيدي ثقتك بنفسك واظهري بأجمل صورة في يومك الخاص الذي طالما حلمتِ به — جرّبي خدماتنا المتميزة الآن
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#services"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#services')?.scrollIntoView({behavior: 'smooth', block: 'start'})
              }}
              className="inline-flex items-center justify-center gap-2 cta-btn gold-btn text-white px-8 py-3 rounded-full font-semibold hover-lift shadow-gold"
            >
              <span>💄</span>
              <span>استكشفي خدماتنا</span>
            </a>
            <a 
              href={`https://wa.me/201234567890?text=${encodeURIComponent('مرحباً دعاء، أرغب بالحجز')}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-white/80 hover:bg-white text-[var(--charcoal)] font-semibold transition-all"
            >
              <span>📞</span>
              <span>احجزي الآن</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
