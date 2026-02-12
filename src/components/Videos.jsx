import React from 'react'
import useReveal from '../hooks/useReveal'
import {PHONE} from '../config'

const reels = [
  {
    id: 1,
    title: 'ميك أب عرس كامل',
    duration: '2:45',
    thumbnail: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=60',
    views: '1.2K'
  },
  {
    id: 2,
    title: 'تحول ميكاج مذهل',
    duration: '1:30',
    thumbnail: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=800&q=60',
    views: '2.5K'
  },
  {
    id: 3,
    title: 'تقنيات الكونتور المتقدمة',
    duration: '3:15',
    thumbnail: 'https://images.unsplash.com/photo-1599995963654-b2b8b2f0a3a3?auto=format&fit=crop&w=800&q=60',
    views: '890'
  },
  {
    id: 4,
    title: 'ميك أب سهرة براق',
    duration: '2:00',
    thumbnail: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=800&q=60',
    views: '1.8K'
  }
]

export default function Videos(){
  const ref = useReveal()

  return (
    <div ref={ref} className="fade-in">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">من فضلك تابعي معي 🎥</h2>
        <p className="muted text-lg md:text-xl max-w-2xl mx-auto">
          فيديوهات حصرية تعرضي أحدث تقنيات الميك أب والتحولات المذهلة
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reels.map((reel, idx) => (
          <div
            key={reel.id}
            className="group cursor-pointer rounded-2xl overflow-hidden"
            style={{
              animation: `slideInUp 600ms cubic-bezier(0.2, 0.9, 0.3, 1) forwards`,
              animationDelay: `${idx * 100}ms`,
              opacity: 0
            }}
          >
            {/* Thumbnail */}
            <div className="relative overflow-hidden rounded-2xl h-72 bg-gray-200 shadow-lg">
              <img 
                src={reel.thumbnail}
                alt={reel.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-sm mb-2">{reel.title}</h3>
                <div className="flex items-center justify-between text-white text-xs">
                  <span>👁️ {reel.views}</span>
                  <span>⏱️ {reel.duration}</span>
                </div>
              </div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[var(--gold)]/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
              </div>

              {/* Duration Badge */}
              <div className="absolute top-3 right-3 bg-black/70 px-3 py-1 rounded-full text-white text-xs font-bold">
                {reel.duration}
              </div>
            </div>

            {/* Info */}
            <div className="bg-white p-4">
              <h3 className="font-bold text-gray-900 mb-2">{reel.title}</h3>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>👁️ {reel.views}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Follow CTA */}
      <div className="mt-16 p-12 rounded-2xl bg-gradient-to-r from-[var(--gold)]/10 to-[var(--rose)]/10 border-2 border-[var(--gold)]/20 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">تابعي أحدث المحتوى</h3>
        <p className="text-gray-700 mb-8 text-lg max-w-2xl mx-auto">
          اشتركي معي على مواقع التواصل الاجتماعي لترى أحدث الفيديوهات والصور والعروض الحصرية
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href={`https://wa.me/${PHONE}?text=${encodeURIComponent('مرحباً، أتابعك بكل محبة')}`}
            target="_blank"
            rel="noreferrer"
            className="inline-block cta-btn gold-btn text-white px-8 py-3 rounded-full font-semibold"
          >
            تابعيني على واتساب
          </a>
          <a 
            href="#"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-8 py-3 rounded-full bg-pink-500 text-white font-semibold hover:bg-pink-600 transition-all"
          >
            تابعيني على إنستجرام
          </a>
        </div>
      </div>
    </div>
  )
}
