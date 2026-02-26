export default function IntroductionSection() {
  return (
    <section className="tc-experience-style1 section-padding-x">
      <div className="container-fluid">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-2"></div>
          <div className="col-lg-3">
            <div className="img" style={{position: 'relative', left:'-100px', height: '400px', width: '300px'}}>
              <img src="/assets/img/home1/imag1.png" alt="" className="img-cover" />
            </div>
          </div>
          <div className="col-lg-3">
            <div className="info wow fadeInUp" data-wow-delay="0.3s">
              <h3 className="fsz-45 fw-600 mb-30">
                <span className="ltr-content">Introduction</span>
                <span className="rtl-content" style={{display: 'none'}}> المقدمه</span>
              </h3>
              <div className="text fsz-15 color-666">
                <span className="ltr-content">
                  NEXA Expo is established as an integrated, multi-sector business platform in the
                  State of Kuwait, aiming to connect global suppliers with local entrepreneurs and
                  companies, while providing an interactive environment that supports industrial
                  and commercial growth.
                </span>
                <span className="rtl-content" style={{display: 'none'}}>
                يأتي معرض نيكسا أكسبو ليكون منصة أعمال متكاملة ومتعددة القطاعات في دولة الكويت، تهدف إلى ربط الموردين العالميين برواد الأعمال والشركات المحلية، وتوفير بيئة تفاعلية تدعم النمو الصناعي والتجاري.
                </span>
              </div>
              <a href="#our-vision" className="butn rounded-pill mt-50 hover-bg-black bg-white">
                <span className="ltr-content">Know More</span>
                <span className="rtl-content" style={{display: 'none'}}>اعرف المزيد</span>
              </a>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
      <img src="/assets/img/home1/c_line.png" alt="" className="c-line wow fadeIn" data-wow-delay="0.4s" />
    </section>
  )
}
