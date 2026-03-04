import '../styles/WelcomeSection.css'

function WelcomeSection() {
  return (
    <section className="welcome" id="about">
      <div className="welcome-container">
        <div className="welcome-content">
          <div className="welcome-icon">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <path d="M30 3C30 3 15 18 15 27C15 36.94 21.716 45 30 45C38.284 45 45 36.94 45 27C45 18 30 3 30 3Z" fill="#17a2b8"/>
              <path d="M27 24H33M30 21V27" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="27" cy="15" r="3" fill="white"/>
            </svg>
          </div>
          
          <div className="welcome-text">
            <h2 className="welcome-title">Welcome</h2>
            <h3 className="welcome-subtitle">Maternal Care Kaduwela</h3>
            
            <p className="welcome-description">
              We are committed to providing comprehensive maternal health services to ensure the wellbeing of mothers and their babies. Our expert team delivers safe, compassionate, and culturally sensitive care to every mother and child we serve. With decades of experience and modern medical facilities, we provide the highest standard of maternal healthcare accessible to all communities.
            </p>

            <div className="welcome-divider"></div>
            
            <div className="welcome-cta">
              <button className="cta-button">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WelcomeSection
