import React from 'react'
import useReveal from '../hooks/useReveal'

const testimonials = [
  {
    name: 'فاطمة محمد',
    role: 'عروسة',
    text: 'دعاء جعلتني أشعر بثقة لم أشعر بها من قبل في يومي الخاص. المكياج ظل جميلاً طول اليوم وظهرت كالحلم الذي طالما تخيلته! أنصح بها من كل قلبي.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'أمل السيد',
    role: 'من العميلات الدائمات',
    text: 'كل مرة أحجز عند دعاء أشعر بالراحة النفسية والثقة الكاملة وبالاحترافية جداً. تستمع لكل رغباتي واحتياجاتي وتحولها إلى واقع جميل يفوق توقعاتي!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'خولة أحمد',
    role: 'جلسة فوتوسيشن احترافية',
    text: 'النتائج في الصور كانت باهرة جداً وفوق كل التوقعات! دعاء فهمت تماماً ما يناسب الكاميرا والإضاءة الاحترافية مع الحفاظ على الطبيعية والجمال الحقيقي.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'ليلى علي',
    role: 'جلسة خطوبة',
    text: 'الاستشارة اللونية المجانية ساعدتني جداً جداً في اختيار الألوان التي تناسب بشرتي تماماً. جلسة احترافية وممتعة جداً من البداية إلى النهاية!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  }
]

export default function Testimonials(){
  const ref = useReveal()

  return (
    <div ref={ref} className="fade-in py-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">آراء عميلاتنا السعيدات 💬</h2>
        <p className="muted text-sm sm:text-lg md:text-xl max-w-2xl mx-auto px-4 sm:px-0">
          ماذا تقول عميلاتنا السعيدات والراضيات عن تجربتهن المميزة والفاخرة معي و اثر ذلك على لحظاتهن الخاصة والذي سيبقى في الذاكرة إلى الأبد
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((testimonial, idx) => (
          <div 
            key={idx}
            className="card group"
            style={{
              animation: `slideInUp 600ms cubic-bezier(0.2, 0.9, 0.3, 1) forwards`,
              animationDelay: `${idx * 100}ms`,
              opacity: 0
            }}
          >
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="text-xl text-[var(--gold)]">⭐</span>
              ))}
            </div>

            {/* Quote */}
            <p className="text-gray-700 font-medium mb-6 leading-relaxed italic line-clamp-4">
              "{testimonial.text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
              <img 
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-sm text-gray-900">{testimonial.name}</p>
                <p className="text-xs text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Stats */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center p-12 rounded-2xl bg-gradient-to-r from-[var(--gold)]/10 to-[var(--rose)]/10 border-2 border-[var(--gold)]/20">
        <div>
          <h3 className="text-4xl font-bold text-[var(--gold)] mb-2">+500</h3>
          <p className="text-gray-700 font-semibold">عروسة وسيدة سعيدة وراضية</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-[var(--gold)] mb-2">100%</h3>
          <p className="text-gray-700 font-semibold">معدل رضا وتقييم ممتاز</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-[var(--gold)] mb-2">+10</h3>
          <p className="text-gray-700 font-semibold">سنوات من الخبرة الاحترافية</p>
        </div>
      </div>
    </div>
  )
}
