import Footer from '../../Components/Footer'
import NavBar from '../../Components/NavBar'
import hiwIcon1 from '../HowItWorks/images/icon1.jpg'
import hiwIcon2 from '../HowItWorks/images/icon2.jpg'
import hiwIcon3 from '../HowItWorks/images/icon3.jpg'
import hiwIcon4 from '../HowItWorks/images/icon4.jpg'
import hiwIcon5 from '../HowItWorks/images/icon5.jpg'
import './style.css'

function HowItWorks() {
  return (
    <>
      <NavBar />
      <section className="hero">
        <div className="container text-center mx-auto">
          <iframe width="1280" height="720" src="https://www.youtube.com/embed/zyD94g1A2q8?autoplay=1" frameBorder="0" allowfullscreen></iframe>
        </div>
      </section>

      <section className="container">
        <h1 className="title text-center mb-5">How does it work?</h1>

        <div className="row">
          <div className="subtitle col-lg-9">
            <h2>1. Search for Parking</h2>
            <h3>Enter your desired location and time. Our platform will show you a list of available parking spaces nearby. You can view detailed descriptions, photos, and reviews.</h3>
          </div>

          <div className="col-lg-3 text-center">
            <img src={hiwIcon1} alt="Image Description" />
          </div>
        </div>
        <div className="row mt-5">
          <div className="subtitle col-lg-9">
            <h2>2. Book Your Spot</h2>
            <h3>Found the perfect space? Reserve it instantly! Some spaces may also offer an instant booking feature, saving you even more time.</h3>
          </div>

          <div className="col-lg-3 text-center">
            <img src={hiwIcon2} alt="Image Description" />
          </div>
        </div>
        <div className="row mt-5">
          <div className="subtitle col-lg-9">
            <h2>3. Easy Navigation</h2>
            <h3>Once booked, you’ll receive detailed instructions and directions to your reserved parking space.</h3>
          </div>

          <div className="col-lg-3 text-center">
            <img src={hiwIcon3} alt="Image Description" />
          </div>
        </div>
        <div className="row mt-5">
          <div className="subtitle col-lg-9">
            <h2>4. Park and Go</h2>
            <h3>Arrive at the location and park your vehicle. Should you have any questions or need assistance, you can always communicate with the parking space owner.</h3>
          </div>

          <div className="col-lg-3 text-center">
            <img src={hiwIcon4} alt="Image Description" />
          </div>
        </div>
        <div className="row mt-5 mb-5">
          <div className="subtitle col-lg-9">
            <h2>5. Payments and Reviews</h2>
            <h3>Payments are automated and processed once your booking starts. After you`&apos`re done, don’t forget to leave a review about your experience!</h3>
          </div>

          <div className="col-lg-3 text-center">
            <img src={hiwIcon5} alt="Image Description" />
          </div>
        </div>
      </section>

      <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="loginModalLabel">
                Welcome to ParkSpot
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-center">
              <form>
                <div className="mb-3">
                  <label htmlFor="emailOrPhone" className="form-label">
                    Email or Phone Number:
                  </label>
                  <input type="text" className="form-control" id="emailOrPhone" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password:
                  </label>
                  <input type="password" className="form-control" id="password" />
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
  )
}

export default HowItWorks
