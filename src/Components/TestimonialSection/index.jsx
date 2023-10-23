import reviewImg from "../../images/reviews.jpg";
import { Link } from "react-router-dom";

function TestimonialSection() {
  return (
    <div className="testimonial-container text-center mt-5">
      <h1>WHY PARKSPOT?</h1>
      <h3>
        Thousands of users have chosen us as their trusted app for everyday
        parking and also when traveling.
      </h3>

      <div
        id="testimonialCarousel"
        className="carousel slide testimonial-carousel"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="card testimonial-card">
              <div className="card-body">
                <h5 className="card-title">Mei Yumie</h5>
                <i className="fas fa-star"></i> <i className="fas fa-star"></i>{" "}
                <i className="fas fa-star"></i> <i className="fas fa-star"></i>{" "}
                <i className="fas fa-star"></i>
                <p className="card-text">
                  `&quot`Parkspot has revolutionized my parking experience -
                  it`&apos`s convenient, efficient, and a must-have for anyone
                  in the city!`&quot
                </p>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="card testimonial-card">
              <div className="card-body">
                <h5 className="card-title">Totoy Bibo</h5>
                <i className="fas fa-star"></i> <i className="fas fa-star"></i>{" "}
                <i className="fas fa-star"></i> <i className="fas fa-star"></i>{" "}
                <i className="fas fa-star"></i>
                <p className="card-text">
                  `&quotUsing Parkspot is like having a personal parking
                  assistant in your pocket - it saves me time and stress every
                  day.`&quot
                </p>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="card testimonial-card">
              <div className="card-body">
                <h5 className="card-title">Frank Sinat</h5>
                <i className="fas fa-star"></i> <i className="fas fa-star"></i>{" "}
                <i className="fas fa-star"></i> <i className="fas fa-star"></i>{" "}
                <i className="fas fa-star"></i>
                <p className="card-text">
                  `&quotParkspot is the game-changer I`&apos`ve been waiting for
                  - no more circling for parking spaces, just easy bookings and
                  stress-free parking.`&quot
                </p>
              </div>
            </div>
          </div>
        </div>

        <Link
          className="carousel-control-prev"
          href="#testimonialCarousel"
          role="button"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="false"
          ></span>
        </Link>
        <Link
          className="carousel-control-next"
          href="#testimonialCarousel"
          role="button"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="false"
          ></span>
        </Link>
      </div>

      <img src={reviewImg} alt="TestimonialImage" className="img-fluid mt-3" />
    </div>
  );
}

export default TestimonialSection;
