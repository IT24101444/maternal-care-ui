import { useState, useEffect } from 'react'
import '../styles/Dashboard.css'
import Sidebar from '../components/Sidebar'
import DashboardHeader from '../components/DashboardHeader'
import YourAppointments from '../components/YourAppointments'
import MotherDetails from '../components/MotherDetails'
import ChildDetails from '../components/ChildDetails'

function Dashboard({ userName, onLogout }) {
  const [userFullName, setUserFullName] = useState('User')

  useEffect(() => {
    // Retrieve user name from localStorage or props
    const storedName = localStorage.getItem('userFullName') || userName || 'User'
    setUserFullName(storedName)
  }, [userName])

  return (
    <div className="dashboard">
      <Sidebar onLogout={onLogout} />
      
      <div className="dashboard-content">
        <DashboardHeader userName={userFullName} onLogout={onLogout} />
        
        <div className="dashboard-main">
          <div className="welcome-section">
            <h1 className="welcome-title">Welcome, {userFullName}</h1>
          </div>

          <YourAppointments />

          <div className="details-section">
            <div className="details-grid">
              <MotherDetails />
              <ChildDetails />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
