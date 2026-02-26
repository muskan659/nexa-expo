import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nexa Expo - For Pack & Print',
  description: 'NEXA Expo is established as an integrated, multi-sector business platform in the State of Kuwait',
  keywords: 'NEXA Expo, Kuwait, Business, Pack, Print, Exhibition',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Favicon */}
        <link rel="shortcut icon" href="/assets/img/home1/fav.png" title="Favicon" sizes="16x16" />
        
        {/* Bootstrap CSS */}
        <link rel="stylesheet" href="/assets/css/lib/bootstrap.min.css" />
        
        {/* Google Fonts */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Covered+By+Your+Grace&display=swap" 
          rel="stylesheet" 
        />
        
        {/* Font Awesome */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" 
        />
        
        {/* CSS Libraries */}
        <link rel="stylesheet" href="/assets/css/lib/line_awesome.css" />
        <link rel="stylesheet" href="/assets/css/lib/themify_icons.css" />
        <link rel="stylesheet" href="/assets/css/lib/animate.css" />
        <link rel="stylesheet" href="/assets/css/lib/jquery.fancybox.css" />
        <link rel="stylesheet" href="/assets/css/lib/lity.css" />
        <link rel="stylesheet" href="/assets/css/lib/swiper8.min.css" />
        
        {/* Main Styles */}
        <link rel="stylesheet" href="/assets/css/common_style.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/animation-fix.css" />
        <link rel="stylesheet" href="/assets/css/inline_styles.css" />
        
        {/* RTL Support */}
        <link rel="stylesheet" href="/assets/css/rtl.css" />
      </head>
      <body className="home-style1" suppressHydrationWarning>
        {children}
        
        {/* jQuery and Libraries */}
        <Script src="/assets/js/lib/jquery_3.0.0.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/lib/jquery_migrate_3.0.0.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/lib/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/lib/wow.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/lib/jquery.fancybox.js" strategy="afterInteractive" />
        <Script src="/assets/js/lib/lity.js" strategy="afterInteractive" />
        <Script src="/assets/js/lib/swiper8_bundle.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/lib/jquery.waypoints.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/lib/jquery.counterup.js" strategy="afterInteractive" />
        <Script src="/assets/js/lib/parallaxie.js" strategy="afterInteractive" />
        
        {/* GSAP Libraries */}
        <Script src="/assets/js/gsap_lib/gsap.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/gsap_lib/scrollsmoother.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/gsap_lib/scrolltrigger.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/gsap_lib/splittext.min.js" strategy="afterInteractive" />
        
        {/* Main Scripts */}
        <Script src="/assets/js/common_js.js" strategy="afterInteractive" />
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
