import Image from "next/image"
import pic17 from "../src/img/portfolio/17.svg"
import pic18 from "../src/img/portfolio/18.svg"
import pic19 from "../src/img/portfolio/19.svg"
function Main() {
  return (
<section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Fanni Jo</h2>
                    <h3 className="section-subheading text-muted">Why You should chose us</h3>
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            {/* <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i> */}
                             <Image src={pic17} />
                        </span>
                        <h4 className="my-5">fast</h4>
                        <p className="text-muted">You just need to click some click and Your service its done  </p>
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
    // RANEEEM ------------------------------------------------------------------------
    // <div>
    //     <div className ="container mt-4 mb-4">
    //     <div className ="row">
    //         <div className="col-md-4" >
    //             <div className="card" >
    //                 <img src="img/service.jpg" className="card-img-top" alt="..."></img>
    //                 <div className="card-body">
    //                 <h5 className="card-title">Card title</h5>
    //                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //                 <a href="#" className="btn btn-primary">Click</a>
    //                 </div>
    //             </div>
    //         </div>


    //         <div className="col-md-4 " >
    //            <div className="card" >
    //                 <img src="..." className="card-img-top" alt="..."></img>
    //                 <div className="card-body">
    //                 <h5 className="card-title">Card title</h5>
    //                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //                 <a href="#" className="btn btn-primary">Click</a>
    //                 </div>
    //             </div>


    //         </div>



    //         <div className="col-md-4" >
    //            <div className="card" >
    //                 <img src="..." className="card-img-top" alt="..."></img>
    //                 <div className="card-body">
    //                 <h5 className="card-title">Card title</h5>
    //                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //                 <a href="#" className="btn btn-primary">Click</a>
    //                 </div>
    //             </div>
    //         </div>




    //         <div className="col-md-4 mt-3" >
    //             <div className="card" >
    //                 <img src="..." className="card-img-top" alt="..."></img>
    //                 <div className="card-body">
    //                 <h5 className="card-title">Card title</h5>
    //                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //                 <a href="#" className="btn btn-primary">Click</a>
    //                 </div>
    //             </div>
    //         </div>


    //         <div className="col-md-4 mt-3" >
    //         <div className="card" >
    //                 <img src="..." className="card-img-top" alt="..."></img>
    //                 <div className="card-body">
    //                 <h5 className="card-title">Card title</h5>
    //                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //                 <a href="#" className="btn btn-primary">Click</a>
    //                 </div>
    //             </div>
    //         </div>



    //         <div className="col-md-4 mt-3" >
    //             <div className="card" >
    //                 <img src="..." className="card-img-top" alt="..."></img>
    //                 <div className="card-body">
    //                 <h5 className="card-title">Card title</h5>
    //                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //                 <a href="#" className="btn btn-primary">Click</a>
    //                 </div>
    //             </div>
    //         </div> 
    //     </div>
    // </div>
    // </div>
  )
}

export default Main