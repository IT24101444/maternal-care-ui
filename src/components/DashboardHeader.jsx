import '../styles/DashboardHeader.css'

function DashboardHeader({ userName, onLogout }) {
  return (
    <header className="dashboard-header">
      <div className="header-left">
        <button className="back-btn" title="Go back">
          ←
        </button>
      </div>

      <div className="header-center">
        <h2 className="header-greeting">Welcome, {userName}</h2>
      </div>

      <div className="header-right">
        <button className="notification-btn" title="Notifications">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
        </button>
      </div>
    </header>
  )
}

export default DashboardHeader
