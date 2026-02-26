'use client'

export default function SideMenu() {
  const toggleLanguage = () => {
    const html = document.documentElement
    const currentDir = html.getAttribute('dir')
    
    if (currentDir === 'rtl') {
      html.setAttribute('dir', 'ltr')
      html.setAttribute('lang', 'en')
    } else {
      html.setAttribute('dir', 'rtl')
      html.setAttribute('lang', 'ar')
    }
  }

  return (
    <>
      <div className="side_menu4_overlay"></div>
      <div className="side_menu4_overlay2"></div>
      <div className="side_menu_style4">
        <div className="content">
          <div className="main_links">
            <ul>
              <li>
                <a href="#" className="main_link">
                  <span className="ltr-content">home</span>
                  <span className="rtl-content" style={{display: 'none'}}>الرئيسية</span>
                </a>
              </li>
              <li>
                <a href="#our-vision" className="main_link">
                  <span className="ltr-content">vision</span>
                  <span className="rtl-content" style={{display: 'none'}}>الرؤية</span>
                </a>
              </li>
              <li>
                <a href="#kuwait-vision" className="main_link">
                  <span className="ltr-content">kuwait vision</span>
                  <span className="rtl-content" style={{display: 'none'}}>رؤية الكويت</span>
                </a>
              </li>
              <li>
                <a href="#why-kuwait" className="main_link">
                  <span className="ltr-content">why kuwait</span>
                  <span className="rtl-content" style={{display: 'none'}}>لماذا الكويت</span>
                </a>
              </li>
              <li>
                <a href="#why-us" className="main_link">
                  <span className="ltr-content">why us</span>
                  <span className="rtl-content" style={{display: 'none'}}>لماذا نحن</span>
                </a>
              </li>
              <li>
                <a href="#founder" className="main_link">
                  <span className="ltr-content">founder</span>
                  <span className="rtl-content" style={{display: 'none'}}>المؤسسون</span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="main_link lang-switcher" 
                  onClick={(e) => {
                    e.preventDefault()
                    toggleLanguage()
                  }}
                >
                  <span className="ltr-content">EN / AR</span>
                  <span className="rtl-content" style={{display: 'none'}}>AR / EN</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <img src="/assets/img/home1/chat_pat2.png" alt="" className="side_shape" />
        <img src="/assets/img/home1/chat_pat2.png" alt="" className="side_shape2" />
        <span className="clss"><i className="la la-times"></i></span>
      </div>
    </>
  )
}
