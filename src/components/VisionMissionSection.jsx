import '../styles/VisionMissionSection.css'

function VisionMissionSection() {
  return (
    <section className="vision-mission">
      <div className="vision-mission-container">
        <div className="vision-card">
          <h3 className="vm-title">Our Vision</h3>
          <p className="vm-text">
            "A healthier nation that contributes to its economic, social and spiritual development"
          </p>
        </div>

        <div className="mission-card">
          <h3 className="vm-title">Our Mission</h3>
          <p className="vm-text">
            "To contribute to social and economic development of Sri Lanka by achieving the highest possible health status through promotive, preventive, curative and rehabilitative services of high quality made available and accessible to people of the country"
          </p>
        </div>
      </div>
    </section>
  )
}

export default VisionMissionSection
