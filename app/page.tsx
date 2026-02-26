'use client'

import { useEffect } from 'react'
import Loader from '@/components/Loader'
import SideMenu from '@/components/SideMenu'
import Navbar from '@/components/Navbar'
import HeaderSlider from '@/components/HeaderSlider'
import IntroductionSection from '@/components/IntroductionSection'
import ServicesSection from '@/components/ServicesSection'
import WhyKuwaitSection from '@/components/WhyKuwaitSection'
import WhyUsSection from '@/components/WhyUsSection'
import FounderSection from '@/components/FounderSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    // Initialize animations after component mounts
    if (typeof window !== 'undefined') {
      // WOW.js initialization
      setTimeout(() => {
        if ((window as any).WOW) {
          new (window as any).WOW().init()
        }
      }, 100)
    }
  }, [])

  return (
    <>
      {/* Loading Screen */}
      <Loader />

      {/* Side Menu */}
      <SideMenu />

      {/* Main Content Wrapper */}
      <div className="ScrollSmoother-wrapper">
        <div className="smooth-scroll-content" id="scrollsmoother-container">
          
          {/* Navbar */}
          <Navbar />

          {/* Header Slider */}
          <HeaderSlider />

          {/* Main Content */}
          <main>
            {/* Introduction Section */}
            <IntroductionSection />

            {/* Services Section & Our Vision */}
            <ServicesSection />

            {/* Why Kuwait Section */}
            <WhyKuwaitSection />

            {/* Why Us Section */}
            <WhyUsSection />

            {/* Founder Section */}
            <FounderSection />

            {/* Contact Section */}
            <ContactSection />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </>
  )
}

