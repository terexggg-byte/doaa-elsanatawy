import React from 'react'
import useReveal from '../hooks/useReveal'
import {PHONE} from '../config'

const packages = [
  {
    id: 1,
    name: 'الحزمة الأساسية',
    price: 'مخصصة',
    icon: '💄',
    description: 'لمن تريد ميك أب احترافي بسيط',
    features: [
      'ميك أب احترافي كامل',
      'استشارة لونية سريعة',
      'منتجات عالمية',
      'يدوم 8-10 ساعات'
    ],
    color: 'from-yellow-100',
    highlighted: false
  },
  {
    id: 2,
    name: 'الحزمة الفاخرة',
    price: 'مخصصة',
    icon: '👑',
    description: 'الخيار الأمثل للأيام المهمة',
    features: [
      'ميك أب فاخر شامل',
      'استشارة لونية متقدمة',
      'تصميم خاص مناسب لك',
      'منتجات فاخرة عالمية',
      'يدوم 12+ ساعة',
      'دعم يوم الفرح'
    ],
    color: 'from-[var(--gold)]',
    highlighted: true
  },
  {
    id: 3,
    name: 'الحزمة الذهبية',
    price: 'مخصصة',
    icon: '✨',
    description: 'للجلسات التصويرية الاحترافية',
    features: [
      'ميك أب احترافي للكاميرا',
      'استشارة لونية متقدمة للضوء',
      'تصميم كونتور احترافي',
      'ألوان تناسب الإضاءة',
      'تطبيق احترافي للكاميرا',
      'متابعة ما قبل الجلسة'
    ],
    color: 'from-yellow-400',
    highlighted: false
  },
  {
    id: 4,
    name: 'حزمة المجموعة',
    price: 'خصومات خاصة',
    icon: '💑',
    description: 'عروس، صديقات، عائلة',
    features: [
      'خصم 15-20% للعرايس',
      'خصم 10-20% للمجموعات',
      'ميك أب متناسق',
      'استشارات مجانية',
      'أولوية في الحجز',
      'دعم كامل في اليوم'
    ],
    color: 'from-pink-100',
    highlighted: false
  }
]

const offers = [
  {
    title: 'عرض الخطوبة',
    desc: 'ميك أب + استشارة لونية مع صورة تذكارية',
    badge: 'عرض خاص'
  },
  {
    title: 'حزمة الفرح الكاملة',
    desc: 'ميك أب عرس فاخر + ميك أب للعروس الأم + صديقات',
    badge: 'شاملة'
  },
  {
    title: 'جلسات تصوير',
    desc: 'ميك أب احترافي + ألوان خاصة بالإضاءة',
    badge: 'متخصصة'
  },
  {
    title: 'عرض الصديقات',
    desc: 'ميك أب للمجموعات بخصم يصل 15%',
    badge: 'خصم'
  }
]

export default function Packages(){
  const ref = useReveal()

  return (
    <div ref={ref} className="fade-in">
      {/* Packages Section */}
      <div>
        <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">الحزم والعروض 🎁</h2>
        <p className="muted text-sm sm:text-lg md:text-xl max-w-2xl mx-auto px-4 sm:px-0">
            اختاري الحزمة المناسبة لحدثك الخاص — جميع الأسعار مرنة وقابلة للتفاوض
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                pkg.highlighted ? 'lg:scale-105 shadow-2xl' : ''
              }`}
              style={{
                animation: `slideInUp 600ms cubic-bezier(0.2, 0.9, 0.3, 1) forwards`,
                animationDelay: `${pkg.id * 100}ms`,
                opacity: 0
              }}
            >
              {/* Badge */}
              {pkg.highlighted && (
                <div className="absolute top-0 left-0 right-0 bg-[var(--gold)] text-white py-2 text-center font-bold text-sm">
                  ⭐ الأكثر اختياراً
                </div>
              )}

              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${pkg.color} to-transparent opacity-10`}></div>

              {/* Content */}
              <div className="relative p-6 bg-white">
                {/* Icon */}
                <div className="text-5xl mb-4">{pkg.icon}</div>

                {/* Name */}
                <h3 className="text-2xl font-bold mb-2 text-[var(--charcoal)]">{pkg.name}</h3>

                {/* Price */}
                <div className="mb-4">
                  <p className="text-3xl font-bold text-[var(--gold)] mb-1">{pkg.price}</p>
                  <p className="text-sm text-gray-600 mb-4">{pkg.description}</p>
                </div>

                {/* Gold Line */}
                <div className="h-1 w-12 bg-gradient-to-r from-[var(--gold)] to-[var(--rose)] rounded-full mb-6" />

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-[var(--gold)] font-bold text-lg">✓</span>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href={`https://wa.me/${PHONE}?text=${encodeURIComponent(`مرحباً، أرغب بحجز ${pkg.name}`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`block text-center py-3 px-4 rounded-full font-semibold transition-all ${
                    pkg.highlighted
                      ? 'gold-btn text-white'
                      : 'bg-gray-100 text-[var(--charcoal)] hover:bg-[var(--gold)]/10'
                  }`}
                >
                  احجزي الآن
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Special Offers */}
      <div className="my-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">العروض الخاصة 🎉</h2>
          <p className="muted text-lg md:text-xl max-w-2xl mx-auto">
            عروض محدودة الوقت لتوفيري على طلبك الخاص
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offers.map((offer, idx) => (
            <div
              key={idx}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-white via-[var(--soft-pink)]/5 to-[var(--gold)]/5 border-2 border-[var(--gold)]/20 hover:border-[var(--gold)]/40 transition-all"
              style={{
                animation: `slideInUp 600ms cubic-bezier(0.2, 0.9, 0.3, 1) forwards`,
                animationDelay: `${idx * 100}ms`,
                opacity: 0
              }}
            >
              {/* Badge */}
              <div className="absolute -top-3 -right-3 bg-[var(--gold)] text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                {offer.badge}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-3 text-[var(--charcoal)]">{offer.title}</h3>
              <p className="text-gray-700 mb-6 text-lg">{offer.desc}</p>

              {/* CTA */}
              <a
                href={`https://wa.me/${PHONE}?text=${encodeURIComponent(`مرحباً، أرغب بمعرفة المزيد عن عرض: ${offer.title}`)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-block px-6 py-2 rounded-full gold-btn text-white font-semibold text-sm"
              >
                اعرفي المزيد
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Price Info Box */}
      <div className="p-10 rounded-2xl bg-gradient-to-r from-[var(--charcoal)] to-black text-white">
        <h3 className="text-2xl font-bold mb-4">💰 معلومات مهمة عن الأسعار</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="font-semibold text-lg mb-2">✨ لا توجد أسعار محددة</p>
            <p className="text-gray-300">كل حجز مختلف بناءً على احتياجاتك ومتطلباتك الخاصة، لذا نفضل التواصل المباشر</p>
          </div>
          <div>
            <p className="font-semibold text-lg mb-2">🎁 خصومات وعروض</p>
            <p className="text-gray-300">خصم 15-20% للحجوزات الجماعية والعائلية — تواصلي معي لمعرفة أحدث العروض</p>
          </div>
        </div>
      </div>
    </div>
  )
}
