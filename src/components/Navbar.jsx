import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M20 2C20 2 10 12 10 18C10 24.627 14.477 30 20 30C25.523 30 30 24.627 30 18C30 12 20 2 20 2Z" fill="#17a2b8"/>
            <path d="M18 16H22M20 14V18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="18" cy="10" r="2" fill="white"/>
          </svg>
          <span>Maternal Care Kaduwela</span>
        </div>
        
        <div className="navbar-menu">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About Us</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#contact" className="nav-link">Contact Us</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
