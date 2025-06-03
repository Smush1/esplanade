import amazon from '../images/Amazon.webp'
import indusmela from '../images/Indusmela.webp'


function EcommercePlatform() {
  return (
    <>
  
    {/* <!-- E-commerce Shopping Platform --> */}
    <div className="container store-container">
        <div className="g-3 row">
            {/* <!-- Amazon Button --> */}
            <div className="col-12 col-md-6">
                <a href="https://www.amazon.in/stores/Esplanade/page/6EDF2242-32E3-41A7-8691-029709AF31E9?lp_asin=B09MJ7H2JS&ref_=ast_bln&store_ref=bl_ast_dp_brandLogo_sto" target="_blank" rel="noreferrer" className="text-decoration-underline">
                    <div className="amazon-box store-box">
                        <span>Also available on</span>
                        <img src={amazon} alt="Amazon" />
                    </div>
                </a>
            </div>

            {/* <!-- Indusmela Button --> */}
            <div className="col-12 col-md-6">
                <a href="https://indusmela.in/collections/stonkraft" target="_blank" rel="noreferrer" className="text-decoration-none">
                    <div className="indusmela-box store-box">
                        <span>Shop from our <br/> one-stop store!</span>
                        <img src={indusmela} alt="IndusMela" />
                    </div>
                </a>
            </div>
        </div>
    </div>

    </>
  )
}

export default EcommercePlatform






