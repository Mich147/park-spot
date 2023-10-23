function BookParkSection() {
  return (
    <div
      className="contai
    ner white-background-container"
    >
      <div className="row mt-12">
        <div className="col-md-4">
          <label htmlFor="address">Where do you want to Park</label>
          <input
            type="text"
            id="address"
            className="form-control"
            placeholder="Enter Address, Place, or City"
          />
        </div>

        <div className="col-md-2">
          <label htmlFor="startDate">Booking Start</label>
          <input type="date" id="startDate" className="form-control" />
        </div>

        <div className="col-md-2">
          <label htmlFor="endDate">Booking End</label>
          <input type="date" id="endDate" className="form-control" />
        </div>

        <div className="col-md-2">
          <label htmlFor="vehicleType">Vehicle Type</label>
          <select id="vehicleType" className="form-select">
            <option value="motorcycle">Motorcycle</option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="light-truck">Light Truck</option>
          </select>
        </div>

        <div className="col-md-2">
          <label htmlFor="emptyLabel"></label>
          <button className="btn btn-primary form-control" type="button">
            <i className="fas fa-search"></i> Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookParkSection;
