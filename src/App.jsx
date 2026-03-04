import { useState, useEffect } from 'react'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('landing') // 'landing', 'login', or 'dashboard'
  const [loggedInUser, setLoggedInUser] = useState(null)

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = localStorage.getItem('userFullName')
    if (storedUser) {
      setLoggedInUser(storedUser)
      setCurrentPage('dashboard')
    }
  }, [])

  const handleNavigateToLogin = () => {
    setCurrentPage('login')
  }

  const handleLoginSuccess = (userName) => {
    // Store user name and navigate to dashboard
    localStorage.setItem('userFullName', userName)
    setLoggedInUser(userName)
    setCurrentPage('dashboard')
  }

  const handleNavigateToHome = () => {
    setCurrentPage('landing')
  }

  const handleLogout = () => {
    localStorage.removeItem('userFullName')
    setLoggedInUser(null)
    setCurrentPage('landing')
  }

  return (
    <div className="app">
      {currentPage === 'landing' && (
        <LandingPage onLoginClick={handleNavigateToLogin} />
      )}
      {currentPage === 'login' && (
        <LoginPage onBackClick={handleNavigateToHome} onLoginSuccess={handleLoginSuccess} />
      )}
      {currentPage === 'dashboard' && (
        <Dashboard userName={loggedInUser} onLogout={handleLogout} />
      )}
    </div>
  )
}

export default App
