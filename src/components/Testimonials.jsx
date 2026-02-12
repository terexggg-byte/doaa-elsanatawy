import React, {useState} from 'react'
import useReveal from '../hooks/useReveal'

const testimonials = [
  {
    name: 'فاطمة محمد',
    role: 'عروسة',
    text: 'دعاء جعلتني أشعر بثقة لم أشعر بها من قبل في يومي الخاص. المكياج ظل جميلاً طول اليوم وظهرت كالحلم الذي طالما تخيلته! أنصح بها من كل قلبي 💕',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'أمل السيد',
    role: 'عميلة دائمة',
    text: 'كل مرة أحجز عند دعاء أشعر بالراحة النفسية والثقة الكاملة وبالاحترافية جداً. تستمع لكل رغباتي واحتياجاتي وتحولها إلى واقع جميل يفوق توقعاتي! ⭐',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'خولة أحمد',
    role: 'جلسة فوتوسيشن',
    text: 'النتائج في الصور كانت باهرة جداً وفوق كل التوقعات! دعاء فهمت تماماً ما يناسب الكاميرا والإضاءة الاحترافية مع الحفاظ على الطبيعية والجمال الحقيقي 📸',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'ليلى علي',
    role: 'خطوبة',
    text: 'الاستشارة اللونية المجانية ساعدتني جداً جداً في اختيار الألوان التي تناسب بشرتي تماماً. جلسة احترافية وممتعة جداً من البداية إلى النهاية! ✨',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  }
]

export default function Testimonials(){
  const ref = useReveal()
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div ref={ref} className="fade-in py-8">
      {/* Header */}
      <div className="text-center mb-16 sm:mb-20">
        <div className="inline-block badge-gold mb-4">💬 آراء العميلات</div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">ماذا تقول عميلاتنا؟</h2>
        <p className="muted text-sm sm:text-lg md:text-xl max-w-3xl mx-auto px-4 sm:px-0">
          ماذا تقول عميلاتنا السعيدات والراضيات عن تجربتهن المميزة الفاخرة معي وأثر ذلك على لحظاتهن الخاصة الذي سيبقى في الذاكرة إلى الأبد
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {testimonials.map((testimonial, idx) => (
          <div 
            key={idx}
            className="card group interactive-element cursor-pointer h-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              animation: `slideInUp 600ms cubic-bezier(0.2, 0.9, 0.3, 1) forwards`,
              animationDelay: `${idx * 100}ms`,
              opacity: 0
            }}
          >
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span 
                  key={i} 
                  className="text-xl transition-all"
                  style={{
                    color: 'var(--gold)',
                    animation: hoveredIndex === idx ? `pulse-scale 500ms ease-out ${i * 100}ms` : 'none'
                  }}
                >
                  ⭐
                </span>
              ))}
            </div>

            {/* Quote */}
            <p className="text-gray-700 font-medium mb-6 leading-relaxed italic line-clamp-5 text-sm md:text-base">
              "{testimonial.text}"
            </p>

            {/* Divider */}
            <div className="my-4 h-px bg-gradient-to-r from-[var(--gold)]/30 via-[var(--gold)]/50 to-[var(--gold)]/30"></div>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[var(--gold)]/30 group-hover:border-[var(--gold)] transition-all"
                />
                <div className="absolute -bottom-1 -right-1 text-xl">💕</div>
              </div>
              <div className="flex-1">
                <p className="font-bold text-sm text-gray-900">{testimonial.name}</p>
                <p className="text-xs text-[var(--gold)] font-semibold">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Stats - Enhanced */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[var(--gold)]/15 to-[var(--rose)]/15 border-2 border-[var(--gold)]/30 text-center">
        {[
          {value: '+500', label: 'عروسة وسيدة سعيدة', icon: '👰', color: 'text-[var(--gold)]'},
          {value: '100%', label: 'معدل رضا وتقييم ممتاز', icon: '⭐', color: 'text-yellow-500'},
          {value: '+10', label: 'سنوات من الخبرة', icon: '💎', color: 'text-rose-500'}
        ].map((stat, idx) => (
          <div 
            key={idx}
            className="group"
            style={{
              animation: `slideInUp 600ms cubic-bezier(0.2, 0.9, 0.3, 1) forwards`,
              animationDelay: `${idx * 150}ms`,
              opacity: 0
            }}
          >
            <div className={`text-5xl sm:text-6xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform`}>
              {stat.value}
            </div>
            <div className="text-2xl mb-2">
              {stat.icon}
            </div>
            <p className="text-gray-700 font-semibold text-sm sm:text-base">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Additional CTA */}
      <div className="mt-16 text-center p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[var(--gold)]/10 to-[var(--rose)]/10 border-2 border-[var(--gold)]/20">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-[var(--charcoal)]">تريدين أن تكوني جزء من قصصنا الناجحة؟</h3>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-base sm:text-lg">
          انضمي إلى مئات العميلات السعيدات اللاتي اخترن دعاء لأهم لحظات حياتهن — احجزي استشارتك المجانية الآن!
        </p>
        <a
          href={`https://wa.me/201234567890?text=${encodeURIComponent('مرحباً دعاء، أرغب بالاستفسار عن الخدمات والحجز')}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 cta-btn gold-btn text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold hover-lift shadow-gold text-base sm:text-lg"
        >
          <span>💬</span>
          <span>احجزي الآن وحققي حلمك</span>
        </a>
      </div>
    </div>
  )
}
