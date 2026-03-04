import LoginForm from '../components/LoginForm'

function LoginPage({ onBackClick, onLoginSuccess }) {
  return (
    <div className="login-page">
      <LoginForm onBackClick={onBackClick} onLoginSuccess={onLoginSuccess} />
    </div>
  )
}

export default LoginPage
