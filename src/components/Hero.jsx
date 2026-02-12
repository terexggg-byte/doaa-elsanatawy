import React from 'react'
import {PHONE, BRAND} from '../config'

export default function Hero(){
  const scrollTo = (id)=>{
    const el = document.querySelector(id)
    if(el) el.scrollIntoView({behavior:'smooth', block:'start'})
  }

  const stats = [
    { label: 'عرس مميز', value: '+500', icon: '👰' },
    { label: 'عميلة سعيدة', value: '100%', icon: '⭐' },
    { label: 'سنة خبرة', value: '+10', icon: '💎' }
  ]

  return (
    <section aria-label="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 pb-16" style={{
      backgroundImage:"url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=2000&q=80')", 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      {/* Premium Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
      
      {/* Animated Gradient Blobs */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-[var(--gold)] rounded-full opacity-10 blur-3xl animate-pulse-scale"></div>
      <div className="absolute bottom-32 left-5 w-48 h-48 bg-[var(--rose)] rounded-full opacity-10 blur-3xl animate-float-animation"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-[var(--gold)]/60 rounded-full opacity-5 blur-3xl"></div>

      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)] w-full">
        <div className="text-center text-white px-4 sm:px-6 max-w-5xl mx-auto py-12">
          {/* Premium Badge */}
          <div className="inline-block mb-6 reveal delay-100">
            <div className="badge-gold backdrop-blur-md">
              ✨ متخصصة ميك أب عالمي فاخر
            </div>
          </div>

          {/* Main Heading with Premium Effect */}
          <h1 className="font-extrabold mb-6 reveal delay-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-shadow-gold" style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #E8D4AD 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            {BRAND}
          </h1>
          
          {/* Subtitle with Animation */}
          <p className="text-lg sm:text-xl md:text-2xl mb-6 reveal delay-200 font-semibold tracking-wide opacity-95 text-[var(--gold)]">
            فن التجميل الاحترافي الذي يعكس جمالك الحقيقي ✨
          </p>

          {/* Elegant Gold Dividers */}
          <div className="flex justify-center items-center gap-4 reveal delay-300 mb-8">
            <div className="h-1 w-16 bg-gradient-to-r from-transparent to-[var(--gold)] rounded-full"/>
            <div className="w-3 h-3 rounded-full bg-[var(--gold)] opacity-70"></div>
            <div className="h-1 w-16 bg-gradient-to-l from-transparent to-[var(--gold)] rounded-full"/>
          </div>

          {/* Main Description - Premium Copy */}
          <p className="mb-6 sm:mb-8 text-base sm:text-lg md:text-xl leading-relaxed opacity-95 reveal delay-300 max-w-3xl mx-auto font-light">
            تحويل رؤيتك الجميلة إلى إطلالة استثنائية فريدة من نوعها — بدقة احترافية عالية وتفاني كامل في كل تفصيلة صغيرة من لحظات يومك الخاص الذي طالما حلمتِ به
          </p>

          {/* Sub Description with Highlights */}
          <div className="mb-8 sm:mb-12 text-xs sm:text-sm md:text-base opacity-90 reveal delay-400 max-w-2xl mx-auto space-y-2 font-medium">
            <p>👰 عرايس فاخرة وراقية • 💍 خطوبات مميزة وجميلة • ✨ سهرات براقة وساحرة</p>
            <p>📸 جلسات تصوير احترافية عالمية • 💄 إطلالات متقنة من الألف إلى الياء</p>
          </div>

          {/* CTA Buttons - Premium Design */}
          <div className="flex flex-col gap-4 sm:gap-5 sm:flex-row justify-center items-center mb-12">
            <button 
              onClick={()=>scrollTo('#works')} 
              className="group relative overflow-hidden cta-btn cta-outline reveal delay-400 w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg border-2 border-white/40 hover:border-white/80 hover-lift"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span>🎨</span>
                <span>شاهدي معرض أعمالنا</span>
              </span>
            </button>
            <a 
              href={`https://wa.me/${PHONE}?text=${encodeURIComponent('مرحباً دعاء، أرغب بالاستفسار عن الخدمات والحجز')}`}
              target="_blank"
              rel="noreferrer"
              className="group cta-btn gold-btn text-white reveal delay-400 w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-premium hover-lift flex items-center justify-center gap-2"
            >
              <span>💬</span>
              <span>احجزي استشارتك المجانية</span>
            </a>
          </div>

          {/* Trust Indicators - Enhanced */}
          <div className="reveal delay-500 flex justify-center gap-6 sm:gap-12 text-center flex-wrap">
            {stats.map((stat, idx) => (
              <div key={idx} className="backdrop-blur-md bg-white/5 px-4 sm:px-6 py-3 rounded-xl border border-white/10 hover:border-white/30 transition-all hover-glow">
                <div className="text-2xl sm:text-3xl mb-1">{stat.icon}</div>
                <div className="text-lg sm:text-2xl font-bold text-[var(--gold)]">{stat.value}</div>
                <div className="text-xs sm:text-sm mt-1 text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Enhanced */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 reveal delay-600 z-10">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-white/60">اسحبي للأسفل</span>
          <svg className="w-6 h-6 text-white opacity-60 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
