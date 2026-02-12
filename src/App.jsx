import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import BeforeAfter from './components/BeforeAfter'
import Services from './components/Services'
import Packages from './components/Packages'
import Achievements from './components/Achievements'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Branches from './components/Branches'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen text-gray-900 overflow-x-hidden bg-[var(--ivory)]">
      <Navbar />
      <main id="main">
        <Hero />
        <section id="about" className="container-tight mx-auto px-6 py-20">
          <About />
        </section>
        <section id="works" className="container-tight mx-auto px-6 py-20">
          <Portfolio />
        </section>
        <section id="before-after" className="container-tight mx-auto px-6 py-20">
          <BeforeAfter />
        </section>
        <section id="services" className="container-tight mx-auto px-6 py-20">
          <Services />
        </section>
        <section id="packages" className="container-tight mx-auto px-6 py-20">
          <Packages />
        </section>
        <section id="achievements" className="container-tight mx-auto px-6 py-20">
          <Achievements />
        </section>
        <section id="testimonials" className="container-tight mx-auto px-6 py-20">
          <Testimonials />
        </section>
        <section id="faq" className="container-tight mx-auto px-6 py-20">
          <FAQ />
        </section>
        <section id="branches" className="container-tight mx-auto px-6 py-20">
          <Branches />
        </section>
      </main>
      <FloatingWhatsApp />
      <Footer />
    </div>
  )
}
