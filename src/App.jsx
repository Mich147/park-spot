import "./CSS/style.css";
import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";
import Footer from "./Components/Footer";
import CollabSection from "./Components/CollabSection";
import PresenceSection from "./Components/PresenceSection";
import ParkNowSection from "./Components/ParkNowSection";
import MobileApp from "./Components/MobileApp";
import TestimonialSection from "./Components/TestimonialSection";
import ScrollTopButton from "./Components/ScrollTopButton";

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <PresenceSection />
      <ParkNowSection />
      <MobileApp />
      <TestimonialSection />
      <CollabSection />
      <TestimonialSection />
      <Footer />
      <ScrollTopButton />
    </div>
  );
}

export default App;
