import { Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import listingItems from '../../components/ListingList/data'
import styles from './styles.module.css'

function ListingDetailsScreen() {
  const { id } = useParams()

  const listing = listingItems.find((listing) => listing.id === id)

  return (
    <div className="container my-5 theme-dark">
      <div className="row">
        <div className="col-lg-9">
          <h3 className="text-capitalize">{listing?.title}</h3>
          <p>
            <a href="#" className="posted-link">
              Posted by: {listing?.postedBy}
            </a>
          </p>
          <p className="Info text-capitalize">Location: {listing?.location}</p>
          <p className="Info">
            Available for: {listing?.carType?.map(String).join(', ')}
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

          <h2>Parking Features:</h2>
          <ul>
            {listing?.features.map((feature, idx) => (
              <li key={`feature-${idx}`}>{feature}</li>
            ))}
          </ul>

          {/* Map area */}
        </div>

        <div className={`col-lg-3 ${styles.sidebar}`}>
          <form id="bookingForm">
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
            <div className="d-grid gap-2">
              <Button variant="success" size="sm">
                Reserve
              </Button>
            </div>
          </form>

          <h6>COMPUTATION</h6>
          <p>
            Days of Booking: <span id="daysOfBooking">0</span>
          </p>
          <p>
            Time: <span id="hoursOfBooking">0</span> hours
          </p>
          <p>x Rate/hour</p>
          <h5>
            Total Bill: ₱<span id="totalBill">0.00</span>
          </h5>
        </div>
      </div>
    </div>
  )
}

export default ListingDetailsScreen
