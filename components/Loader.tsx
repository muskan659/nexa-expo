'use client'

import { useEffect, useState } from 'react'

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Fallback to hide loader after 3 seconds if GSAP doesn't load
    const fallbackTimer = setTimeout(() => {
      setIsLoading(false)
      document.body.classList.add('loaded')
    }, 3000)

    // Wait for GSAP to be available
    const initLoader = () => {
      if (typeof window !== 'undefined' && (window as any).gsap) {
        clearTimeout(fallbackTimer) // Cancel fallback if GSAP loads
        
        const gsap = (window as any).gsap
        const svg = document.getElementById("svg")
        const tl = gsap.timeline()
        const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z"
        const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z"

        // Set initial states
        gsap.set("header, .header", { opacity: 0, visibility: "visible", y: 200 })
        gsap.set(".tc-header-style1, .tc-navbar-style1", { opacity: 0, visibility: "visible" })

        tl.to(".loader-wrap-heading .load-text", {
          delay: 0.5,
          duration: 0.5,
          y: -100,
          opacity: 0,
          ease: "power2.in",
        })
        tl.to(svg, {
          duration: 0.4,
          attr: { d: curve },
          ease: "power2.easeIn",
        }).to(svg, {
          duration: 0.4,
          attr: { d: flat },
          ease: "power2.easeOut",
        })
        tl.to(".loader-wrap", {
          duration: 0.6,
          y: -1500,
          ease: "power3.inOut",
        })
        tl.to(".loader-wrap", {
          zIndex: -1,
          display: "none",
          onComplete: function() {
            document.body.classList.add('loaded')
            setIsLoading(false)
          }
        })
        tl.to(
          "header, .header",
          {
            duration: 1.2,
            y: 0,
            opacity: 1,
            ease: "power3.out",
          },
          "-=0.4"
        )
        tl.set("header, .header", { clearProps: "all" })
      } else {
        // Retry after a short delay
        setTimeout(initLoader, 100)
      }
    }

    // Start initialization after a short delay
    const timer = setTimeout(() => {
      initLoader()
    }, 300)

    return () => {
      clearTimeout(timer)
      clearTimeout(fallbackTimer)
    }
  }, [])

  if (!isLoading) {
    return null
  }

  return (
    <div className="loader-wrap">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path id="svg" d="M0 502S175 272 500 272s500 230 500 230V0H0Z"></path>
      </svg>
      <div className="loader-wrap-heading">
        <div className="load-text">
          <span>L</span>
          <span>o</span>
          <span>a</span>
          <span>d</span>
          <span>i</span>
          <span>n</span>
          <span>g</span>
        </div>
      </div>
    </div>
  )
}
