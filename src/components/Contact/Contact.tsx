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
                  Unlock new possibilities—connect with us today to drive your
                  success forward
                </h2>
              </div>

              <ul
                className="contact-details-one animate fadeInUp wow"
                data-wow-duration="1500ms"
                data-wow-delay="600ms"
              >
                <li>
                  <Image
                    src="/assets/images/svg/mail-icon-2.svg"
                    alt="icon"
                    width={40}
                    height={40}
                  />
                  <a href="mailto:info@chrysalinegroup.com">
                    info@chrysalinegroup.com
                  </a>
                </li>
                <li>
                  <Image
                    src="/assets/images/svg/call-icon-2.svg"
                    alt="icon"
                    width={40}
                    height={40}
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
