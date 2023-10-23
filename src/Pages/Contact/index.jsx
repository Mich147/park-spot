import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";
import NavBar from "../../Components/NavBar";
import "./Contact.css";

function Contact() {
  return (
    <>
      <NavBar />
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-lg-6">
            <h2>Contact Us</h2>
            <p>
              We value your feedback and are here to assist you. Please use the
              contact form or the provided contact details to reach out to us.
            </p>

            <address>
              <p>
                <strong>Address:</strong> 123 Park Lane
              </p>
              <p>Cityville, PHILIPPINES</p>
              <p>
                <strong>Phone:</strong> +1-123-456-7890
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@parkspot.com">info@parkspot.com</a>
              </p>
              <p>
                <strong>Support Email:</strong>{" "}
                <a href="mailto:support@parkspot.com">support@parkspot.com</a>
              </p>
              <p>
                <strong>Follow Us: </strong>
                <Link to="https://www.facebook.com/parkspot" target="_blank">
                  <i className="fab fa-facebook me-2"></i>
                </Link>
                <Link to="https://twitter.com/parkspot" target="_blank">
                  <i className="fab fa-twitter me-2"></i>
                </Link>
                <Link to="https://www.instagram.com/parkspot" target="_blank">
                  <i className="fab fa-instagram me-2"></i>
                </Link>
                <Link to="https://www.youtube.com/parkspot" target="_blank">
                  <i className="fab fa-youtube me-2"></i>
                </Link>
              </p>
            </address>
          </div>
          <div className="form col-lg-6">
            <h3 className="formbox text-center ">
              For Comments and Suggestions
            </h3>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Your Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="help-btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="loginModalLabel">
                Welcome to ParkSpot
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              <form>
                <div className="mb-3">
                  <label htmlFor="emailOrPhone" className="form-label">
                    Email or Phone Number:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="emailOrPhone"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password:
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer justify-content-center">
              <button type="button" className="btn btn-primary">
                Login
              </button>
            </div>
            <hr className="my-4" />
            <p>Or</p>
            <div className="d-flex flex-column align-items-center">
              <button className="btn btn-primary btn-md mb-2 w-100 custom-modal-button facebook">
                <i className="fab fa-facebook"></i> Continue with Facebook
              </button>
              <button className="btn btn-primary btn-md w-100 custom-modal-button email">
                <i className="fas fa-envelope"></i> Continue with Email
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
