function HeroBanner({desktopBanner, mobileBanner}) {
    return (
      <>
  
          {/* <!-- carousel section --> */}
          <div id='main-banner-section' className="container-fluid px-3">
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      {/*         <!-- Indicators --> */}
         {/*      <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                      aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                      aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                      aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                      aria-label="Slide 4"></button>
              </div> */}
  
  {/*             <!-- Carousel Items --> */}
              <div className="carousel-inner">
                  <div className="carousel-item active">
                      <div className="mobile-banner-wrapper">
                      <img loading="eager" fetchPriority="high" src={mobileBanner} className="w-100 carousel-image mobile-banner" style={{ height: "auto", width: "100%", aspectRatio: "auto"  }} alt="Desktop Banner" srcSet={         
                      mobileBanner +  " 210w, " 
                      + mobileBanner +  " 420w, " 
                      + mobileBanner +  " 440w, "
                      + mobileBanner +  " 575w, " 
                      + mobileBanner +  " 630w, "
                      + mobileBanner +  " 830w " } />
                      <div className="overlay"></div>
                          <img loading="eager" fetchPriority="high" src={desktopBanner} className="carousel-image desktop-banner" style={{ height: "auto", width: "100%", aspectRatio: "auto" }} alt="Mobile Banner" srcSet={ 
                              desktopBanner +  " 900w," + 
                              desktopBanner +  " 1000w," + 
                              desktopBanner +  " 1100w," + 
                              desktopBanner +  " 1200w," + 
                              desktopBanner +  " 1300w," + 
                              desktopBanner +  " 1400w," +              
                              desktopBanner +  " 1440w " } />              
                          <div className="carousel-caption">
                              <h1 className="pb-2">Handcrafted Décor Rooted <br/>in Indian Craftsmanship</h1>
                              <p className="pb-2">Discover a thoughtfully curated range of wall art, idols, accents, and more—each piece handmade with care, inspired by tradition, and crafted to elevate modern living. Esplanade proudly retails globally through <a href="https://www.indusmela.com" target="_blank" rel="noreferrer"  className="hero-banner-link">Indusmela.com</a>, <a href="https://www.indusmela.in" target="_blank" rel="noreferrer"  className="hero-banner-link">Indusmela.in</a> and <a href="https://www.amazon.in/stores/Esplanade/page/6EDF2242-32E3-41A7-8691-029709AF31E9?lp_asin=B09MJ7H2JS&ref_=ast_bln&store_ref=bl_ast_dp_brandLogo_sto" target="_blank" rel="noreferrer"  className="hero-banner-link">Amazon</a> ensuring quality, fair pricing, and dependable delivery. Bringing the warmth of Indian artistry into homes across the world.</p>
                              <a href="#featured-products" className="btn btn-custom" aria-label='View Products' >VIEW PRODUCTS</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      </>
    )
  }
  
  export default HeroBanner