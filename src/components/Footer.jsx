import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-column">
          <h4 className="footer-title">Contact Information</h4>
          <p className="footer-text">Ministry of Health</p>
          <p className="footer-contact">(94) 112 555 999</p>
          <p className="footer-contact">contact@maternalcare.lk</p>
        </div>

        <div className="footer-column">
          <h4 className="footer-title">Our Services</h4>
          <ul className="footer-list">
            <li><a href="#services">Vaccination Programs</a></li>
            <li><a href="#services">Health Education</a></li>
            <li><a href="#services">Nutrition Support</a></li>
            <li><a href="#services">Antenatal Care</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-social">
        <a href="#" className="social-link">f</a>
        <a href="#" className="social-link">in</a>
        <a href="#" className="social-link">tw</a>
        <a href="#" className="social-link">yt</a>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Maternal Care Kaduwela. All rights reserved. Designed and developed by IT Team | Kaduwela, Sri Lanka</p>
      </div>
    </footer>
  )
}

export default Footer
