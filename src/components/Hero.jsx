import React from 'react'
import {PHONE, BRAND} from '../config'

export default function Hero(){
  const scrollTo = (id)=>{
    const el = document.querySelector(id)
    if(el) el.scrollIntoView({behavior:'smooth', block:'start'})
  }

  const stats = [
    { label: 'عرس مميز', value: '+500' },
    { label: 'عميلة سعيدة', value: '100%' },
    { label: 'سنة خبرة', value: '+10' }
  ]

  return (
    <section aria-label="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20" style={{backgroundImage:"url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=2000&q=80')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
      {/* Enhanced Overlay */}
      <div className="absolute inset-0 hero-overlay"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-[var(--gold)] rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-32 left-5 w-40 h-40 bg-[var(--rose)] rounded-full opacity-5 blur-3xl"></div>

      <div className="relative z-10 flex items-center justify-center min-h-screen w-full">
        <div className="text-center text-white px-4 sm:px-6 max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="font-bold mb-4 sm:mb-6 reveal delay-200 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            {BRAND}
          </h1>
          
          {/* Subtitle with animation */}
          <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 reveal delay-200 font-semibold tracking-wide opacity-95">
            ✨ فن التجميل الاحترافي الفاخر بأعلى معايير الجودة العالمية المتقدمة ✨
          </p>

          {/* Gold Divider */}
          <div className="flex justify-center reveal delay-400 mb-8">
            <div className="h-1 w-24 bg-gradient-to-r from-[var(--gold)] to-[var(--rose)] rounded-full"/>
          </div>

          {/* Main Description */}
          <p className="mb-4 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed opacity-95 reveal delay-400 max-w-2xl mx-auto">
            تحويل رؤيتك الجميلة إلى إطلالة استثنائية فريدة — بدقة احترافية عالية وتفاني كامل في كل لحظة من لحظات يومك الخاص الذي طالما حلمتِ به
          </p>

          {/* Sub description */}
          <p className="mb-6 sm:mb-10 text-xs sm:text-sm opacity-85 reveal delay-400 max-w-2xl mx-auto">
            عرايس فاخرة وراقية • خطوبات مميزة وجميلة • سهرات براقة وساحرة • جلسات تصوير احترافية عالمية مستوى • إطلالات متقنة من الألف إلى الياء
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row justify-center items-center">
            <button 
              onClick={()=>scrollTo('#works')} 
              className="cta-btn cta-outline reveal delay-400 w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base"
            >
              شاهدي معرض أعمالنا المميزة
            </button>
            <a 
              href={`https://wa.me/${PHONE}?text=${encodeURIComponent('مرحباً، أرغب بالاستفسار عن الخدمات والأسعار وحجز موعد')}`}
              target="_blank"
              rel="noreferrer"
              className="cta-btn gold-btn text-white reveal delay-400 w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold"
            >
              احجزي استشارتك المجانية الآن
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 sm:mt-16 reveal delay-600 flex justify-center gap-4 sm:gap-8 text-xs sm:text-sm opacity-90 flex-wrap">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-lg sm:text-2xl">👰</span>
              <span>500+ عروسة</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-lg sm:text-2xl">⭐</span>
              <span>تقييم 5 نجوم</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-lg sm:text-2xl">💄</span>
              <span>منتجات عالمية</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce reveal delay-600 z-10">
        <svg className="w-6 h-6 text-white opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
