import React from "react";
import Image from "next/image";
const Contact = () => {
  return (
    <div className="contact-section-one">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="contact-left-one">
              <div className="heading-box">
                <span
                  className="sub-title animate fadeInUp wow"
                  data-wow-duration="1500ms"
                >
                  Contact
                </span>
                <h2
                  className="heading-title animate fadeInUp wow"
                  data-wow-duration="1500ms"
                  data-wow-delay="200ms"
                >
                  Get free business consultation Today
                </h2>
              </div>
              <p
                className="lead animate fadeInUp wow"
                data-wow-duration="1500ms"
                data-wow-delay="400ms"
              >
                At uniqo, we are a renowned global consulting.
              </p>
              <ul
                className="contact-details-one animate fadeInUp wow"
                data-wow-duration="1500ms"
                data-wow-delay="600ms"
              >
                <li>
                  <Image
                    src="/assets/images/svg/addres-icon-2.svg"
                    alt="icon"
                    width={50}
                    height={50}
                  />
                  <p>Old Westbury 256, New York 11201, United States</p>
                </li>
                <li>
                  <Image
                    src="/assets/images/svg/mail-icon-2.svg"
                    alt="icon"
                    width={50}
                    height={50}
                  />
                  <a href="mailto:Uniqu@example.com">Uniqu@example.com</a>
                </li>
                <li>
                  <Image
                    src="/assets/images/svg/call-icon-2.svg"
                    alt="icon"
                    width={50}
                    height={50}
                  />
                  <a href="tel:+995599874749">599 87 47 49</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-7">
            <div
              className="contact-form-one animate fadeInRight wow"
              data-wow-duration="1500ms"
            >
              <form action="#">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="form-control"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={4}
                    className="form-control"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-secondary btn-theme">
                  Send +
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
