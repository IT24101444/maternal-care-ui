import { useState } from 'react'
import '../styles/YourAppointments.css'
import Calendar from '../components/Calendar'
import AppointmentsList from '../components/AppointmentsList'

function YourAppointments() {
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 3, 1))

  const appointments = [
    { date: 'Apr 1, 2025', time: '9:41 AM', location: 'Location', type: 'upcoming' },
    { date: 'Apr 1, 2025', time: '9:41 AM', location: 'Location', type: 'upcoming' },
    { date: 'Apr 1, 2025', time: '9:41 AM', location: 'Location', type: 'upcoming' },
  ]

  const missedAppointments = [
    { date: 'Apr 1, 2025', time: '9:41 AM', location: 'Location', type: 'missed' },
  ]

  return (
    <section className="your-appointments">
      <h2 className="section-title">Your Appointments</h2>
      
      <div className="appointments-grid">
        <div className="calendar-section">
          <Calendar selectedDate={selectedDate} onDateChange={setSelectedDate} />
        </div>

        <div className="appointments-list-section">
          <AppointmentsList 
            title="Upcoming Appointments"
            appointments={appointments}
            type="upcoming"
          />
          
          <AppointmentsList 
            title="Missed Appointments"
            appointments={missedAppointments}
            type="missed"
          />
        </div>
      </div>
    </section>
  )
}

export default YourAppointments
