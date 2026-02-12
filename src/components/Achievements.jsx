import React from 'react'
import useReveal from '../hooks/useReveal'

const achievements = [
  {
    icon: '👑',
    title: 'متخصصة معترف بها',
    desc: 'متدربة على أيدي أفضل الخبراء في مجال التجميل الاحترافي'
  },
  {
    icon: '🏆',
    title: 'جوائز واعترافات',
    desc: 'حصدت عدة جوائز في مسابقات الميك أب الاحترافي والدولية'
  },
  {
    icon: '💎',
    title: 'منتجات عالمية أصلية',
    desc: 'شراكة مع أفضل العلامات التجارية العالمية في التجميل'
  },
  {
    icon: '📜',
    title: 'شهادات احترافية',
    desc: 'شهادات في الميك أب الاحترافي والعناية بالبشرة من معاهد معترف بها'
  },
  {
    icon: '⭐',
    title: 'تقييم ممتاز',
    desc: 'معدل رضا 100% من جميع عميلاتي مع آراء حصرية مميزة'
  },
  {
    icon: '🎯',
    title: 'احترافية عالية',
    desc: 'التزام كامل بموعدك وخدمة بكل احترافية واهتمام بالتفاصيل'
  }
]

export default function Achievements(){
  const ref = useReveal()

  return (
    <div ref={ref} className="fade-in">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">إنجازاتي وخبراتي 🌟</h2>
        <p className="muted text-sm sm:text-lg md:text-xl max-w-2xl mx-auto px-4 sm:px-0">
          خبرة وتراكم معرفي يجعلني متخصصة جديرة بثقتك وحجزك
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, idx) => (
          <div
            key={idx}
            className="premium-card p-8 rounded-2xl bg-gradient-to-br from-white to-[var(--soft-pink)]/5 border-2 border-[var(--gold)]/15 hover:border-[var(--gold)]/40 hover:shadow-xl transition-all group"
            style={{
              animation: `slideInUp 600ms cubic-bezier(0.2, 0.9, 0.3, 1) forwards`,
              animationDelay: `${idx * 100}ms`,
              opacity: 0
            }}
          >
            {/* Icon */}
            <div className="text-5xl mb-4 group-hover:float-animation transition-all">
              {achievement.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-3 text-[var(--charcoal)]">
              {achievement.title}
            </h3>

            {/* Gold Line */}
            <div className="h-1 w-12 bg-gradient-to-r from-[var(--gold)] to-[var(--rose)] rounded-full mb-4" />

            {/* Description */}
            <p className="text-gray-700 leading-relaxed">
              {achievement.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
