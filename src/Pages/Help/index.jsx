import "./help.css";
import Footer from "../../Components/Footer";
import NavBar from "../../Components/NavBar";
import faqImg from "../Help/images/faq.jpg";

function Help() {
  return (
    <>
      <NavBar />
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-lg-3">
            <div className="list-group">
              <a
                href="#faqSection"
                className="list-group-item list-group-item-action fw-bolder text-primary"
              >
                Frequently Asked Questions
              </a>
              <a href="#question2"></a>
              <a
                href="#question3"
                className="list-group-item list-group-item-action"
              >
                How do I book a parking spot on your app?
              </a>
              <a
                href="#question4"
                className="list-group-item list-group-item-action"
              >
                Is my payment information secure when booking a parking spot?
              </a>
              <a
                href="#question5"
                className="list-group-item list-group-item-action"
              >
                What if I need to change my booking details or cancel my
                reservation?
              </a>
              <a
                href="#question6"
                className="list-group-item list-group-item-action"
              >
                What should I do if I can`&apos`t find my booked parking spot
                upon arrival?
              </a>
              <a
                href="#question7"
                className="list-group-item list-group-item-action"
              >
                What should I do if I can`&apos`t find my booked parking spot
                upon arrival?
              </a>
              <a
                href="#question8"
                className="list-group-item list-group-item-action"
              >
                What should I do if I can`&apos`t find my booked parking spot
                upon arrival?
              </a>
              <a
                href="#question9"
                className="list-group-item list-group-item-action"
              >
                Can I book parking for an extended period, such as a week or a
                month?
              </a>
              <a
                href="#question10"
                className="list-group-item list-group-item-action"
              >
                Are the parking spots monitored for safety and security?
              </a>
            </div>
          </div>

          <div className="faq-sec col-lg-9 text-center">
            <div className="collapse show" id="faqSection">
              <h1 className="welcome fw-bolder text-primary text-center">
                Parkspot FAQs
              </h1>
              <h2 className="welcome2 fw-bolder text-dark text-center">
                Your Parking Questions, Our Solutions.
              </h2>
              <img className="welcome3" src={faqImg} alt="Image Description" />
            </div>

            <div className="collapse" id="question2">
              <h2>How do I book a parking spot on your app?</h2>
              <h5>
                Booking a parking spot on our app is simple. First, enter your
                desired location and the date and time you need parking. Our app
                will then display available parking options in that area. Choose
                the one that suits you best, provide any necessary details, and
                confirm your booking.
              </h5>
            </div>

            <div className="collapse" id="question3">
              <h2>
                Is my payment information secure when booking a parking spot?
              </h2>
              <h5>
                Yes, your payment information is highly secure. We use
                industry-standard encryption and follow strict security
                practices to protect your data. Your payment details are
                processed securely through trusted payment gateways.
              </h5>
            </div>

            <div className="collapse" id="question4">
              <h2>
                What if I need to change my booking details or cancel my
                reservation?
              </h2>
              <h5>
                You can easily change your booking details or cancel your
                reservation through our app. Just log in to your account, go to
                your bookings, and follow the provided options for modifications
                or cancellations. Be sure to check our cancellation policy for
                any associated fees.
              </h5>
            </div>

            <div className="collapse" id="question5">
              <h2>
                What should I do if I can`&apos`t find my booked parking spot
                upon arrival?
              </h2>
              <h5>
                {" "}
                In case you can`&apos`t locate your booked parking spot, contact
                our customer support team. We will assist you in finding your
                parking space or provide alternative solutions promptly.
              </h5>
            </div>

            <div className="collapse" id="question6">
              <h2>
                {" "}
                Can I book parking for an extended period, such as a week or a
                month?
              </h2>
              <h5>
                Absolutely, you can book parking for longer durations, such as a
                week or a month. Our app offers flexible booking options, and
                you can select the dates that suit your needs. Some parking
                locations may even provide discounts for extended bookings.
              </h5>
            </div>

            <div className="collapse" id="question7">
              <h2>Do I need to print my booking confirmation?</h2>
              <h5>
                No, you don`&apos`t need to print your booking confirmation. You
                can simply show your booking confirmation on your mobile device
                to the parking attendant upon arrival. It`&apos`s an
                eco-friendly and convenient way to access your parking spot.
              </h5>
            </div>

            <div className="collapse" id="question8">
              <h2>
                What happens if I`&apos`m running late for my booking time?
              </h2>
              <h5>
                You can contact our customer support team through the app or our
                website. We have various communication channels, including
                phone, email, and live chat, to help you with any questions or
                issues you may have.
              </h5>
            </div>

            <div className="collapse" id="question9">
              <h2>How can I contact customer support for assistance?</h2>
              <h5>
                Yes, we take safety and security seriously. Many of our parking
                facilities have 24/7 surveillance and security measures in
                place. We also encourage users to provide feedback and ratings
                to maintain the quality and safety of our parking spaces.
              </h5>
            </div>

            <div className="collapse" id="question10">
              <h2> Are the parking spots monitored for safety and security?</h2>
              <h5>
                Yes, we take safety and security seriously. Many of our parking
                facilities have 24/7 surveillance and security measures in
                place. We also encourage users to provide feedback and ratings
                to maintain the quality and safety of our parking spaces.
              </h5>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Help;
