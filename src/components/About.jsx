import React from 'react'
import useReveal from '../hooks/useReveal'
import {PHONE} from '../config'

export default function About(){
  const ref = useReveal()

  const highlights = [
    {icon: '💎', title: 'خبرة عميقة', desc: 'أكثر من 10 سنوات من الخبرة المتخصصة في مجال التجميل الاحترافي والفاخر في أنحاء العالم'},
    {icon: '🎯', title: 'دقة في التفاصيل', desc: 'كل ضربة فرشاة بدقة واحترافية عالية وقصد مدروس وعناية فائقة في التنفيذ'},
    {icon: '🌟', title: 'منتجات عالمية', desc: 'استخدام أفضل وأجود العلامات التجارية العالمية الموثوقة والأصلية من أوروبا وأمريكا'},
    {icon: '💕', title: 'خدمة شخصية', desc: 'استشارة لونية متخصصة ومجانية مخصصة تماماً لكل عميلة وخصائص بشرتها الفريدة'},
  ]

  const values = [
    {title: 'الاحترافية', desc: 'معايير عالمية في كل خدمة نقدمها', icon: '👑'},
    {title: 'الثقة', desc: 'بناء علاقة دائمة مع كل عميلة', icon: '🤝'},
    {title: 'الابتكار', desc: 'تتبع أحدث تقنيات الميك أب في العالم', icon: '⚡'},
    {title: 'الجودة', desc: 'منتجات وخدمات عالية الجودة دائماً', icon: '✨'},
  ]

  return (
    <div ref={ref} className="fade-in">
      <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">
        {/* Left Side - Image */}
        <div className="order-2 md:order-1">
          <div className="image-frame lux-shadow-lg hover-lift overflow-hidden rounded-2xl">
            <div className="relative group">
              <img 
                loading="lazy" 
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=70" 
                alt="صورة دعاء السنطاوي خبيرة الميك أب" 
                className="w-full h-[520px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-semibold text-lg">💎 خبيرة ميك أب فاخر</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="space-y-8 order-1 md:order-2">
          {/* Header */}
          <div>
            <div className="inline-block badge-gold mb-4">👋 تعرفي على دعاء</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">عن دعاء السنطاوي</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[var(--gold)] to-[var(--rose)] rounded-full" />
          </div>

          {/* Main Description */}
          <div className="space-y-6">
            <p className="lead text-base sm:text-lg md:text-xl">
              خبيرة تجميل متخصصة ومعترف بها عالمياً في تقديم <span className="text-[var(--gold)] font-bold">إطلالات فاخرة فريدة وعصرية</span> — من يوم العرس الأسطوري المميز إلى أدق تفاصيل جلسات التصوير الاحترافية العالمية.
            </p>

            <div className="bg-gradient-to-r from-[var(--gold)]/10 to-[var(--rose)]/10 p-6 rounded-xl border-l-4 border-[var(--gold)]">
              <p className="muted text-base md:text-lg leading-relaxed">
                <span className="text-[var(--gold)] font-bold">رسالتي:</span> أنا أؤمن بأن الجمال الحقيقي يبدأ من الثقة بالنفس والشعور بالراحة والأمان. لذلك أركز على فهم عميق جداً لشخصيتك واحتياجاتك وأسلوبك الفريد.
              </p>
            </div>

            <p className="muted text-base md:text-lg leading-relaxed">
              كل حجز عندي يتضمن <span className="font-semibold text-[var(--gold)]">استشارة لونية شخصية متخصصة مجانية</span> تناسب بشرتك تماماً، اختيار احترافي دقيق للظلال والألوان المختارة بعناية فائقة، وتصميم لوك متقن يدوم طويلاً ويظهرك بأجمل صورة.
            </p>

            <blockquote className="bg-gradient-to-r from-[var(--gold)]/5 to-[var(--rose)]/5 p-5 rounded-lg border-r-4 border-[var(--gold)] italic text-gray-700 text-base md:text-lg">
              <p className="mb-2">
                "أهدفي هو أن تشعري بثقة غير محدودة وتستمتعي بكل لحظة من لحظات حدثك الخاص — لأن استحقاقِك للجمال والعناية والاهتمام حق أساسي" ✨
              </p>
            </blockquote>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-6">
            {highlights.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-gradient-to-br from-white via-[var(--soft-pink)]/10 to-[var(--gold)]/5 p-4 rounded-xl border border-[var(--gold)]/15 hover:border-[var(--gold)]/40 transition-all hover-lift group"
                style={{
                  animation: `slideInUp 500ms cubic-bezier(0.2, 0.9, 0.3, 1) forwards`,
                  animationDelay: `${idx * 80}ms`,
                  opacity: 0
                }}
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h4 className="font-bold text-sm mb-1 text-[var(--charcoal)]">{item.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Values Section */}
          <div className="pt-8 border-t-2 border-[var(--gold)]/20">
            <h3 className="font-bold text-lg mb-4 text-[var(--charcoal)]">القيم التي أعتمد عليها</h3>
            <div className="grid grid-cols-2 gap-3">
              {values.map((v, idx) => (
                <div key={idx} className="flex items-start gap-2 group">
                  <span className="text-2xl group-hover:scale-125 transition-transform">{v.icon}</span>
                  <div>
                    <p className="font-semibold text-sm text-[var(--charcoal)]">{v.title}</p>
                    <p className="text-xs text-gray-600">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4">
            <a 
              href={`https://wa.me/${PHONE}?text=${encodeURIComponent('مرحباً دعاء، أرغب بحجز جلسة ميك أب متخصصة والاستفسار عن الخدمات')}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 cta-btn gold-btn text-white px-8 py-3 rounded-full font-semibold hover-lift shadow-gold text-lg"
            >
              <span>💬</span>
              <span>احجزي استشارتك المجانية</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
