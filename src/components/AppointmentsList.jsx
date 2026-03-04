import '../styles/AppointmentsList.css'

function AppointmentsList({ title, appointments, type }) {
  return (
    <div className="appointments-list">
      <h3 className="list-title">{title}</h3>
      
      <div className="appointments-table">
        {appointments.map((appointment, index) => (
          <div key={index} className={`appointment-row ${type}`}>
            <div className="appointment-date">{appointment.date}</div>
            <div className="appointment-time">{appointment.time}</div>
            <div className="appointment-location">{appointment.location}</div>
            {type === 'upcoming' && (
              <button className="cancel-btn">Cancel</button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AppointmentsList
