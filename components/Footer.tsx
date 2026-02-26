'use client';

export default function Footer() {
  const handleLanguageToggle = () => {
    const html = document.documentElement;
    const currentDir = html.getAttribute('dir');
    html.setAttribute('dir', currentDir === 'rtl' ? 'ltr' : 'rtl');
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="tc-footer-style2">
      <div className="container">
        <div className="foot-main-content">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="foot-info">
                <h3 className="fsz-35 fw-500">
                  <span className="ltr-content">
                    Innovation. Quality. Excellence. Future.{' '}
                    <span className="sub-font color-orange1 fst-italic">Together</span>
                  </span>
                  <span className="rtl-content" style={{display: 'none'}}>
                    ابتكار. جودة. تميز. مستقبل.{' '}
                    <span className="sub-font color-orange1 fst-italic">معاً</span>
                  </span>
                </h3>
                <button 
                  onClick={handleLanguageToggle}
                  className="butn borderd border rounded-pill hover-bg-black mt-80"
                >
                  <span>
               
                    <span className="ltr-content">English</span>
                    <span className="rtl-content" style={{display: 'none'}}>العربية</span>
                  </span>
                </button>
              </div>
            </div>
            <div className="col-lg-3 offset-lg-1 col-md-6 col-12">
              <div className="links-group">
                <h5 className="sub-title fsz-24 fw-500 mb-30 mt-5 mt-lg-0">
                  <span className="ltr-content">Kuwait City</span>
                  <span className="rtl-content" style={{display: 'none'}}>مدينة الكويت</span>
                </h5>
                <ul>
                  <li>
                    <a href="#">
                      <span className="ltr-content">Kuwait City, Kuwait</span>
                      <span className="rtl-content" style={{display: 'none'}}>مدينة الكويت، الكويت</span>
                    </a>
                  </li>
                  <li><a href="mailto:info@nexaexpo.com">info@nexaexpo.com</a></li>
                  <li><a href="tel:+96512345678">(+965) 1234 5678</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              <div className="links-group">
                <h5 className="sub-title fsz-24 fw-500 mb-30 mt-5 mt-lg-0">
                  <span className="ltr-content">Quick Links</span>
                  <span className="rtl-content" style={{display: 'none'}}>روابط سريعة</span>
                </h5>
                <ul>
                
                  <li>
                    <a href="#our-vision">
                      <span className="ltr-content">Vision</span>
                      <span className="rtl-content" style={{display: 'none'}}>الرؤية</span>
                    </a>
                  </li>
                    <li>
                    <a href="#services">
                     <span className="ltr-content">Kuwait Vision</span>
                  <span className="rtl-content" style={{display: 'none'}}>رؤية الكويت</span>
              
                        </a>
                  </li>
                  <li>
                    <a href="#why-kuwait">
                      <span className="ltr-content">Why Kuwait</span>
                      <span className="rtl-content" style={{display: 'none'}}>لماذا الكويت</span>
                    </a>
                  </li>
                  <li>
                    <a href="#why-us">
                                       <span className="ltr-content">Why Us</span>
                  <span className="rtl-content" style={{display: 'none'}}>لماذا نحن</span>

                    </a>
                  </li>
                  <li>
                    <a href="#founder">
                          <span className="ltr-content">Founder</span>
                  <span className="rtl-content" style={{display: 'none'}}>المؤسسون</span>
             
                      </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              <div className="links-group">
                <h5 className="sub-title fsz-24 fw-500 mb-30 mt-5 mt-lg-0">
                  <span className="ltr-content">Resources</span>
                  <span className="rtl-content" style={{display: 'none'}}>الموارد</span>
                </h5>
                <ul>
                  <li>
                    <a href="#">
                      <span className="ltr-content">Terms & Conditions</span>
                      <span className="rtl-content" style={{display: 'none'}}>الشروط والأحكام</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="ltr-content">Privacy Policy</span>
                      <span className="rtl-content" style={{display: 'none'}}>سياسة الخصوصية</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="ltr-content">Partner Program</span>
                      <span className="rtl-content" style={{display: 'none'}}>برنامج الشركاء</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="ltr-content">FAQs</span>
                      <span className="rtl-content" style={{display: 'none'}}>الأسئلة الشائعة</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="foot">
          <div className="row align-items-center">
            {/* <div className="col-lg-2">
              <a href="#" className="logo">
                <img src="/assets/img/home1/logo.png" alt="Nexa Expo Logo" />
              </a>
            </div> */}
            <div className="col-lg-5 col-md-6 col-12">
              <p className="copy">
                <span className="ltr-content">
                  © 2026 Nexa Expo.  All Rights Reserved
                </span>
                <span className="rtl-content" style={{display: 'none'}}>
                  © 2026 معرض نيكسا. جميع الحقوق محفوظة
                </span>
              </p>
            </div>
            <div className="col-lg-5 col-md-6 col-12">
              <div className="social-links">
                {/* <a href="#" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" aria-label="YouTube">
                  <i className="fab fa-youtube"></i>
                </a> */}
              </div>
            </div>
            <div className="col-lg-2 col-12">
              <a 
                href="#" 
                className="butn borderd border rounded-pill hover-bg-black show" 
                id="to_top"
                onClick={scrollToTop}
              >
                <span>
                  <span className="ltr-content">Back to Top</span>
                  <span className="rtl-content" style={{display: 'none'}}>العودة للأعلى</span>
                  {' '}<i className="ms-2 fas fa-chevron-up"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <img src="/assets/img/home2/foot_shap.svg" alt="" className="shap" />
    </footer>
  );
}
