import { useState } from 'react'
import '../styles/LoginForm.css'

function LoginForm({ onBackClick, onLoginSuccess }) {
  const [loginType, setLoginType] = useState('user') // 'user' or 'staff'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      
      // Extract user name from email or use a default
      const userName = email.split('@')[0] || 'User'
      const formattedName = userName
        .replace(/[._-]/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase())
      
      console.log(`${loginType} login:`, { email, password })
      
      // Call the login success callback
      if (onLoginSuccess) {
        onLoginSuccess(formattedName)
      }
    }, 1000)
  }

  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick()
    }
  }

  return (
    <div className="login-container">
      {/* Left Side - Decorative Image Section */}
      <div className="login-side login-image-left">
        <div className="back-button">
          <button onClick={handleBackClick} title="Go back">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
        </div>
        
        <div className="image-placeholder">
          {/* Image goes here - you can replace with <img> tag */}
          <div className="placeholder-content">
            <span>img</span>
          </div>
        </div>

        {/* Toggle Button */}
        <div className="toggle-section">
          <button
            className={`toggle-btn ${loginType === 'staff' ? 'active' : ''}`}
            onClick={() => setLoginType('staff')}
          >
            Staff Login
          </button>
        </div>
      </div>

      {/* Right Side - Form Section */}
      <div className="login-side login-form-right">
        <div className="form-wrapper">
          <h1 className="login-title">
            {loginType === 'user' ? 'User Login' : 'Staff Login'}
          </h1>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">
                {loginType === 'user' ? 'Email' : 'Email / ID'}
              </label>
              <input
                type={loginType === 'user' ? 'email' : 'text'}
                id="email"
                placeholder="Value"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Value"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="sign-in-btn"
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <a href="#forgot" className="forgot-password">
            Forgot password?
          </a>
        </div>
      </div>

      {/* Right Side - Image Section (when in Staff Login) */}
      <div className={`login-side login-image-right ${loginType === 'staff' ? 'active' : ''}`}>
        <div className="image-placeholder">
          {/* Image goes here - you can replace with <img> tag */}
          <div className="placeholder-content">
            <span>img</span>
          </div>
        </div>

        {/* Toggle Button for Staff view */}
        <div className="toggle-section">
          <button
            className={`toggle-btn ${loginType === 'user' ? 'active' : ''}`}
            onClick={() => setLoginType('user')}
          >
            User Login
          </button>
        </div>

        <div className="back-button">
          <button onClick={handleBackClick} title="Go back">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
