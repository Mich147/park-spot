import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import "./Blogs.css";
import { Link } from "react-router-dom";
import blogsImg1 from "../Blogs/images/blog1.jpg";
import blogsImg2 from "../Blogs/images/blog2.jpg";
import blogsImg3 from "../Blogs/images/blog3.jpg";
import blogNews1 from "../Blogs/images/news1.jpg";
import blogNews2 from "../Blogs/images/news2.jpg";
import blogNews3 from "../Blogs/images/news3.jpg";
import blogNews4 from "../Blogs/images/news4.jpg";

function Blogs() {
  return (
    <>
      <NavBar />

      <div className="container mt-5">
        <h1 className="text-center">Parkspot Blog and News</h1>
      </div>

      <div className="row">
        <div className="col-lg-9">
          <h2 className="mt-4">Latest Blogs</h2>

          <div className="card mb-4">
            <img src={blogsImg1} className="card-img-top" alt="Blog Post 1" />
            <div className="card-body">
              <h5 className="card-title">
                Top Tips for Finding the Perfect Parking Spot
              </h5>
              <p className="card-text">
                Are you tired of endlessly circling the block in search of an
                elusive parking spot? In our latest blog post, we share expert
                tips to help you find the perfect parking spot effortlessly.
                From strategic planning to utilizing technology, we`&apos`ve got
                you covered. Say goodbye to parking frustrations and make your
                next city visit stress-free. Explore our top tips for a smoother
                parking experience and enjoy hassle-free travels.
              </p>
              <Link to="blog-post-1.html" className="btn btn-primary">
                Read More
              </Link>
            </div>
          </div>

          <div className="card mb-4">
            <img src={blogsImg2} className="card-img-top" alt="Blog Post 2" />
            <div className="card-body">
              <h5 className="card-title">
                Benefits of Booking Parking in Advance
              </h5>
              <p className="card-text">
                Why leave your parking to chance when you can enjoy the peace of
                mind that comes with booking your parking spot in advance? In
                this blog post, we delve into the many benefits of reserving
                your parking space ahead of time. Whether you`&apos`re planning
                a weekend getaway or a busy workday in the city, booking in
                advance ensures convenience, cost savings, and a stress-free
                parking experience.{" "}
              </p>
              <Link to="blog-post-2.html" className="btn btn-primary">
                Read More
              </Link>
            </div>
          </div>

          <div className="card mb-4">
            <img src={blogsImg3} className="card-img-top" alt="Blog Post 2" />
            <div className="card-body">
              <h5 className="card-title">The Future of Parking Technology</h5>
              <p className="card-text">
                Explore the latest innovations in parking technology, from
                mobile apps to smart parking meters. Find out how technology is
                transforming the parking experience.
              </p>
              <Link to="blog-post-2.html" className="btn btn-primary">
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <h2 className="mt-4">Latest News</h2>

          <div className="card mb-4">
            <img src={blogNews1} className="card-img-top" alt="News Item 1" />
            <div className="card-body">
              <h5 className="card-title">
                Traffic Update: Lane Closures on Main Street
              </h5>
              <p className="card-text">
                Stay informed about the lane closures on Main Street due to
                roadwork. Plan your commute accordingly.
              </p>
            </div>
          </div>

          <div className="card mb-4">
            <img src={blogNews2} className="card-img-top" alt="News Item 2" />
            <div className="card-body">
              <h5 className="card-title">
                Parkspot Partners with Local Businesses for Exclusive Discounts
              </h5>
              <p className="card-text">
                Parkspot is excited to announce partnerships with local
                businesses. Park with us and enjoy exclusive discounts at nearby
                restaurants and shops.
              </p>
            </div>
          </div>

          <div className="card mb-4">
            <img src={blogNews3} className="card-img-top" alt="News Item 1" />
            <div className="card-body">
              <h5 className="card-title"> New Bike Lanes in Downtown Area</h5>
              <p className="card-text">
                {" "}
                Downtown`&apos`s roadwork project has introduced bike lanes to
                promote cycling. Enhance your urban commute by using the new
                lanes.
              </p>
            </div>
          </div>

          <div className="card mb-4">
            <img src={blogNews4} className="card-img-top" alt="News Item 2" />
            <div className="card-body">
              <h5 className="card-title">
                {" "}
                Roadwork Update: New Bike Lanes in Downtown Area
              </h5>
              <p className="card-text">
                Downtown`&apos`s roadwork project has introduced bike lanes to
                promote cycling. Enhance your urban commute by using the new
                lanes.
              </p>
            </div>
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

export default Blogs;
