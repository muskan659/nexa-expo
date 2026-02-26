'use client'

export default function Navbar() {
  const toggleLanguage = () => {
    const html = document.documentElement
    const currentDir = html.getAttribute('dir')
    const currentLang = html.getAttribute('lang')
    
    if (currentDir === 'rtl') {
      html.setAttribute('dir', 'ltr')
      html.setAttribute('lang', 'en')
    } else {
      html.setAttribute('dir', 'rtl')
      html.setAttribute('lang', 'ar')
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark tc-navbar-style1 section-padding-x">
      <div className="container-fluid content">
        <div>
          <a className="navbar-brand" href="#">
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
              <a 
                href="#" 
                className="icon ms-3 lang-switcher" 
                onClick={(e) => {
                  e.preventDefault()
                  toggleLanguage()
                }}
              >
                <span className="ltr-content">EN / AR</span>
                <span className="rtl-content" style={{display: 'none'}}>AR / EN</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
