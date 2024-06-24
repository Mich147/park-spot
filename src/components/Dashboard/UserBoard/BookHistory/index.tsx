function BookHistory() {
  return (
    <div>
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
  )
}

export default BookHistory
