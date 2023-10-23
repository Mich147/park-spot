import phoneImg from "../../images/phone.png";
import appImg from "../../images/apple.png";
import googleImg from "../../images/google.png";

function MobileApp() {
  return (
    <div className="container-mobile">
      <div className="row">
        <div className="phone-image col-md-6 mx-auto">
          <img src={phoneImg} alt="PhoneImage" className="img-fluid" />
        </div>

        <div className="col-md-6 custom-text-column text-center">
          <h2>DOWNLOAD THE APP!</h2>
          <p>The most intuitive and reliable parking app.</p>
          <div className="text-warning">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <div className="App">
            <img src={appImg} alt="AppImage" className="img-fluid" />
            <img src={googleImg} alt="GoogleImage" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileApp;
