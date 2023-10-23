import "./ParknerSignup.css";
import parknrsuimg from "../ParknerSignup/image.jpg";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";

function ParknerSignup() {
  return (
    <>
      <NavBar />
      <header className="container-fluid p-5">
        <div className="row header">
          <div className="col-md-6 text-end p-5">
            <img src={parknrsuimg} alt="parknerImage" />
          </div>
          <div className="col-md-6 header-text pl-5">
            <h3>BE OUR</h3>
            <h1>PARKNER</h1>
            <h3>and you could earn</h3>
            <p>UP TO</p>
            <h1>
              P1500 <span>/week</span>
            </h1>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 signup-section-title">
            <h2>SIGNUP AS PARKNER</h2>
          </div>
        </div>
      </header>

      <section className="row-signup">
        <div className="col-md-12 p-5 signup-section">
          <h4 className="heading-signup">Account Information</h4>
          <form>
            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="username" className="form-label">
                  Username:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Enter your username"
                />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="password" className="form-label">
                  Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <h4 className="heading-signup">Parkner Information</h4>
            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="firstname" className="form-label">
                  First Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="middlename" className="form-label">
                  Middle Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="middlename"
                  placeholder="Enter your middle name"
                />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="lastname" className="form-label">
                  Last Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="contact" className="form-label">
                Contact Number:
              </label>
              <input
                type="text"
                className="form-control"
                id="contact"
                placeholder="Enter your contact number"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address:
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="Enter your address"
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="ids" className="form-label">
                Upload 2 Valid ID:
              </label>
              <input type="file" className="form-control" id="ids" />
            </div>

            <h4 className="heading-signup">Parking Information</h4>
            <div className="mb-3">
              <div className="mb-3">
                <label className="form-label">Parking Type:</label>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="parkingType"
                    id="homeParking"
                    value="Home Parking"
                  />
                  <label className="form-check-label" htmlFor="homeParking">
                    Home Parking
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="parkingType"
                    id="establishmentParking"
                    value="Establishment Parking"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="establishmentParking"
                  >
                    Establishment Parking
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="parkingType"
                    id="parkingLot"
                    value="Parking Lot"
                  />
                  <label className="form-check-label" htmlFor="parkingLot">
                    Parking Lot
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="locationLink" className="form-label">
                Google Map Pin Location Link:
              </label>
              <input
                type="text"
                className="form-control"
                id="locationLink"
                placeholder="Enter your location link"
              />
              <p className="tutorial">
                <a href="#">How to get your Location link? Click Here</a>
              </p>
            </div>
            <div className="mb-3">
              <label className="form-label">Parking Cover:</label>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="parkingCover"
                  id="indoor"
                  value="Indoor"
                />
                <label className="form-check-label" htmlFor="indoor">
                  Indoor
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="parkingCover"
                  id="outdoorNotShaded"
                  value="Outdoor-Not Shaded"
                />
                <label className="form-check-label" htmlFor="outdoorNotShaded">
                  Outdoor-Not Shaded
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="parkingCover"
                  id="outdoorShaded"
                  value="Outdoor-Shaded"
                />
                <label className="form-check-label" htmlFor="outdoorShaded">
                  Outdoor-Shaded
                </label>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Days Availability:</label>
              <div className="row">
                <div className="col-2 form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="availability"
                    id="monday"
                    value="Monday"
                  />
                  <label className="form-check-label" htmlFor="monday">
                    Monday
                  </label>
                </div>
                <div className="col-2 form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="availability"
                    id="tuesday"
                    value="Tuesday"
                  />
                  <label className="form-check-label" htmlFor="tuesday">
                    Tuesday
                  </label>
                </div>
                <div className="col-2 form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="availability"
                    id="wednesday"
                    value="Wednesday"
                  />
                  <label className="form-check-label" htmlFor="wednesday">
                    Wednesday
                  </label>
                </div>
                <div className="col-2 form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="availability"
                    id="thursday"
                    value="Thursday"
                  />
                  <label className="form-check-label" htmlFor="thursday">
                    Thursday
                  </label>
                </div>
                <div className="col-2 form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="availability"
                    id="friday"
                    value="Friday"
                  />
                  <label className="form-check-label" htmlFor="friday">
                    Friday
                  </label>
                </div>
                <div className="col-2 form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="availability"
                    id="saturday"
                    value="Saturday"
                  />
                  <label className="form-check-label" htmlFor="saturday">
                    Saturday
                  </label>
                </div>
                <div className="col-2 form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="availability"
                    id="sunday"
                    value="Sunday"
                  />
                  <label className="form-check-label" htmlFor="sunday">
                    Sunday
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="parkingPictures" className="form-label">
                Upload Pictures of Parking Space:
              </label>
              <input
                type="file"
                className="form-control"
                id="parkingPictures"
              />
              <p className="tutorial">
                <a href="#">
                  How properly photography your parking space? Click Here
                </a>
              </p>
            </div>
            <div className="col-3 form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="availability"
                id="friday"
                value="Friday"
              />
              <label className="form-check-label" htmlFor="friday">
                <p>
                  Accept the the <a href="#">Terms and Condition</a>
                </p>
              </label>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ParknerSignup;
