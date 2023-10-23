function NewsLetterSection() {
  return (
    <div className="newsletter-container text-center">
      <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
      <p>Get discounts and participate in giveaways.</p>
      <div className="newsletter-form-container">
        <form className="mt-3 newsletter-form">
          <div className="input-group mb-3">
            <input
              type="email"
              className="form-control newsletter-email"
              placeholder="Email"
              aria-label="Email"
              aria-describedby="basic-addon2"
            />
            <button
              className="btn btn-dark newsletter-subscribe"
              type="button"
              id="subscribeButton"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
      <h5>
        *You will receive news, promotions, and discounts. Don`&apos`t worry, we
        are not spam!
      </h5>
      <h5>
        By subscribing, you accept our Privacy Policy to receive commercial
        communications from Parclick. Without any obligation, you can
        unsubscribe whenever you want in the same newsletter.
      </h5>
    </div>
  );
}

export default NewsLetterSection;
