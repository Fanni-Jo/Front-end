import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';


function ContactUs() {
    const contactUsHandler = async (e) => {
        e.preventDefault();  
        const formData = {
          name:  e.target.name.value,
          email:  e.target.email.value,
          subject: e.target.subject.value,
          message:  e.target.message.value,
        };

        await axios.post("https://fanni-jo.herokuapp.com/contact-us/", formData)
        .then(res => {
            console.log('success', res)




        })
        .catch(e => {
            
        //   console.log("Message error", e)
            
            alert('Message has been successfully sent')
            
  
        }).finally(() => {
            e.target.reset()

          
        })
    }

  return (
    <section class="page-section" id="contact">
    <div class="container">
        <div class="text-center">
            <h2 class="section-heading text-uppercase">Contact Us</h2>
            <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>

        {/* <!-- to get an API token!--> */}
        <form id="contactForm" data-sb-form-api-token="API_TOKEN" onSubmit={contactUsHandler}>
            <div class="row align-items-stretch mb-5">
                <div class="col-md-6">
                    <div class="form-group">
                        {/* <!-- Name input--> */}
                        <input class="form-control" id="name" type="text" placeholder="Your Name *" data-sb-validations="required" />
                        <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                    </div>
                    <div class="form-group">
                        {/* <!-- Email address input--> */}
                        <input class="form-control" id="email" type="email" placeholder="Your Email *" data-sb-validations="required,email" />
                        <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                        <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                    </div>
                    <div class="form-group mb-md-0">
                        {/* <!-- Phone number input--> */}
                        <input class="form-control" id="subject" type="text" placeholder="Subject of your message *" data-sb-validations="required" />
                        <div class="invalid-feedback" data-sb-feedback="subject:required">A Subject is required.</div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group form-group-textarea mb-md-0">
                        {/* <!-- Message input--> */}
                        <textarea class="form-control" id="message" placeholder="Your Message *" data-sb-validations="required"></textarea>
                        <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                    </div>
                </div>
            </div>
            
            <div class="text-center"><button class="btn btn-primary btn-xl text-uppercase" id="submitButton" type="submit">Send Message</button></div>
        </form>
    </div>
</section>
  )
}

export default ContactUs