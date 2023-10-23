import "./listing.css";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import BookParkSection from "../../Components/BookParkSection";
import ScrollTopButton from "../../Components/ScrollTopButton";
import { useState } from "react";
import housePark1 from "../Listing/images/park1.png";
import housePark2 from "../Listing/images/park2.png";
import housePark3 from "../Listing/images/park3.png";
import housePark4 from "../Listing/images/park4.png";
import housePark5 from "../Listing/images/park5.png";
import housePark6 from "../Listing/images/park6.png";
import housePark7 from "../Listing/images/park7.png";
import housePark8 from "../Listing/images/park8.png";
import parkst1 from "../Listing/images/prkst1.jpg";
import parkst2 from "../Listing/images/prkst2.jpg";
import parkst3 from "../Listing/images/prkst3.jpg";
import parkst4 from "../Listing/images/prkst4.jpg";
import parklt1 from "../Listing/images/prklt1.jpg";
import parklt2 from "../Listing/images/prklt2.jpg";
import parklt3 from "../Listing/images/prklt3.jpg";
import parklt4 from "../Listing/images/prklt4.jpg";
import { Link } from "react-router-dom";

function Listing() {
  const [filterValue, setFilterValue] = useState("all");

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };
  return (
    <>
      <NavBar />
      <BookParkSection />

      <hr className="mt-5" />

      <section className="list-container">
        <div className="row">
          <div className="col-md-12 mt-4">
            <label className="form-label">Filter:</label>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="filterRadio"
                id="allRadio"
                value="all"
                checked={filterValue === "all"}
                onChange={handleFilterChange}
              />
              <label className="form-check-label" htmlFor="allRadio">
                All
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="filterRadio"
                id="homeParkingRadio"
                value="homeParking"
                checked={filterValue === "homeParking"}
                onChange={handleFilterChange}
              />
              <label className="form-check-label" htmlFor="homeParkingRadio">
                Home-Parking
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="filterRadio"
                id="establishmentParkingRadio"
                value="establishmentParking"
                checked={filterValue === "establishmentParking"}
                onChange={handleFilterChange}
              />
              <label
                className="form-check-label"
                htmlFor="establishmentParkingRadio"
              >
                Establishment Parking
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="filterRadio"
                id="parkingLotRadio"
                value="parkingLot"
                checked={filterValue === "parkingLot"}
                onChange={handleFilterChange}
              />
              <label className="form-check-label" htmlFor="parkingLotRadio">
                Parking Lot
              </label>
            </div>
          </div>
        </div>
      </section>

      <section className="row mt-4" id="boxContainer">
        <div className="col-md-2 box all homeParking">
          <img className="list-img" src={housePark1} alt="Location 1" />
          <h6>Location:</h6>
          <p>Valenzuela</p>
          <h6>Type of Parking:</h6>
          <p>Home-Parking</p>
          <h6>Available for:</h6>
          <p>SUV</p>
          <h6>Distance:</h6>
          <p>1 mile</p>
          <h6>Ratings:</h6>
          <p className="star">★★★★★</p>
          <button className="btn btn-primary btn-sm" id="detailsButton">
            <Link
              to="http://localhost:5174/parking-details"
              className="details-btn"
            >
              Details
            </Link>
          </button>
        </div>

        <div className="col-md-2 box all homeParking">
          <img className="list-img" src={housePark2} alt="Location 1" />
          <h6>Location:</h6>
          <p>Quezon</p>
          <h6>Type of Parking:</h6>
          <p>Home-Parking</p>
          <h6>Available for:</h6>
          <p>Sedan</p>
          <h6>Distance:</h6>
          <p>1 mile</p>
          <h6>Ratings:</h6>
          <p className="star">★★★★★</p>
          <button className="btn btn-primary btn-sm" id="detailsButton">
            Details
          </button>
        </div>

        <div className="col-md-2 box all homeParking">
          <img className="list-img" src={housePark3} alt="Location 1" />
          <h6>Location:</h6>
          <p>Taguig</p>
          <h6>Type of Parking:</h6>
          <p>Home-Parking</p>
          <h6>Available for:</h6>
          <p>Motorcycle</p>
          <h6>Distance:</h6>
          <p>1 mile</p>
          <h6>Ratings:</h6>
          <p className="star">★★★★★</p>
          <button className="btn btn-primary btn-sm" id="detailsButton">
            Details
          </button>
        </div>

        <div className="col-md-2 box all homeParking">
          <img className="list-img" src={housePark4} alt="Location 1" />
          <h6>Location:</h6>
          <p>Pasay</p>
          <h6>Type of Parking:</h6>
          <p>Home-Parking</p>
          <h6>Available for:</h6>
          <p>Motorcycle/Sedan/SUV/</p>
          <h6>Distance:</h6>
          <p>1 mile</p>
          <h6>Ratings:</h6>
          <p className="star">★★★★★</p>
          <button className="btn btn-primary btn-sm" id="detailsButton">
            Details
          </button>
        </div>

        <div className="col-md-2 box all homeParking">
          <img className="list-img" src={housePark5} alt="Location 1" />
          <h6>Location:</h6>
          <p>Manila</p>
          <h6>Type of Parking:</h6>
          <p>Home-Parking</p>
          <h6>Available for:</h6>
          <p>Sedan/SUV/Light Truck</p>
          <h6>Distance:</h6>
          <p>1 mile</p>
          <h6>Ratings:</h6>
          <p className="star">★★★★★</p>
          <button className="btn btn-primary btn-sm" id="detailsButton">
            Details
          </button>
        </div>

        <div className="col-md-2 box all homeParking">
          <img className="list-img" src={housePark6} alt="Location 1" />
          <h6>Location:</h6>
          <p>Caloocan</p>
          <h6>Type of Parking:</h6>
          <p>Home-Parking</p>
          <h6>Available for:</h6>
          <p>Motorcycle/Sedan/SUV</p>
          <h6>Distance:</h6>
          <p>1 mile</p>
          <h6>Ratings:</h6>
          <p className="star">★★★★★</p>
          <button className="btn btn-primary btn-sm" id="detailsButton">
            Details
          </button>
        </div>

        <div className="col-md-2 box all homeParking">
          <img className="list-img" src={housePark7} alt="Location 1" />
          <h6>Location:</h6>
          <p>Mandaluyong</p>
          <h6>Type of Parking:</h6>
          <p>Home-Parking</p>
          <h6>Available for:</h6>
          <p>Motorcycle/Sedan/SUV</p>
          <h6>Distance:</h6>
          <p>1 mile</p>
          <h6>Ratings:</h6>
          <p className="star">★★★★★</p>
          <button className="btn btn-primary btn-sm" id="detailsButton">
            Details
          </button>
        </div>

        <div className="col-md-2 box all homeParking">
          <img className="list-img" src={housePark8} alt="Location 1" />
          <h6>Location:</h6>
          <p>Pasig</p>
          <h6>Type of Parking:</h6>
          <p>Home-Parking</p>
          <h6>Available for:</h6>
          <p>Motorcycle</p>
          <h6>Distance:</h6>
          <p>1 mile</p>
          <h6>Ratings:</h6>
          <p className="star">★★★★★</p>
          <button className="btn btn-primary btn-sm" id="detailsButton">
            Details
          </button>
        </div>

        <div className="col-md-2 box all establishmentParking">
          <img className="list-img" src={parkst1} alt="Location 2" />
          <h6>Location:</h6>
          <p>Valenzuela</p>
          <h6>Type of Parking:</h6>
          <p>Establishment-Parking</p>
          <h6>Available for:</h6>
          <p>Motorcycle/Sedan/SUV</p>
          <h6>Distance:</h6>
          <p>1 mile</p>
          <h6>Ratings:</h6>
          <p className="star">★★★★★</p>
          <button className="btn btn-primary btn-sm" id="detailsButton">
            Details
          </button>
        </div>

        <div className="col-md-2 box all establishmentParking">
          <img className="list-img" src={parkst2} alt="Location 2" />
          <h6>Location:</h6>
          <p>Manila</p>
          <h6>Type of Parking:</h6>
          <p>Establishment-Parking</p>
          <h6>Available for:</h6>
          <p>Motorcycle/Sedan/SUV</p>
          <h6>Distance:</h6>
          <p>1 mile</p>
          <h6>Ratings:</h6>
          <p className="star">★★★★★</p>
          <button className="btn btn-primary btn-sm" id="detailsButton">
            Details
          </button>
        </div>

        <div className="col-md-2 box all establishmentParking">
          <img className="list-img" src={parkst3} alt="Location 2" />
          <h6>Location:</h6>
          <p>Makati</p>
          <h6>Type of Parking:</h6>
          <p>Establishment-Parking</p>
          <h6>Available for:</h6>
          <p>Motorcycle/Sedan/SUV</p>
          <h6>Distance:</h6>
          <p>1 mile</p>
          <h6>Ratings:</h6>
          <p className="star">★★★★★</p>
          <button className="btn btn-primary btn-sm" id="detailsButton">
            Details
          </button>
        </div>

        <div className="col-md-2 box all establishmentParking">
          <img className="list-img" src={parkst4} alt="Location 2" />
          <h6>Location:</h6>
          <p>Las Pinas</p>
          <h6>Type of Parking:</h6>
          <p>Establishment-Parking</p>
          <h6>Available for:</h6>
          <p>Motorcycle/Sedan/SUV</p>
          <h6>Distance:</h6>
          <p>1 mile</p>
          <h6>Ratings:</h6>
          <p className="star">★★★★★</p>
          <button className="btn btn-primary btn-sm" id="detailsButton">
            Details
          </button>
        </div>

        <div className="col-md-2 box all parkingLot">
          <img className="list-img" src={parklt1} alt="Location 3" />
          <h6>Location:</h6>
          <p>Manila</p>
          <h6>Type of Parking:</h6>
          <p>Parking-Lot</p>
          <h6>Available for:</h6>
          <p>Motorcycle/Sedan/SUV</p>
          <h6>Distance:</h6>
          <p>1 mile</p>
          <h6>Ratings:</h6>
          <p className="star">★★★★★</p>
          <button className="btn btn-primary btn-sm" id="detailsButton">
            Details
          </button>
        </div>

        <div className="col-md-2 box all parkingLot">
          <img className="list-img" src={parklt2} alt="Location 4" />
          <h6>Location:</h6>
          <p>Manila</p>
          <h6>Type of Parking:</h6>
          <p>Parking-Lot</p>
          <h6>Available for:</h6>
          <p>Motorcycle/Sedan/SUV</p>
          <h6>Distance:</h6>
          <p>1 mile</p>
          <h6>Ratings:</h6>
          <p className="star">★★★★★</p>
          <button className="btn btn-primary btn-sm" id="detailsButton">
            Details
          </button>
        </div>
        <div className="col-md-2 box all parkingLot">
          <img className="list-img" src={parklt3} alt="Location 4" />
          <h6>Location:</h6>
          <p>Manila</p>
          <h6>Type of Parking:</h6>
          <p>Parking-Lot</p>
          <h6>Available for:</h6>
          <p>Motorcycle/Sedan/SUV</p>
          <h6>Distance:</h6>
          <p>1 mile</p>
          <h6>Ratings:</h6>
          <p className="star">★★★★★</p>
          <button className="btn btn-primary btn-sm" id="detailsButton">
            Details
          </button>
        </div>
        <div className="col-md-2 box all parkingLot">
          <img className="list-img" src={parklt4} alt="Location 4" />
          <h6>Location:</h6>
          <p>Manila</p>
          <h6>Type of Parking:</h6>
          <p>Parking-Lot</p>
          <h6>Available for:</h6>
          <p>Motorcycle/Sedan/SUV</p>
          <h6>Distance:</h6>
          <p>1 mile</p>
          <h6>Ratings:</h6>
          <p className="star">★★★★★</p>
          <button className="btn btn-primary btn-sm" id="detailsButton">
            Details
          </button>
        </div>
      </section>

      <Footer />
      <ScrollTopButton />
    </>
  );
}

export default Listing;
