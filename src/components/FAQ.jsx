import React, { useState } from 'react'
import useReveal from '../hooks/useReveal'
import {PHONE} from '../config'

const faqs = [
  {
    id: 1,
    category: 'الحجز والتفاصيل',
    q: 'كيف أحجز جلسة ميك أب معك؟',
    a: 'يمكنك التواصل معي مباشرة عبر واتساب على الرقم المدرج في الموقع. أخبري بتفاصيل الحدث والتاريخ والوقت المفضل لديك، وسأساعدك بكل سرور!'
  },
  {
    id: 2,
    category: 'الحجز والتفاصيل',
    q: 'ما هو أفضل وقت أحجز فيه؟',
    a: 'أنصح بالحجز قبل الحدث بـ 2-3 أسابيع على الأقل، خاصة للحفلات الكبيرة والأعراس. هذا يضمن عدم الازدحام ويسمح لي بالتحضير الكامل.'
  },
  {
    id: 3,
    category: 'الحجز والتفاصيل',
    q: 'هل يمكنك الحضور في منزلي؟',
    a: 'بالتأكيد! أقدم خدماتي في الفروع أو في منزلك أو أي مكان تختارينه. مع خدمة منزلية قد يكون هناك رسم إضافي صغير حسب البعد.'
  },
  {
    id: 4,
    category: 'الخدمات والمنتجات',
    q: 'ما نوع المنتجات التي تستخدمينها؟',
    a: 'أستخدم منتجات عالمية أصلية من أشهر العلامات التجارية في مجال التجميل — تتميز بجودة عالية وأمان كامل على البشرة.'
  },
  {
    id: 5,
    category: 'الخدمات والمنتجات',
    q: 'هل المكياج تحسّسي أو آمن على البشرة الحساسة؟',
    a: 'نعم! أستخدم منتجات آمنة وخالية من المواد الضارة. أنصحك بإخبري عن أي حساسيات جلدية قبل الجلسة حتى أختار المنتجات المناسبة.'
  },
  {
    id: 6,
    category: 'الخدمات والمنتجات',
    q: 'هل تقدمين استشارة لونية مجانية؟',
    a: 'نعم! الاستشارة اللونية الأولية مجانية تماماً. أساعدك في اختيار الألوان المناسبة لبشرتك ولون عينيك وتفضيلاتك الشخصية.'
  },
  {
    id: 7,
    category: 'التسعير والدفع',
    q: 'كم تبلغ الأسعار؟',
    a: 'الأسعار مرنة وتختلف حسب نوع الخدمة والمناسبة والتوقيت. أفضل التواصل المباشر لمناقشة احتياجاتك والوصول لسعر عادل يناسبك.'
  },
  {
    id: 8,
    category: 'التسعير والدفع',
    q: 'هل هناك خصومات للمجموعات؟',
    a: 'بالتأكيد! أقدم خصومات رائعة (15-20%) للحجوزات الجماعية والعائلية. كلما زاد عدد الأشخاص، كلما زاد الخصم!'
  },
  {
    id: 9,
    category: 'التسعير والدفع',
    q: 'هل يمكن الدفع بالتقسيط؟',
    a: 'نعم، يمكن لنا الاتفاق على طرق دفع مرنة حسب احتياجاتك. تواصلي معي لمناقشة الخيارات المتاحة.'
  },
  {
    id: 10,
    category: 'يوم الحدث',
    q: 'كم الوقت المطلوب للمكياج الكامل؟',
    a: 'عادة ما يأخذ الميك أب الكامل من 45 دقيقة إلى ساعة ونصف، حسب تعقيد التصميم واحتياجاتك.'
  },
  {
    id: 11,
    category: 'يوم الحدث',
    q: 'هل المكياج يدوم طول اليوم؟',
    a: 'بالتأكيد! أستخدم منتجات تثبيت متقدمة تجعل المكياج يدوم 10-12 ساعة بدون تشقق أو تغيير في الألوان.'
  },
  {
    id: 12,
    category: 'يوم الحدث',
    q: 'ماذا لو لم أعجب بالنتيجة؟',
    a: 'أهتم برأيك كثيراً! إذا أحتاج الميك أب لتعديل بسيط، سأصلحه فوراً بدون أي مشاكل. رضاك هو أولويتي الأولى.'
  }
]

const categories = ['الحجز والتفاصيل', 'الخدمات والمنتجات', 'التسعير والدفع', 'يوم الحدث']

export default function FAQ(){
  const ref = useReveal()
  const [selectedCategory, setSelectedCategory] = useState('الحجز والتفاصيل')
  const [expandedId, setExpandedId] = useState(null)

  const filteredFaqs = faqs.filter(faq => faq.category === selectedCategory)

  return (
    <div ref={ref} className="fade-in max-w-4xl mx-auto">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">الأسئلة الشائعة ❓</h2>
        <p className="muted text-sm sm:text-lg md:text-xl px-4 sm:px-0">
          إجابات على أكثر الأسئلة التي تطرحها عميلاتي
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 sm:mb-12 justify-center px-2 sm:px-0">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat)
              setExpandedId(null)
            }}
            className={`px-3 sm:px-4 py-2 rounded-full font-semibold transition-all text-sm sm:text-base ${
              selectedCategory === cat
                ? 'gold-btn text-white'
                : 'bg-gray-100 text-[var(--charcoal)] hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FAQs List */}
      <div className="space-y-4 mb-16">
        {filteredFaqs.map((faq, idx) => (
          <div
            key={faq.id}
            className="rounded-xl border-2 border-[var(--gold)]/20 overflow-hidden transition-all"
            style={{
              animation: `slideInUp 400ms cubic-bezier(0.2, 0.9, 0.3, 1) forwards`,
              animationDelay: `${idx * 50}ms`,
              opacity: 0
            }}
          >
            {/* Question */}
            <button
              onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
              className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between bg-gradient-to-r from-white to-[var(--soft-pink)]/10 hover:from-[var(--cream)] hover:to-[var(--soft-pink)]/20 transition-all"
            >
              <h3 className="text-base sm:text-lg font-bold text-[var(--charcoal)] text-right flex-1 text-right">
                {faq.q}
              </h3>
              <div className="flex-shrink-0 ml-3 sm:ml-4">
                <svg
                  className={`w-6 h-6 text-[var(--gold)] transition-transform ${
                    expandedId === faq.id ? 'rotate-180' : ''
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </button>

            {/* Answer */}
            {expandedId === faq.id && (
              <div className="px-4 sm:px-6 py-3 sm:py-4 bg-white border-t-2 border-[var(--gold)]/20">
                <p className="text-gray-700 text-sm sm:text-lg leading-relaxed">
                  {faq.a}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Still Have Questions CTA */}
      <div className="p-10 rounded-2xl bg-gradient-to-r from-[var(--gold)]/10 to-[var(--rose)]/10 border-2 border-[var(--gold)]/20 text-center">
        <h3 className="text-2xl font-bold mb-3">هل لديك أسئلة أخرى؟</h3>
        <p className="text-gray-700 mb-6 text-lg">
          لا تترددي في التواصل معي مباشرة عبر واتساب — أنا دائماً هنا لمساعدتك وحل كل استفساراتك
        </p>
        <a
          href={`https://wa.me/${PHONE}?text=${encodeURIComponent('مرحباً، عندي سؤال')}`}
          target="_blank"
          rel="noreferrer"
          className="inline-block cta-btn gold-btn text-white px-8 py-3 rounded-full font-semibold"
        >
          تواصلي معي الآن
        </a>
      </div>
    </div>
  )
}
