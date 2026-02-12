import React, { useState } from 'react'
import useReveal from '../hooks/useReveal'
import {PHONE} from '../config'

const transformations = [
  {
    id: 1,
    title: 'تحول عرس كامل',
    before: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=60',
    after: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=60',
    description: 'إطلالة عروسة فاخرة من الألف إلى الياء'
  },
  {
    id: 2,
    title: 'جمال طبيعي محسّن',
    before: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=60',
    after: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=600&q=60',
    description: 'ميكاب طبيعي بدون تثقيل مع إظهار الجمال الحقيقي'
  },
  {
    id: 3,
    title: 'لوك سهرة جريء',
    before: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=60',
    after: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=600&q=60',
    description: 'جرأة وأناقة مع ألوان مختارة بعناية'
  },
  {
    id: 4,
    title: 'إشراقة طبيعية كاملة',
    before: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=60',
    after: 'https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=600&q=60',
    description: 'تحول يعكس الثقة والجمال الداخلي'
  }
]

export default function BeforeAfter(){
  const ref = useReveal()
  const [activeId, setActiveId] = useState(1)
  const [sliderPosition, setSliderPosition] = useState(50)

  const activeTransform = transformations.find(t => t.id === activeId)

  return (
    <div ref={ref} className="fade-in">
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">التحولات المذهلة ✨</h2>
        <p className="muted text-sm sm:text-lg md:text-xl max-w-2xl mx-auto px-4 sm:px-0">
          شاهدي كيف نحول الجمال الطبيعي إلى إطلالة استثنائية لا تُنسى في أهم لحظاتك
        </p>
      </div>

      {/* Before/After Slider */}
      <div className="grid lg:grid-cols-3 gap-8 items-stretch">
        {/* Main Slider */}
        <div className="lg:col-span-2">
          <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl group bg-white">
            {/* Before Image */}
            <img 
              src={activeTransform.before} 
              alt="قبل"
              className="w-full h-[250px] sm:h-[350px] md:h-[500px] object-cover"
            />
            
            {/* After Image - with slider */}
            <div 
              className="absolute inset-0 h-[500px] overflow-hidden"
              style={{width: `${sliderPosition}%`}}
            >
              <img 
                src={activeTransform.after} 
                alt="بعد"
                className="w-full h-full object-cover"
                style={{width: `calc(100vw * ${100/sliderPosition})`}}
              />
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize"
              style={{left: `${sliderPosition}%`}}
              onMouseMove={(e) => {
                if(e.buttons === 1) {
                  const rect = e.currentTarget.parentElement.getBoundingClientRect()
                  const newPos = ((e.clientX - rect.left) / rect.width) * 100
                  if(newPos > 0 && newPos < 100) setSliderPosition(newPos)
                }
              }}
              onTouchMove={(e) => {
                const rect = e.currentTarget.parentElement.getBoundingClientRect()
                const newPos = ((e.touches[0].clientX - rect.left) / rect.width) * 100
                if(newPos > 0 && newPos < 100) setSliderPosition(newPos)
              }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-[var(--gold)] rounded-full shadow-lg flex items-center justify-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 11-2 0V5H4v10h2v-2a1 1 0 112 0v2H4a1 1 0 01-1-1v-8zM15 4a1 1 0 011-1h4a1 1 0 011 1v8a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2a1 1 0 112 0v1h2V5h-2v1a1 1 0 11-2 0V4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute bottom-4 left-4 bg-black/50 px-4 py-2 rounded-full text-white text-sm font-semibold">
              قَبل
            </div>
            <div className="absolute bottom-4 right-4 bg-[var(--gold)]/80 px-4 py-2 rounded-full text-white text-sm font-semibold">
              بعد
            </div>
          </div>

          {/* Description */}
          <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-[var(--gold)]/5 to-[var(--rose)]/5 border border-[var(--gold)]/20">
            <h3 className="text-2xl font-bold mb-2 text-[var(--charcoal)]">{activeTransform.title}</h3>
            <p className="text-gray-700 text-lg">{activeTransform.description}</p>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-x-visible">
          {transformations.map((transform) => (
            <button
              key={transform.id}
              onClick={() => {
                setActiveId(transform.id)
                setSliderPosition(50)
              }}
              className={`relative flex-shrink-0 lg:flex-shrink rounded-xl overflow-hidden h-24 w-24 lg:w-full lg:h-32 transition-all border-2 ${
                activeId === transform.id 
                  ? 'border-[var(--gold)] shadow-lg scale-105' 
                  : 'border-gray-200 hover:border-[var(--gold)]/50'
              }`}
            >
              <img 
                src={transform.before}
                alt={transform.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--gold)]/20 to-black/30 flex items-end p-2">
                <span className="text-white text-xs font-semibold">{transform.title}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 p-12 rounded-2xl bg-gradient-to-r from-[var(--gold)]/10 to-[var(--rose)]/10 border-2 border-[var(--gold)]/20 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">هل أنتِ مستعدة للتحول؟</h3>
        <p className="text-gray-700 mb-8 text-lg max-w-2xl mx-auto">
          دعينا نحول جمالك الطبيعي إلى إطلالة استثنائية تعكس أسلوبك الفريد وشخصيتك المميزة
        </p>
        <a 
          href={`https://wa.me/${PHONE}?text=${encodeURIComponent('مرحباً، أرغب برؤية المزيد من التحولات وحجز جلسة')}`}
          target="_blank"
          rel="noreferrer"
          className="inline-block cta-btn gold-btn text-white px-10 py-4 rounded-full font-semibold text-lg"
        >
          احجزي الآن وحولي نفسك
        </a>
      </div>
    </div>
  )
}
