import "./list_details.css";
import NavBar from "../../Components/NavBar";
import bigPark1 from "../ParkingDetails/images/park1.png";
import park1 from "../ParkingDetails/images/park1.png";
import park2 from "../ParkingDetails/images/park2.png";
import park3 from "../ParkingDetails/images/park3.png";
import park4 from "../ParkingDetails/images/park4.png";

import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";

function ParkingDetails() {
  return (
    <>
      <NavBar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 custom-big-image">
            <img
              src={bigPark1}
              className="img-fluid big-image"
              alt="BigImage"
            />
          </div>

          <div className="col-md-6 gallery-column">
            <div className="row">
              <div className="col-md-6 mb-3">
                <img
                  src={park1}
                  className="img-fluid small-image"
                  alt="SmallImage1"
                />
              </div>
              <div className="col-md-6 mb-3">
                <img
                  src={park2}
                  className="img-fluid small-image"
                  alt="SmallImage 2"
                />
              </div>

              <div className="col-md-6 mb-3">
                <img
                  src={park3}
                  className="img-fluid small-image"
                  alt="SmallImage 3"
                />
              </div>
              <div className="col-md-6 mb-3">
                <img
                  src={park4}
                  className="img-fluid small-image"
                  alt="SmallImage 4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <div className="row">
          <div className="col-lg-9">
            <h3>Home Parking Space in Valenzuela</h3>
            <p>
              <Link href="#" className="posted-link">
                Posted by: Mhanlo Loco
              </Link>
            </p>
            <p className="Info">Paso de Blas Valenzuela</p>
            <p className="Info">
              Available for: Motorcycle, Sedan, SUV, Light Truck
            </p>
            <p>
              Ratings: <i className="fas fa-star"></i> 3.5
            </p>
            <button
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#bookingModal"
            >
              Check Availability & Bookings
            </button>

            <hr />

            <h2>Parking Features:</h2>
            <ul>
              <li>
                <i className="fas fa-check"></i> Covered Parking
              </li>
              <li>
                <i className="fas fa-check"></i> Gated
              </li>
              <li>
                <i className="fas fa-check"></i> Free Car Wash
              </li>
              <li>
                <i className="fas fa-check"></i> Security Camera Coverage
              </li>
              <li>
                <i className="fas fa-check"></i> Close to Public Transit
              </li>
            </ul>
            <hr />

            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  className="gmap_iframe"
                  width="90%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?width=760&amp;height=400&amp;hl=en&amp;q=manila&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="sidebar col-lg-3">
            <div className="form-group">
              <label htmlFor="vehicleType">Vehicle Type:</label>
              <select className="form-control" id="vehicleType">
                <option value="motorcycle">Motorcycle</option>
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
                <option value="lightTruck">Light Truck</option>
              </select>
            </div>
            <p>
              Rate: ₱<span id="selectedRate">0.00</span>
            </p>

            <form id="bookingForm">
              <div className="form-group">
                <label htmlFor="bookingStart">Booking Start:</label>
                <input type="date" className="form-control" id="bookingStart" />
              </div>
              <div className="form-group">
                <label htmlFor="bookingEnd">Booking End:</label>
                <input type="date" className="form-control" id="bookingEnd" />
              </div>
              <div className="form-group">
                <label htmlFor="timeIn">Time In:</label>
                <input type="time" className="form-control" id="timeIn" />
              </div>
              <div className="form-group">
                <label htmlFor="timeOut">Time Out:</label>
                <input type="time" className="form-control" id="timeOut" />
              </div>
              <button
                type="button"
                className="btn btn-success mt-2 "
                id="reserveButton"
              >
                RESERVE
              </button>
            </form>
            <hr />

            <h6>COMPUTATION</h6>
            <p>
              Days of Booking: <span id="daysOfBooking">0</span>
            </p>
            <p>
              Time: <span id="hoursOfBooking">0</span> hours
            </p>
            <p>x Rate/hour</p>
            <h4>
              Total Bill: ₱<span id="totalBill">0.00</span>
            </h4>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ParkingDetails;
