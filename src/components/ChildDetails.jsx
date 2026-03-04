import '../styles/ChildDetails.css'

function ChildDetails() {
  const childrenDetails = [
    {
      id: 1,
      name: 'Child Name',
      dateOfBirth: 'Date of Birth',
      status: 'Status'
    },
    {
      id: 2,
      name: 'Child Name',
      dateOfBirth: 'Date of Birth',
      status: 'Status'
    },
    {
      id: 3,
      name: 'Child Name',
      dateOfBirth: 'Date of Birth',
      status: 'Status'
    }
  ]

  return (
    <div className="child-details">
      <h2 className="details-title">Child Details</h2>
      
      <div className="children-list">
        {childrenDetails.map((child) => (
          <div key={child.id} className="child-item">
            <div className="child-header">
              <h3 className="child-name">{child.name}</h3>
            </div>
            <div className="child-info">
              <p><strong>Date of Birth:</strong> {child.dateOfBirth}</p>
              <p><strong>Status:</strong> {child.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChildDetails
