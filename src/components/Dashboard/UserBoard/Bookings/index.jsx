function Bookings() {
  return (
    <div id="bookings">
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
  )
}

export default Bookings
