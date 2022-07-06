
// import pic from '../../src/img/portfolio/5.jpg'

import pic10 from "../src/img/portfolio/10.svg"
import pic11 from "../src/img/portfolio/11.svg"
import pic12 from "../src/img/portfolio/12.svg"
import pic13 from "../src/img/portfolio/13.svg"
import pic14 from "../src/img/portfolio/14.svg"
import pic15 from "../src/img/portfolio/15.svg"
import pic16 from "../src/img/portfolio/16.svg"
import Link from "next/link"
import Image from  'next/image'

import { useStateContext } from "../context/categoryState"

function Services() {
const [iscategory, setCategory] = useStateContext();
  return (
    <> 
    
<section className="page-section bg-light" id="services">
           
            <div className="container">
                <div className="text-center" >
                    <h2 className="section-heading text-uppercase">Services</h2>
                    <h3 className="section-subheading text-muted">provided by pro technican</h3>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-6 mb-4">
                        {/* <!--  item 1--> */}
                        <div className="portfolio-item">
                        <Link href="/workers" >

                            <a className="portfolio-link" data-bs-toggle="1" href="#">
                                <div className="portfolio-hover">
                                </div>
                                <Image className="img-fluid services-images-home" src={pic10} alt="..." onClick={()=>{setCategory(5)}}/>
                            </a>
                        </Link>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">carpenter service</div>
                                <div className="portfolio-caption-subheading text-muted">lets fix</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        
                        {/* <!--  item 2--> */}
                        <div className="portfolio-item">
                        <Link href="/workers" >
                            
                            <a className="portfolio-link" data-bs-toggle="" href="#">
                                <div className="portfolio-hover">
                                </div>
                                <Image className="img-fluid services-images-home" src={pic11} alt="..."  onClick={()=>{setCategory(9)}} />
                            </a>
                            </Link>
                            
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">painting and building service</div>
                                <div className="portfolio-caption-subheading text-muted">lets fix</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        {/* <!--  item 3--> */}
                        <div className="portfolio-item">
                            <Link href="/workers" >
                            <a className="portfolio-link" data-bs-toggle="">
                                <div className="portfolio-hover">
                                </div>
                                <Image className="img-fluid services-images-home" src={pic12}  alt="..." onClick={()=>{setCategory(8)}}/>
                            </a>
                            </Link>
                            
                            

                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">agricltural service</div>
                                <div className="portfolio-caption-subheading text-muted">lets plant</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                        {/* <!--  item 4--> */}
                        <div className="portfolio-item">
                            <Link href="/workers" >
                            <a className="portfolio-link" data-bs-toggle="" href="#">
                                <div className="portfolio-hover">
                                </div>
                                <Image className="img-fluid services-images-home" src={pic13} alt="..." onClick={()=>{setCategory(6)}} />
                            </a>
                            </Link>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">cleaned service</div>
                                <div className="portfolio-caption-subheading text-muted">lets clean</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
                        {/* <!--  item 5--> */}
                        <div className="portfolio-item">
                            <Link href="/workers"  >
                            <a className="portfolio-link" data-bs-toggle="" href="#">
                                <div className="portfolio-hover">
                                </div>
                                <Image className="img-fluid services-images-home" src={pic16} alt="..." onClick={()=>{setCategory(7)}}/>
                            </a>
                            </Link>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">welding service</div>
                                <div className="portfolio-caption-subheading text-muted">lets weld</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        {/* <!-- item 6--> */}
                        <div className="portfolio-item">
                            <Link href="/workers"  >


                            <a className="portfolio-link" data-bs-toggle="" href="#" >
                  
                                
                                <Image className="img-fluid services-images-home" src={pic15} alt="..." onClick={()=>{setCategory(2)}} />
                            </a>
                            </Link>

                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">plumbing service</div>
                                <div className="portfolio-caption-subheading text-muted">lets fix</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
        </>
        
  )
}

export default Services