import React from 'react'
import useReveal from '../hooks/useReveal'
import {PHONE} from '../config'

export default function Branches(){
  const ref = useReveal()
  const branches = [
    {
      id: 1,
      name: 'فرع الزقازيق',
      address: 'الزقازيق — شارع المحمودية (بجوار مول الزقازيق)',
      hours: 'من 10 صباحاً إلى 9 مساءً',
      phone: PHONE,
      image: '📍',
      features: ['موقع مميز', 'استقبال فاخر', 'خدمة شاي وقهوة']
    },
    {
      id: 2,
      name: 'فرع أبو حماد',
      address: 'أبو حماد — الشارع الرئيسي (بجوار السوق)',
      hours: 'من 10 صباحاً إلى 8 مساءً',
      phone: PHONE,
      image: '🌟',
      features: ['جو مريح', 'أجهزة عصرية', 'كراسي مريحة']
    }
  ]

  return (
    <div ref={ref} className="fade-in">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">فروعنا المميزة 📍</h2>
        <p className="muted text-sm sm:text-lg md:text-xl max-w-2xl mx-auto px-4 sm:px-0">
          اختاري الفرع الأقرب إليك والذي يناسب احتياجاتك — نحن ننتظر حجزك بكل حماس وشغف!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {branches.map((branch, idx) => (
          <div 
            key={branch.id}
            className="card group"
            style={{
              animation: `slideInUp 600ms cubic-bezier(0.2, 0.9, 0.3, 1) forwards`,
              animationDelay: `${idx * 100}ms`,
              opacity: 0
            }}
          >
            {/* Branch Icon */}
            <div className="text-5xl mb-4">{branch.image}</div>

            {/* Branch Name */}
            <h3 className="text-2xl font-bold mb-2 text-[var(--charcoal)]">{branch.name}</h3>
            
            {/* Gold Divider */}
            <div className="h-1 w-12 bg-gradient-to-r from-[var(--gold)] to-[var(--rose)] rounded-full mb-4" />

            {/* Details */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <span className="text-xl">📍</span>
                <div>
                  <p className="font-semibold text-sm text-gray-900">العنوان</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{branch.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl">⏰</span>
                <div>
                  <p className="font-semibold text-sm text-gray-900">ساعات التشغيل</p>
                  <p className="text-gray-700 text-sm">{branch.hours}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl">📞</span>
                <div>
                  <p className="font-semibold text-sm text-gray-900">للتواصل</p>
                  <a href={`https://wa.me/${branch.phone}`} className="text-[var(--gold)] font-semibold text-sm hover:underline">
                    تواصلي عبر واتساب
                  </a>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="mb-6 pb-6 border-b border-gray-200">
              <p className="text-xs font-semibold text-gray-600 mb-3">المميزات:</p>
              <div className="flex flex-wrap gap-2">
                {branch.features.map((feature, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-[var(--gold)]/10 text-gray-700 text-xs font-medium">
                    ✨ {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <a 
              href={`https://wa.me/${branch.phone}?text=${encodeURIComponent(`مرحباً، أرغب بالحجز - فرع ${branch.name}`)}`}
              target="_blank"
              rel="noreferrer"
              className="w-full inline-block text-center px-6 py-3 rounded-full gold-btn text-white font-semibold transition-all hover:shadow-lg"
            >
              احجزي الآن في هذا الفرع
            </a>
          </div>
        ))}
      </div>

      {/* Info Box */}
      <div className="p-10 rounded-2xl bg-gradient-to-r from-[var(--gold)]/10 to-[var(--rose)]/10 border-2 border-[var(--gold)]/20">
        <h3 className="text-2xl font-bold mb-4 text-center">💡 معلومة مهمة جداً</h3>
        <p className="text-center text-gray-700 mb-6">
          لا تقلقي! إذا أردتِ حجز جلسة في منزلك أو مكان معين أو موقع خاص يناسبك، يمكنك التواصل معي بكل سهولة عبر واتساب والاتفاق على موقع مختلف مناسب لك تماماً!
        </p>
        <div className="text-center">
          <a 
            href={`https://wa.me/${PHONE}?text=${encodeURIComponent('مرحباً، أرغب بحجز جلسة ميك أب خاصة في مكان معين')}`}
            target="_blank"
            rel="noreferrer"
            className="inline-block px-8 py-3 rounded-full gold-btn text-white font-semibold hover:shadow-lg transition-all"
          >
            تواصلي معي الآن
          </a>
        </div>
      </div>
    </div>
  )
}
