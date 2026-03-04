import '../styles/Sidebar.css'

function Sidebar({ onLogout }) {
  const [activeMenu, setActiveMenu] = useState('dashboard')

  const menuItems = [
    { id: 'dashboard', icon: '📊', label: 'Dashboard' },
    { id: 'appointments', icon: '📅', label: 'Book Appointments' },
    { id: 'history', icon: '📋', label: 'Appointment History' },
    { id: 'nutrition', icon: '🥗', label: 'Nutrition Guidance' },
    { id: 'vaccination', icon: '💉', label: 'Vaccination Scheduler' }
  ]

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="user-avatar">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="12" r="8" fill="#1a5f6f"/>
            <path d="M 5 35 Q 5 25 20 25 Q 35 25 35 35" fill="#1a5f6f"/>
          </svg>
        </div>
      </div>

      <nav className="sidebar-menu">
        {menuItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`menu-item ${activeMenu === item.id ? 'active' : ''}`}
            onClick={() => setActiveMenu(item.id)}
          >
            <span className="menu-icon">{item.icon}</span>
            <span className="menu-label">{item.label}</span>
          </a>
        ))}
      </nav>

      <button className="logout-btn" onClick={onLogout}>
        Logout
      </button>
    </aside>
  )
}

export default Sidebar
