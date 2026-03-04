import '../styles/MotherDetails.css'

function MotherDetails() {
  const motherDetails = {
    fullName: 'Yasodha Silva',
    age: '28 years',
    address: '123 Main Street, Kaduwela',
    husbandGuardianName: 'Roshan Silva',
    phmAssigned: 'PHM - Kaduwela Center',
    mohArea: 'MOH - Colombo District',
    contactNo: '+94 77 123 4567'
  }

  return (
    <div className="mother-details">
      <h2 className="details-title">Mother Details</h2>
      
      <div className="details-content">
        <div className="details-avatar">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="24" r="14" fill="#17a2b8"/>
            <path d="M 10 70 Q 10 50 40 50 Q 70 50 70 70" fill="#17a2b8"/>
          </svg>
        </div>

        <div className="details-info">
          <div className="detail-item">
            <span className="detail-label">Full Name</span>
            <span className="detail-value">{motherDetails.fullName}</span>
          </div>
          
          <div className="detail-item">
            <span className="detail-label">Age</span>
            <span className="detail-value">{motherDetails.age}</span>
          </div>
          
          <div className="detail-item">
            <span className="detail-label">Address</span>
            <span className="detail-value">{motherDetails.address}</span>
          </div>
          
          <div className="detail-item">
            <span className="detail-label">Husband/Guardian Name</span>
            <span className="detail-value">{motherDetails.husbandGuardianName}</span>
          </div>
          
          <div className="detail-item">
            <span className="detail-label">PHM Assigned</span>
            <span className="detail-value">{motherDetails.phmAssigned}</span>
          </div>
          
          <div className="detail-item">
            <span className="detail-label">MOH Area</span>
            <span className="detail-value">{motherDetails.mohArea}</span>
          </div>
          
          <div className="detail-item">
            <span className="detail-label">Contact No</span>
            <span className="detail-value">{motherDetails.contactNo}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MotherDetails
