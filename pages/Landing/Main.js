import Image from "next/image"
import pic17 from "../src/img/portfolio/17.svg"
import pic18 from "../src/img/portfolio/18.svg"
import pic19 from "../src/img/portfolio/19.svg"
function Main() {
  return (
<section className="page-section" id="features">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Fanni Jo</h2>
                    <h3 className="section-subheading text-muted text-wrap">Why You should chosse us</h3>
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            {/* <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i> */}
                             <Image src={pic17} />
                        </span>
                        <h4 className="my-5">fast</h4>
                        <p className="text-muted text-wrap">It does not matter where you live, we will be there! </p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            {/* <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-laptop fa-stack-1x fa-inverse"></i> */}
                            <Image src={pic18} />
                        </span>
                        <h4 className="my-5">profiecient</h4>
                        <p className="text-muted">All service will be provide by profiecient technican with high experience</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            {/* <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-lock fa-stack-1x fa-inverse"></i> */}
                            <Image src={pic19} />
                           
                        </span>
                        <h4 className="my-5">Security</h4>
                        <p className="text-muted">you will not be ware for any thing we will garanty our technican</p>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Main