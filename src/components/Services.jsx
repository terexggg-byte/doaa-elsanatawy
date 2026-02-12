import React from 'react'
import useReveal from '../hooks/useReveal'
import {PHONE} from '../config'

const items = [
  {
    icon: '👰',
    title: 'ميكاب عرايس فاخر',
    shortDesc: 'إطلالة عروسة كاملة متناسقة',
    desc: 'إطلالة عروسة كاملة متناسقة تجمع بين الأناقة العصرية والنعومة الكلاسيكية',
    details: 'تصميم شامل يدوم طول اليوم مع استشارة لونية متقدمة وتجربة كاملة قَبل اليوم الكبير',
    perks: ['استشارة لونية مجانية', 'تجربة كاملة قبل اليوم', 'يدوم 12+ ساعة', 'دعم يوم العرس']
  },
  {
    icon: '💍',
    title: 'ميكاب خطوبة مميز',
    shortDesc: 'لوك أنيق طبيعي ومتألق',
    desc: 'لوك أنيق طبيعي يناسب أجواء الفرح والسعادة مع تألق العرس',
    details: 'تصميم متناسق تماماً مع الفستان والإضاءة مع التركيز على الطبيعية والانتعاش',
    perks: ['تصميم متناسق', 'ألوان فرح وسعادة', 'طبيعي وأنيق', 'ثبات طويل الأمد']
  },
  {
    icon: '✨',
    title: 'ميكاب سهرة براق',
    shortDesc: 'مكياج سهرة فاخر وجريء',
    desc: 'مكياج سهرة فاخر وجريء يدوم طويلاً ويعكس شخصيتك تماماً',
    details: 'لمسات إضاءة دقيقة واحترافية وألوان مختارة تناسب جميع البشرات وألوان الملابس',
    perks: ['ألوان جريئة وراقية', 'لمسات إضاءة احترافية', 'يدوم 10-12 ساعة', 'شخصي وفريد']
  },
  {
    icon: '📸',
    title: 'ميكاب فوتوسيشن احترافي',
    shortDesc: 'تصميم مخصص للكاميرا',
    desc: 'تصميم ألوان وكونتور متقن مخصص للكاميرا والجلسات الاحترافية',
    details: 'إضاءة احترافية مع ألوان مختارة بعناية لتظهري بجمالك الحقيقي في الصور بشكل استثنائي',
    perks: ['تصميم خاص للكاميرا', 'تحليل الإضاءة', 'كونتور احترافي', 'ألوان طبيعية وجميلة']
  }
]

export default function Services(){
  const ref = useReveal()
  return (
    <div ref={ref} className="fade-in">
      {/* Header */}
      <div className="text-center mb-16 sm:mb-20">
        <div className="inline-block badge-gold mb-4">💄 خدماتنا المتخصصة</div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">خدمات ميك أب فاخرة</h2>
        <p className="muted text-sm sm:text-lg md:text-xl max-w-3xl mx-auto px-4 sm:px-0">
          نقدم خدمات ميك أب متخصصة وعصرية <span className="text-[var(--gold)] font-semibold">عالية الجودة</span> تلبي احتياجات كل مناسبة فريدة وخاصة. اختاري الخدمة المناسبة لك!
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
        {items.map((s, idx) => (
          <div 
            key={s.title} 
            className="service-card group interactive-element"
            style={{
              animation: `slideInUp 600ms cubic-bezier(0.2, 0.9, 0.3, 1) forwards`,
              animationDelay: `${idx * 100}ms`,
              opacity: 0
            }}
          >
            <div className="flex flex-col h-full">
              {/* Icon - Animated */}
              <div className="text-6xl mb-4 group-hover:scale-125 group-hover:rotate-6 transition-all duration-300 origin-left">{s.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-2 text-[var(--charcoal)]">{s.title}</h3>

              {/* Gold Line */}
              <div className="h-1 w-12 bg-gradient-to-r from-[var(--gold)] to-[var(--rose)] rounded-full mb-4 group-hover:w-full transition-all duration-500" />

              {/* Description */}
              <p className="text-gray-700 font-medium mb-3 text-sm leading-relaxed">{s.desc}</p>

              {/* Details */}
              <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                {s.details}
              </p>

              {/* Perks */}
              <ul className="mb-6 space-y-2">
                {s.perks.map((perk, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-gray-700">
                    <span className="text-[var(--gold)] font-bold">✦</span>
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a 
                href={`https://wa.me/${PHONE}?text=${encodeURIComponent('مرحباً دعاء، أرغب بحجز خدمة: ' + s.title)}`}
                target="_blank" 
                rel="noreferrer"
                className="inline-block px-6 py-2.5 rounded-full gold-btn text-white font-semibold text-sm transition-all transform group-hover:scale-110 group-hover:shadow-gold"
              >
                احجزي الآن
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Info Section */}
      <div className="mt-20 p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[var(--gold)]/10 to-[var(--rose)]/10 border-2 border-[var(--gold)]/20">
        <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-[var(--charcoal)]">📋 معلومات مهمة عن الخدمات</h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border-l-4 border-[var(--gold)]">
              <p className="font-bold text-lg mb-2 flex items-center gap-2">
                <span>⏰</span>
                <span>ساعات وأوقات الحجز</span>
              </p>
              <p className="text-gray-700">متاح طوال أيام الأسبوع مع خصم خاص للحجوزات الجماعية والعائلية. نوفر مرونة في الأوقات حسب احتياجاتك الخاصة.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border-l-4 border-[var(--rose)]">
              <p className="font-bold text-lg mb-2 flex items-center gap-2">
                <span>✨</span>
                <span>جودة الخدمة</span>
              </p>
              <p className="text-gray-700">نستخدم أفضل المنتجات العالمية الموثوقة والأصلية فقط، مع تدريب مستمر على أحدث التقنيات العالمية.</p>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border-l-4 border-[var(--gold)]">
              <p className="font-bold text-lg mb-2 flex items-center gap-2">
                <span>💳</span>
                <span>الأسعار والتفاوض</span>
              </p>
              <p className="text-gray-700">أسعار تنافسية وعادلة مع إمكانية رائعة للتفاوض للحجوزات الكبيرة والمجموعات — لا تترددي في التواصل!</p>
            </div>

            <div className="bg-white p-6 rounded-xl border-l-4 border-[var(--rose)]">
              <p className="font-bold text-lg mb-2 flex items-center gap-2">
                <span>💬</span>
                <span>استشارة مجانية</span>
              </p>
              <p className="text-gray-700">كل حجز يتضمن استشارة لونية شخصية مجانية. تواصلي معنا الآن لمعرفة المزيد والحجز!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
