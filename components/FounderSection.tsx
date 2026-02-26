export default function FounderSection() {
  return (
    <section className="tc-testimonials-style2" style={{background: 'white'}} id="founder">
      <div className="container">
        <div className="row">
            <div className="col-lg-12">
                {/* <div className="title mb-80 text-center">
                    <h2 className="fsz-45 fw-500">
                        <span className="ltr-content">Founders</span>
                        <span className="rtl-content" style={{display: 'none'}}>من المؤسسين والمنفذين </span>
                    </h2>
                    <p className="font-bold">
                        <span className="ltr-content">Behind NEXA Expo stands a team with practical experience and deep knowledge of local market requirements and business environment, led by:</span>
                        <span className="rtl-content" style={{display: 'none'}}>يقف خلف نيكسا إكسبو فريق يتمتع بخبرة عملية ومعرفة عميقة بمتطلبات السوق المحلي وبيئة الأعمال، ويقود المعرض كل من:</span>
                    </p>
                </div> */}
            </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="img-slider swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="slider-card">
                    <div className="img">
                      <img src="/assets/img/home2/testimonials/test11.png" alt="" className="main-img img-cover" />
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slider-card">
                    <div className="img">
                      <img src="/assets/img/home2/testimonials/test2.png" alt="" className="main-img img-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text-side">
              <div className="text-slider swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="text sub-font" style={{color: 'black'}}>
                      <span className="ltr-content">
                        &quot;An entrepreneur with extensive experience in establishing and
                        managing businesses, possessing a solid understanding of business
                        ecosystems, supply chains, and entrepreneurial needs. She is the
                        strategic force behind the vision and long-term direction of NEXA
                        Expo.&quot;
                      </span>
                      <span className="rtl-content" style={{display: 'none'}}>
                        &quot;
                        رائدة أعمال وصاحبة خبرة في تأسيس وإدارة المشاريع، تتمتع بفهم شامل لمنظومة الأعمال وسلاسل الإمداد واحتياجات رواد الأعمال، وتشكل الرؤية الاستراتيجية لنيكسا إكسبو وتوجهه المستقبلي.
                        &quot;
                      </span>
                    </div>
                    <div className="user-wrapper">
                      <div className="user-content">
                        <div className="inf">
                          <h6 className="fsz-18">
                            <span className="ltr-content">Mai Majran Al-Loughani</span>
                            <span className="rtl-content" style={{display: 'none'}}>مي مجرن اللوغاني – المؤسس</span>
                          </h6>
                          <p className="mt-2" style={{color: '#140202a8'}}>
                            <span className="ltr-content">Founder</span>
                            <span className="rtl-content" style={{display: 'none'}}>المؤسس</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="text sub-font" style={{color: 'black'}}>
                      <span className="ltr-content">
                        &quot;Responsible for executive oversight and operational management,
                        translating the vision into actionable plans through structured
                        execution, partnership development, and ensuring the exhibition is
                        delivered to the highest professional standards.&quot;
                      </span>
                      <span className="rtl-content" style={{display: 'none'}}> &quot;
            تتولى الإشراف التنفيذي وإدارة العمليات، وتحويل الرؤية إلى خطط قابلة للتنفيذ، من خلال التنظيم والتخطيط وبناء الشراكات، وضمان تنفيذ المعرض وفق أعلى المعايير المهنية.
                      </span>
                    </div>
                    <div className="user-wrapper">
                      <div className="user-content">
                        <div className="inf">
                          <h6 className="fsz-18">
                            <span className="ltr-content">Shahad Ali Boushahri</span>
                            <span className="rtl-content" style={{display: 'none'}}>شهد علي بوشهري – الإدارة التنفيذية </span>
                          </h6>
                          <p className="mt-2" style={{color: '#140202a8'}}>
                            <span className="ltr-content">Executive Management</span>
                            <span className="rtl-content" style={{display: 'none'}}>الإدارة التنفيذية</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slider-controls">
                <div className="swiper-button-prev"></div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-next"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
