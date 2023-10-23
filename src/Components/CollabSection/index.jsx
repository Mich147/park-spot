import parknerImg1 from "../../images/partner-1.jpg";
import parknerImg2 from "../../images/partner-2.jpg";
import parknerImg3 from "../../images/partner-3.jpg";
import parkneImg4 from "../../images/partner-4.jpg";

function CollabSection() {
  return (
    <div className="collaborator-container">
      <div className="collab d-flex justify-content-center">
        <h1>OUR COLLABORATORS</h1>
      </div>
      <div className="row mt-4 ">
        <div className="col-md-3 collaborator-item">
          <img src={parknerImg1} alt="Collaborator 1" className="img-fluid" />
        </div>

        <div className="col-md-3 collaborator-item">
          <img src={parknerImg2} alt="Collaborator 2" className="img-fluid" />
        </div>

        <div className="col-md-3 collaborator-item">
          <img src={parknerImg3} alt="Collaborator 3" className="img-fluid" />
        </div>

        <div className="col-md-3 collaborator-item">
          <img src={parkneImg4} alt="Collaborator 4" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default CollabSection;
