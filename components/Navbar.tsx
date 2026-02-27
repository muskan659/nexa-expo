'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [currentLang, setCurrentLang] = useState('en')
  
  useEffect(() => {
    const html = document.documentElement
    const lang = html.getAttribute('lang') || 'en'
    setCurrentLang(lang)
  }, [])
  
  const toggleLanguage = () => {
    const html = document.documentElement
    const currentDir = html.getAttribute('dir')
    
    if (currentDir === 'rtl') {
      html.setAttribute('dir', 'ltr')
      html.setAttribute('lang', 'en')
      setCurrentLang('en')
    } else {
      html.setAttribute('dir', 'rtl')
      html.setAttribute('lang', 'ar')
      setCurrentLang('ar')
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark tc-navbar-style1 section-padding-x">
      <div className="container-fluid content">
        <div>
          <a className="navbar-brand" href="#" style={{margin:"auto"}}>
            <img src="/assets/img/home1/logo.png" alt="" className="logo" />
          </a>
        </div>
        <div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <span className="ltr-content">Home</span>
                  <span className="rtl-content" style={{display: 'none'}}>الرئيسية</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#our-vision">
                  <span className="ltr-content">Vision</span>
                  <span className="rtl-content" style={{display: 'none'}}>الرؤية</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#kuwait-vision">
                  <span className="ltr-content">Kuwait Vision</span>
                  <span className="rtl-content" style={{display: 'none'}}>رؤية الكويت</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#why-kuwait">
                  <span className="ltr-content">Why Kuwait</span>
                  <span className="rtl-content" style={{display: 'none'}}>لماذا الكويت</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#why-us">
                  <span className="ltr-content">Why Us</span>
                  <span className="rtl-content" style={{display: 'none'}}>لماذا نحن</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#founder">
                  <span className="ltr-content">Founder</span>
                  <span className="rtl-content" style={{display: 'none'}}>المؤسسون</span>
                </a>
              </li>
            </ul>
            <div className="nav-side">
              <button 
                className="btn btn-link icon ms-3 lang-switcher" 
                onClick={toggleLanguage}
                aria-label="Toggle Language"
                style={{
                  border: '1px solid rgba(255,255,255,0.3)',
                  borderRadius: '25px',
                  padding: '8px 20px',
                  color: '#fff',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s ease',
                  backgroundColor: currentLang === 'ar' ? 'rgba(255,255,255,0.1)' : 'transparent'
                }}
              >
                <i className="fa fa-globe" style={{fontSize: '18px'}}></i>
                <span style={{fontWeight: '600'}}>
                  {currentLang === 'en' ? 'EN' : 'AR'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
