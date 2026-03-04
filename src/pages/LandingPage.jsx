import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import WelcomeSection from '../components/WelcomeSection'
import VisionMissionSection from '../components/VisionMissionSection'
import ServicesSection from '../components/ServicesSection'
import Footer from '../components/Footer'

function LandingPage({ onLoginClick }) {
  return (
    <div className="landing-page">
      <Navbar onLoginClick={onLoginClick} />
      <HeroSection />
      <WelcomeSection />
      <VisionMissionSection />
      <ServicesSection />
      <Footer />
    </div>
  )
}

export default LandingPage
