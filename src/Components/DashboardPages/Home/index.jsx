import { getAuth } from 'firebase/auth'
import { useEffect, useState } from 'react'

function Home() {
  const [user, setUser] = useState(null)

  const [activeButton, setActiveButton] = useState(null)

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId)
  }

  const auth = getAuth()

  useEffect(() => {
    setUser(auth.currentUser)
    console.log(auth.currentUser)
  }, [])
  return (
    <div className="container mt-5">
      <h1 className="text-center">User Dashboard</h1>
      <div className="row">
        <div className="col-lg-3">
          <div className="list-group">
            <button className="list-group-item list-group-item-action" onClick={() => handleButtonClick(1)}>
              Profile
            </button>
            <button className="list-group-item list-group-item-action" onClick={() => handleButtonClick(2)}>
              My Bookings
            </button>
            <button className="list-group-item list-group-item-action" onClick={() => handleButtonClick(3)}>
              Payment Methods
            </button>
            <button className="list-group-item list-group-item-action" onClick={() => handleButtonClick(4)}>
              Booking History
            </button>
            <button className="list-group-item list-group-item-action" onClick={() => handleButtonClick(5)}>
              Notifications
            </button>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="profile">
            <h1>{user ? 'Welcome ' + user.displayName : 'Not login'}</h1>
          </div>
          <div className={activeButton === 1 ? '' : 'collapse'} id="profile">
            <h2>Profile</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" id="username" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="password">Change Password</label>
                <input type="password" className="form-control" id="password" placeholder="New password" />
              </div>
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
            </form>
          </div>
          <div className={activeButton === 2 ? '' : 'collapse'} id="bookings">
            <h2>My Bookings</h2>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Booking ID</th>
                  <th>Date</th>
                  <th>Location</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>12345</td>
                  <td>2023-11-15</td>
                  <td>New York</td>
                  <td>Confirmed</td>
                  <td>
                    <button className="btn btn-primary">Modify</button>
                    <button className="btn btn-danger">Cancel</button>
                  </td>
                </tr>
                <tr>
                  <td>67890</td>
                  <td>2023-11-20</td>
                  <td>Los Angeles</td>
                  <td>Confirmed</td>
                  <td>
                    <button className="btn btn-primary">Modify</button>
                    <button className="btn btn-danger">Cancel</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={activeButton === 3 ? '' : 'collapse'} id="payment">
            <h2>Payment Methods</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="cardNumber">Card Number</label>
                <input type="text" className="form-control" id="cardNumber" placeholder="Your card number" required />
              </div>
              <div className="mb-3">
                <label htmlFor="expiryDate">Expiry Date</label>
                <input type="text" className="form-control" id="expiryDate" placeholder="MM/YY" required />
              </div>
              <button type="submit" className="btn btn-primary">
                Save Payment Details
              </button>
            </form>
          </div>
          <div className={activeButton === 4 ? '' : 'collapse'} id="history">
            <h2>Booking History</h2>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Booking ID</th>
                  <th>Date</th>
                  <th>Location</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>11223</td>
                  <td>2023-10-10</td>
                  <td>Chicago</td>
                  <td>Completed</td>
                </tr>
                <tr>
                  <td>33445</td>
                  <td>2023-09-15</td>
                  <td>Miami</td>
                  <td>Completed</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={activeButton === 5 ? '' : 'collapse'} id="notifications">
            <h2>Notifications</h2>
            <ul>
              <li>New message from support</li>
              <li>Booking reminder for tomorrow</li>
              <li>Special promotion: Get 20% off your next booking!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
