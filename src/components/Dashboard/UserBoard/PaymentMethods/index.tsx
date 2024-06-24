function PaymentMethods() {
  return (
    <div id="payment">
      <h2>Payment Methods</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            className="form-control"
            id="cardNumber"
            placeholder="Your card number"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="expiryDate">Expiry Date</label>
          <input
            type="text"
            className="form-control"
            id="expiryDate"
            placeholder="MM/YY"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save Payment Details
        </button>
      </form>
    </div>
  )
}

export default PaymentMethods
