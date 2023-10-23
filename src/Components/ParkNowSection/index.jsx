import parkNowImage from "../../images/collage.png";

function ParkNowSection() {
  return (
    <div className="description-container">
      <div className="row custom-row-no-padding">
        <div className="col-md-6 col-sm-12 custom-column-unique1 mx-auto">
          <h3>
            When you slide your finger across our app everything changes.
            Because parking is no longer a challenge.
          </h3>
          <h4>
            You decide where, when to park and which car park suits you best.
            You save money, you save time. And you realize that parking can be
            fast, easy, and you always arrive on time.
          </h4>
        </div>
        <div className="col-md-6 col-sm-12 custom-column-unique2 mx-auto">
          <img src={parkNowImage} alt="parknowimg" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default ParkNowSection;
