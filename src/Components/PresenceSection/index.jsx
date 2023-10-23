import presenceImage from "../../images/pressence.png";

function PresenceSection() {
  return (
    <div className="container-fluid custom-container-2">
      <div className="content-container">
        <div className="content-box mt-2">
          <img src={presenceImage} alt="img" />
        </div>
        <div className="content-box">
          <h2>2 MILLION+</h2>
          <h3>SATISFIED USERS</h3>
        </div>
        <div className="content-box">
          <h2>8</h2>
          <h3>PROVINCES</h3>
        </div>
        <div className="content-box">
          <h2>75</h2>
          <h3>CITIES</h3>
        </div>
        <div className="content-box">
          <h2>800+</h2>
          <h3>CAR PARKS</h3>
        </div>
      </div>
    </div>
  );
}

export default PresenceSection;
