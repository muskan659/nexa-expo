export default function HeaderSlider() {
  return (
    <header className="tc-header-style1">
      <div className="header-slider swiper">
        <div className="swiper-wrapper">
          {/* Slide 1 */}
          <div className="swiper-slide">
            <div className="slider-card">
              <div className="img" data-swiper-parallax="1144.5">
                <img src="/assets/img/home1/head_slide1.png" alt="" className="img-cover" />
              </div>
              <div className="info section-padding-x pb-70">
                <div className="row align-items-end gx-5">
                  <div className="col-lg-6 offset-lg-2">
                    <h1 data-swiper-parallax="-2000" className="js-title">
                      <span className="ltr-content">Nexa</span>
                      <span className="rtl-content" style={{display: 'none'}}> معرض نيكسا</span>
                    </h1>
                    <h5 className="fsz-30 mt-30 fw-400">
                      <span className="ltr-content">EXPO<br />For Pack & Print</span>
                      <span className="rtl-content" style={{display: 'none'}}>للتغليف و الطباعه</span>
                    </h5>
                  </div>
                  <div className="col-lg-3">
                    <div className="cont pb-30"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="swiper-slide">
            <div className="slider-card">
              <div className="img" data-swiper-parallax="1144.5">
                <img src="/assets/img/home1/head_slide2.png" alt="" className="img-cover" />
              </div>
              <div className="info section-padding-x pb-70">
                <div className="row align-items-end gx-5">
                  <div className="col-lg-6 offset-lg-2">
                    <h1 data-swiper-parallax="-2000" className="js-title">
                      <span className="ltr-content">Nexa</span>
                      <span className="rtl-content" style={{display: 'none'}}>معرض نيكسا</span>
                    </h1>
                    <h5 className="fsz-30 mt-30 fw-400">
                      <span className="ltr-content">EXPO<br />For Pack & Print</span>
                      <span className="rtl-content" style={{display: 'none'}}>للتغليف و الطباعه</span>
                    </h5>
                  </div>
                  <div className="col-lg-3">
                    <div className="cont pb-30"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="swiper-slide">
            <div className="slider-card">
              <div className="img" data-swiper-parallax="1144.5">
                <img src="/assets/img/home1/head_slide3.png" alt="" className="img-cover" />
              </div>
              <div className="info section-padding-x pb-70">
                <div className="row align-items-end gx-5">
                  <div className="col-lg-6 offset-lg-2">
                    <h1 data-swiper-parallax="-2000" className="js-title">
                      <span className="ltr-content">Nexa</span>
                      <span className="rtl-content" style={{display: 'none'}}>معرض نيكسا</span>
                    </h1>
                    <h5 className="fsz-30 mt-30 fw-400">
                      <span className="ltr-content">EXPO<br />For Pack & Print</span>
                      <span className="rtl-content" style={{display: 'none'}}>للتغليف و الطباعه</span>
                    </h5>
                  </div>
                  <div className="col-lg-3">
                    <div className="cont pb-30"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="slider-controls">
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </header>
  )
}
