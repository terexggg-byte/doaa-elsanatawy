import React from 'react'
import useReveal from '../hooks/useReveal'
import {PHONE} from '../config'

const items = [
  {
    icon: '👰',
    title: 'ميكاب عرايس فاخر',
    desc: 'إطلالة عروسة كاملة متناسقة تجمع بين الأناقة العصرية والنعومة الكلاسيكية',
    details: 'تصميم شامل يدوم طول اليوم مع استشارة لونية متقدمة وتجربة كاملة قَبل اليوم الكبير'
  },
  {
    icon: '💍',
    title: 'ميكاب خطوبة مميز',
    desc: 'لوك أنيق طبيعي يناسب أجواء الفرح والسعادة مع تألق العرس',
    details: 'تصميم متناسق تماماً مع الفستان والإضاءة مع التركيز على الطبيعية والانتعاش'
  },
  {
    icon: '✨',
    title: 'ميكاب سهرة براق',
    desc: 'مكياج سهرة فاخر وجريء يدوم طويلاً ويعكس شخصيتك تماماً',
    details: 'لمسات إضاءة دقيقة واحترافية وألوان مختارة تناسب جميع البشرات وألوان الملابس'
  },
  {
    icon: '📸',
    title: 'ميكاب فوتوسيشن احترافي',
    desc: 'تصميم ألوان وكونتور متقن مخصص للكاميرا والجلسات الاحترافية',
    details: 'إضاءة احترافية مع ألوان مختارة بعناية لتظهري بجمالك الحقيقي في الصور بشكل استثنائي'
  }
]

export default function Services(){
  const ref = useReveal()
  return (
    <div ref={ref} className="fade-in">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">خدماتنا المتخصصة 💄</h2>
        <p className="muted text-sm sm:text-lg md:text-xl max-w-2xl mx-auto px-4 sm:px-0">
          نقدم خدمات ميك أب متخصصة وعصرية عالية الجودة تلبي احتياجات كل مناسبة فريدة وخاصة. اختاري الخدمة المناسبة لك واحجزي استشارتك المجانية الآن!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {items.map((s, idx) => (
          <div 
            key={s.title} 
            className="service-card group cursor-pointer"
            style={{
              animation: `slideInUp 600ms cubic-bezier(0.2, 0.9, 0.3, 1) forwards`,
              animationDelay: `${idx * 100}ms`,
              opacity: 0
            }}
          >
            <div className="flex flex-col h-full">
              {/* Icon */}
              <div className="text-5xl mb-4">{s.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-[var(--charcoal)]">{s.title}</h3>

              {/* Gold Line */}
              <div className="h-1 w-12 bg-gradient-to-r from-[var(--gold)] to-[var(--rose)] rounded-full mb-4" />

              {/* Description */}
              <p className="text-gray-700 font-medium mb-3 text-sm leading-relaxed">{s.desc}</p>

              {/* Details */}
              <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                {s.details}
              </p>

              {/* CTA Button */}
              <a 
                href={`https://wa.me/${PHONE}?text=${encodeURIComponent('أرغب بالحجز لخدمة ' + s.title)}`}
                target="_blank" 
                rel="noreferrer"
                className="inline-block px-6 py-2 rounded-full gold-btn text-white font-semibold text-sm transition-all transform group-hover:scale-105"
              >
                احجزي الآن
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[var(--gold)]/10 to-[var(--rose)]/10 border-2 border-[var(--gold)]/20">
        <h3 className="text-2xl font-bold mb-4 text-center">📋 ملاحظات وسياسات مهمة</h3>
        <div className="grid md:grid-cols-2 gap-6 text-center">
          <div>
            <p className="font-semibold text-lg mb-2">⏰ ساعات وأوقات الحجز</p>
            <p className="text-gray-700">متاح طوال أيام الأسبوع مع خصم خاص للحجوزات الجماعية والعائلية</p>
          </div>
          <div>
            <p className="font-semibold text-lg mb-2">💳 الأسعار والتفاوض</p>
            <p className="text-gray-700">أسعار تنافسية وعادلة مع إمكانية رائعة للتفاوض للحجوزات الكبيرة والمجموعات</p>
          </div>
        </div>
      </div>
    </div>
  )
}
