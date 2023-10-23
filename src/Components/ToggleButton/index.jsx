import iconImage1 from "../../images/icon1.png";
import iconImage2 from "../../images/icon2.png";
import iconImage3 from "../../images/icon3.png";
import { useState } from "react";

function ToggleButton() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    // Update the active button state
    setActiveButton(buttonId);
  };

  return (
    <div className="d-flex flex-column flex-md-row">
      <div
        className={`icon-box me-3 ${
          activeButton === 1 ? "active-icon-box" : ""
        }`}
      >
        <button
          type="button"
          className="btn toggle-button"
          onClick={() => handleButtonClick(1)}
        >
          <img
            src={iconImage1}
            alt="Icon 1"
            className="img-fluid custom-icon"
          />
        </button>
      </div>

      <div
        className={`icon-box me-3 ${
          activeButton === 2 ? "active-icon-box" : ""
        }`}
      >
        <button
          type="button"
          className="btn toggle-button"
          onClick={() => handleButtonClick(2)}
        >
          <img
            src={iconImage2}
            alt="Icon 2"
            className="img-fluid custom-icon"
          />
        </button>
      </div>

      <div
        className={`icon-box me-3 ${
          activeButton === 3 ? "active-icon-box" : ""
        }`}
      >
        <button
          type="button"
          className="btn toggle-button"
          onClick={() => handleButtonClick(3)}
        >
          <img
            src={iconImage3}
            alt="Icon 3"
            className="img-fluid custom-icon"
          />
        </button>{" "}
      </div>
    </div>
  );
}

export default ToggleButton;
