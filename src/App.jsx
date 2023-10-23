import "./CSS/style.css";
import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";
import Footer from "./Components/Footer";
import CollabSection from "./Components/CollabSection";
import PresenceSection from "./Components/PresenceSection";
import ParkNowSection from "./Components/ParkNowSection";
import MobileApp from "./Components/MobileApp";

function App() {
  return (
    <div>
      <NavBar />
      <PresenceSection />
      <HeroSection />
      <ParkNowSection />
      <MobileApp />
      <CollabSection />
      <Footer />
    </div>
  );
}

export default App;
