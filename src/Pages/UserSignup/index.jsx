import "./User-Signup.css";
import Navbar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";

function UserSignup() {
  return (
    <div>
      <Navbar />
      <div className="form-container">
        <div className="row mt-5 mb-5">
          <div className="form-body col-md-4 mx-auto">
            <h3 className="text-center mb-4">Sign Up As User</h3>
            <form
              id="signupForm"
              action="process_signup.php"
              method="POST"
              encType="multipart/form-data"
            >
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="idUpload" className="form-label">
                  Upload Valid ID
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="idUpload"
                  name="idUpload"
                  accept=".jpg, .jpeg, .png, .pdf"
                  required
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="terms"
                  required
                />
                <label className="form-check-label" htmlFor="terms">
                  I agree to the{" "}
                  <Link to="terms.html" target="_blank">
                    Terms and Conditions
                  </Link>
                </label>
              </div>
              <div className="mb-3 text-center">
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </div>
            </form>
            <p className="mt-3 text-center">
              Already have an account? <a href="login.html">Log in</a>
            </p>
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
    </div>
  );
}

export default UserSignup;
