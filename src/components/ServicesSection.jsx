import '../styles/ServicesSection.css'

function ServicesSection() {
  const services = [
    {
      id: 1,
      title: 'Vaccination Programs',
      description: 'Comprehensive immunization services for mothers and children to ensure protection against preventable diseases.'
    },
    {
      id: 2,
      title: 'Health Education Programs',
      description: 'Educational sessions covering maternal health, nutrition, and child care practices for expecting mothers and families.'
    },
    {
      id: 3,
      title: 'Nutrition Support',
      description: 'Expert nutritional guidance and supplementation programs to support maternal and child health throughout pregnancy and beyond.'
    },
    {
      id: 4,
      title: 'Antenatal Care',
      description: 'Regular checkups, screening, and monitoring throughout pregnancy to ensure the health and safety of mother and baby.'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Our Services</h2>
          <div className="title-line"></div>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                {service.id === 1 && <span></span>}
                {service.id === 2 && <span></span>}
                {service.id === 3 && <span></span>}
                {service.id === 4 && <span></span>}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href="#contact" className="service-link">Learn More →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
