import './CSS/style.css'
import CollabSection from './Components/CollabSection'
import Footer from './Components/Footer'
import HeroSection from './Components/HeroSection'
import MobileApp from './Components/MobileApp'
import NavBar from './Components/NavBar'
import NewsLetterSection from './Components/NewsLetterSection'
import ParkNowSection from './Components/ParkNowSection'
import PresenceSection from './Components/PresenceSection'
import ScrollTopButton from './Components/ScrollTopButton'
import TestimonialSection from './Components/TestimonialSection'

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
      <NewsLetterSection />
      {/* <TestimonialSection /> */}
      <Footer />
      <ScrollTopButton />
    </div>
  )
}

export default App
