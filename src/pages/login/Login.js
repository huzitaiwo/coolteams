import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'
import { useLogin } from '../../hooks/useLogin'

// styles
import './Login.css'

export default function Login() {
  const { mode } = useTheme()
  const { login, isPending, error } = useLogin()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = e => {
    e.preventDefault()
    login(email, password)
  }

  return (
    <form onSubmit={handleLogin} className={`auth-form ${mode}`}>
      <h2>Login</h2>

      <label>
        <span>email:</span>
        <input
          className={mode}
          required
          type="email" 
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
      </label>

      <label>
        <span>password:</span>
        <input
          className={mode}
          required
          type="password" 
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
      </label>

      {!isPending && <button className={`btn ${mode}`}>Login</button>}
      {isPending && <button disabled className={`btn ${mode}`}>Loging in...</button>}
      {error && <div className='error'>{error}</div>}

      <div className={`account ${mode}`}>
        <p>Don't have an account yet?</p>
        <Link to='/signup'>Create an account</Link>
      </div>
    </form>
  )
}
