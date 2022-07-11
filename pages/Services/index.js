
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

import { useStateContext } from "../../context/categoryState"

function Services() {
const [iscategory, setCategory] = useStateContext();

  return (
    <> 
    
<section className="page-section bg-light" id="services" key="section">
           
            <div className="container" key="cont">
                <div className="text-center" key="text-con">
                    <h2 className="section-heading text-uppercase">Services</h2>
                    <h3 className="section-subheading text-muted">provided by pro technican</h3>
                </div>
                <div className="row" key='item1'>
                    <div className="col-lg-4 col-sm-6 mb-4" key="col1">
                        {/* <!--  item 1--> */}
                        <div className="portfolio-item" key = "iteml">
                        <Link href="/workers" key="workerlin">

                            <a className="portfolio-link" data-bs-toggle="1" href="#" key='anke1'>
                                <div className="portfolio-hover" div='hov1'>
                                </div>
                                <Image className="img-fluid services-images-home" src={pic10} alt="..." onClick={()=>{setCategory(5)}} key='imgg1'/>
                            </a>
                        </Link>
                            <div className="portfolio-caption" key='portfolio-caption'>
                                <div className="portfolio-caption-heading" key='portfolio-captionheading'>carpenter service</div>
                                <div className="portfolio-caption-subheading text-muted" key='portfolio-caption muted'>lets fix</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4" key='col2'>
                        
                        {/* <!--  item 2--> */}
                        <div className="portfolio-item" key='itrem2'>
                        <Link href="/workers" key='linkw2' >
                            
                            <a className="portfolio-link" data-bs-toggle="" href="#" key='ansj12'>
                                <div className="portfolio-hover" key='hover2'>
                                </div>
                                <Image className="img-fluid services-images-home" src={pic11} key ='imgg2'alt="..."  onClick={()=>{setCategory(9)}} />
                            </a>
                            </Link>
                            
                            <div className="portfolio-caption" key='caption2'>
                                <div className="portfolio-caption-heading" key='headings2'>painting and building service</div>
                                <div className="portfolio-caption-subheading text-muted" key='sacdc'>lets fix</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4" key='cl3'>
                        {/* <!--  item 3--> */}
                        <div className="portfolio-item" key='irtem3'>
                            <Link href="/workers" key='links123'>
                            <a className="portfolio-link" data-bs-toggle="" key='link31'>
                                <div className="portfolio-hover" key='hover3'>
                                </div>
                                <Image className="img-fluid services-images-home" key='imgg3'src={pic12}  alt="..." onClick={()=>{setCategory(8)}}/>
                            </a>
                            </Link>
                            
                            

                            <div className="portfolio-caption" key='caption3'>
                                <div className="portfolio-caption-heading" key='caption-haeding3'>agricltural service</div>
                                <div className="portfolio-caption-subheading text-muted" key='subheading3'>lets plant</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0" key='col4'>
                        {/* <!--  item 4--> */}
                        <div className="portfolio-item" key='item41'>
                            <Link href="/workers" key='linke4' >
                            <a className="portfolio-link " key='mklamsd2'  data-bs-toggle="" href="#">
                                <div className="portfolio-hover" key='hoverwe4'>
                                </div>
                                <Image className="img-fluid services-images-home" key='imgg4' src={pic13} alt="..." onClick={()=>{setCategory(6)}} />
                            </a>
                            </Link>
                            <div className="portfolio-caption" key='caption4'>
                                <div className="portfolio-caption-heading" key='caheading4'>cleaned service</div>
                                <div className="portfolio-caption-subheading text-muted" key='subheading45'>lets clean</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0" key='cols5'>
                        {/* <!--  item 5--> */}
                        <div className="portfolio-item" key='item5s'>
                            <Link href="/workers"  key='linke5'>
                            <a className="portfolio-link" key='ans5'data-bs-toggle="" href="#">
                                <div className="portfolio-hover" key='hover5'>
                                </div>
                                <Image className="img-fluid services-images-home" key='imgg5'src={pic16} alt="..." onClick={()=>{setCategory(7)}}/>
                            </a>
                            </Link>
                            <div className="portfolio-caption" key='cap5sa'>
                                <div className="portfolio-caption-heading" key='capheading5'>welding service</div>
                                <div className="portfolio-caption-subheading text-muted" key='subcab5'>lets weld</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6" key='cols6'>
                        {/* <!-- item 6--> */}
                        <div className="portfolio-item" key='asd6'>
                            <Link href="/workers"  key='link6'>


                            <a className="portfolio-link" key='linke6'data-bs-toggle="" href="#" >
                  
                                
                                <Image className="img-fluid services-images-home" key='imgg6s'src={pic15} alt="..." onClick={()=>{setCategory(2)}} />
                            </a>
                            </Link>

                            <div className="portfolio-caption" key='asdx6'>
                                <div className="portfolio-caption-heading" key='head6'>plumbing service</div>
                                <div className="portfolio-caption-subheading text-muted "key='sdjom56'>lets fix</div>
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