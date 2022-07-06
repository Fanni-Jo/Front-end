import ZaidJarrar from '../src/img/team/ZaidJarrar.PNG';
import Barham from '../src/img/team/Barham.jpg';
import Raneem from '../src/img/team/Raneem.jpg';
import Ahmad from '../src/img/team/ahmad.jpeg';
import Eman from '../src/img/team/Eman.jpg';

import Image from 'next/image';
function About() {
  return (
    <div id ="about">
        <section className="page-section" >
            <div className="container ">
                <div className="text-center " >
                    <h2 className="section-heading text-uppercase ms-10" >About us</h2>
                    <p > Fanni Jo  is the leading platform for connecting individuals looking for household services with top-quality, pre-screened independent service professionals. Fanni instantly matches thousands of customers every week with top-rated professionals in cities all around the world. Fanni is the easiest, most convenient way to hire experts.</p>
                    
                </div>
            </div>
        </section>
        {/* <!-- Team--> */}
        <section className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="team-member">
                            <Image className="mx-auto rounded-circle images" src={ZaidJarrar} alt="..." ></Image>
                            
                            <h4>Zaid Jarrar</h4>
                            <p className="text-muted">Junior Developer </p>
                            <a className="btn btn-dark btn-social mx-2" href="https://github.com/Zaid-Jarrar" aria-label="Parveen Anand Facebook Profile"><i className="fa-brands fa-github"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/zaid-jarrar-4925b7190/" aria-label="Parveen Anand LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                        <Image className="mx-auto rounded-circle images" src={Raneem} alt="..." ></Image>
                            <h4>Raneem Oqaily</h4>
                            <p className="text-muted">Junior Developer</p>
                            <a className="btn btn-dark btn-social mx-2" href="https://github.com/Raneemoqaily7" aria-label="Diana Petersen Facebook Profile"><i className="fa-brands fa-github"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/raneem-oqaily-411b23202/" aria-label="Diana Petersen LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                            <Image className="mx-auto rounded-circle images" src={Barham} alt="..." ></Image>
                            
                            <h4>Barham Farraj</h4>
                            <p className="text-muted">Junior Developer</p>
                            <a className="btn btn-dark btn-social mx-2" href="https://github.com/Farraj007" aria-label="Larry Parker Facebook Profile"><i className="fa-brands fa-github"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/barham-farraj-258683147" aria-label="Larry Parker LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="team-member images text-center">
                            <Image className="mx-auto rounded-circle " src={Ahmad} alt="..." ></Image>
                            
                            <h4>Ahmad Jaara</h4>
                            <p className="text-muted">Junior Developer</p>
                            <a className="btn btn-dark btn-social mx-2" href="https://github.com/ahmadjaara" aria-label="Larry Parker Facebook Profile"><i className="fa-brands fa-github"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/ahmadjaara/" aria-label="Larry Parker LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>

                    
                    <div className="col-lg-4">
                        <div className="team-member images text-center">
                            
                        </div>
                    </div>


                    
                    <div className="col-lg-4">
                        <div className="team-member images text-center">
                            <Image className="mx-auto rounded-circle " src={Eman} alt="..." ></Image>
                            
                            <h4>Eman </h4>
                            <p className="text-muted">Junior Developer</p>
                            <a className="btn btn-dark btn-social mx-2" href="https://github.com/Eman-Alshaikh" aria-label="Larry Parker Facebook Profile"><i className="fa-brands fa-github"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/eman-al-shaikh-hussain-9a4583194/" aria-label="Larry Parker LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </div>
  )
}

export default About