import ToggleButton from "../ToggleButton";
import BookParkSection from "../BookParkSection";

function HeroSection() {
  return (
    <div className="hero-image">
      <h1>
        Easy parking at the <br /> tip of your fingers
      </h1>
      <h3>Book your car park now!</h3>
      <h4 className="mt-xl-5  ">
        Select the type of car park you are looking for:
      </h4>
      <ToggleButton />
      <BookParkSection />
    </div>
  );
}

export default HeroSection;
