import React from 'react'
import useReveal from '../hooks/useReveal'
import {PHONE} from '../config'

export default function About(){
  const ref = useReveal()

  const highlights = [
    {icon: '💎', title: 'خبرة عميقة', desc: 'سنوات طويلة من الخبرة المتخصصة في مجال التجميل الاحترافي والفاخر'},
    {icon: '🎯', title: 'دقة في التفاصيل', desc: 'كل ضربة فرشاة بدقة واحترافية وقصد مدروس وعناية فائقة'},
    {icon: '🌟', title: 'منتجات عالمية', desc: 'استخدام أفضل وأجود العلامات التجارية العالمية الموثوقة والأصلية'},
    {icon: '💕', title: 'خدمة شخصية متقدمة', desc: 'استشارة لونية متخصصة ومجانية مخصصة تماماً لكل عميلة وبشرتها'},
  ]

  return (
    <div ref={ref} className="fade-in">
      <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">
        {/* Left Side - Image */}
        <div className="flex flex-col gap-6 order-2 md:order-1">
          <div className="image-frame lux-shadow-lg">
            <img 
              loading="lazy" 
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=70" 
              alt="صورة دعاء السنطاوي" 
              className="w-full h-[520px] object-cover"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="space-y-8 order-1 md:order-2">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">حول دعاء السنطاوي 👋</h2>
          <div className="subtle-gold-line mt-4" />
        </div>

        <div className="space-y-6">
          <p className="lead text-base sm:text-lg md:text-xl">
            خبيرة تجميل متخصصة ومعترف بها في تقديم <span className="text-[var(--gold)] font-semibold">إطلالات فاخرة فريدة وعصرية تعكس شخصيتك</span> — من يوم العرس الأسطوري المميز إلى أدق تفاصيل جلسات التصوير الاحترافية العالمية.
          </p>

          <p className="muted text-base md:text-lg leading-relaxed">
            أنا أؤمن بأن الجمال الحقيقي يبدأ من الثقة بالنفس والشعور بالراحة والأمان. لذلك أركز على فهم عميق جداً لشخصيتك واحتياجاتك وأسلوبك الفريد، ثم أحول رؤيتك الجميلة إلى واقع ملموس يجعلك تشعرين بأفضل نسخة من نفسك في كل لحظة.
          </p>

          <p className="muted text-base md:text-lg leading-relaxed">
            كل حجز عندي يتضمن استشارة لونية شخصية متخصصة مجانية تناسب بشرتك تماماً، اختيار احترافي دقيق للظلال والألوان المختارة بعناية فائقة، وتصميم لوك متقن يدوم طويلاً ويظهرك بأجمل صورة أمام الكاميرا والواقع معاً بكل احترافية.
          </p>

          <div className="bg-gradient-to-r from-[var(--gold)]/5 to-[var(--rose)]/5 p-4 rounded-lg border-l-4 border-[var(--gold)] italic text-gray-700">
            <p className="text-sm md:text-base">
              "أهدفي هو أن تشعري بثقة غير محدودة وتستمتعي بكل لحظة من لحظات حدثك الخاص — لأن استحقاقِ الجمال والعناية والاهتمام حق لك" ✨
            </p>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-2 gap-4 pt-4">
          {highlights.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-gradient-to-br from-[var(--gold)]/5 to-[var(--rose)]/5 p-4 rounded-lg border border-[var(--gold)]/10 hover:border-[var(--gold)]/30 transition-all"
            >
              <div className="text-2xl mb-2">{item.icon}</div>
              <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
              <p className="text-xs text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="pt-6">
          <a 
            href={`https://wa.me/${PHONE}?text=${encodeURIComponent('مرحباً، أرغب بحجز جلسة ميك أب متخصصة')}`}
            target="_blank"
            rel="noreferrer"
            className="inline-block cta-btn gold-btn text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
          >
            احجزي استشارتك المجانية الآن
          </a>
        </div>
        </div>
      </div>
    </div>
  )
}
