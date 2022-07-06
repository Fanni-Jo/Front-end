import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

function ContactUs() {
  const contactUsHandler = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    await axios
      .post("https://fanni-jo.herokuapp.com/contact-us/", formData)
      .then((res) => {
        // console.log('success', res)
      })
      .catch((e) => {
        //   console.log("Message error", e)

        alert("Message has been successfully sent");
      })
      .finally(() => {
        e.target.reset();
      });
  };

  return (
    <section className="page-section" id="contact">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Contact Us</h2>
          <h3 className="section-subheading text-muted">
            Send us your feedback.
          </h3>
        </div>

        {/* <!-- to get an API token!--> */}
        <form
          id="contactForm"
          data-sb-form-api-token="API_TOKEN"
          onSubmit={contactUsHandler}
        >
          <div className="row align-items-stretch mb-5">
            <div className="col-md-6">
              <div className="form-group">
                {/* <!-- Name input--> */}
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  placeholder="Your Name *"
                  data-sb-validations="required"
                />
                <div
                  className="invalid-feedback"
                  data-sb-feedback="name:required"
                >
                  A name is required.
                </div>
              </div>
              <div className="form-group">
                {/* <!-- Email address input--> */}
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  placeholder="Your Email *"
                  data-sb-validations="required,email"
                />
                <div
                  className="invalid-feedback"
                  data-sb-feedback="email:required"
                >
                  An email is required.
                </div>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="email:email"
                >
                  Email is not valid.
                </div>
              </div>
              <div className="form-group mb-md-0">
                {/* <!-- Phone number input--> */}
                <input
                  className="form-control"
                  id="subject"
                  type="text"
                  placeholder="Subject of your message *"
                  data-sb-validations="required"
                />
                <div
                  className="invalid-feedback"
                  data-sb-feedback="subject:required"
                >
                  A Subject is required.
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group form-group-textarea mb-md-0">
                {/* <!-- Message input--> */}
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="Your Message *"
                  data-sb-validations="required"
                ></textarea>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="message:required"
                >
                  A message is required.
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              className="btn btn-primary btn-xl text-uppercase"
              id="submitButton"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
