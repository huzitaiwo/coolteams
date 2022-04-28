import { useState } from 'react'
import { useTheme } from '../../hooks/useTheme'

//syles
import './Signup.css'

export default function Signup() {
  const { mode } = useTheme()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [thumbnail, setThumbnail] = useState(null)

  return (
    <form className={`auth-form ${mode}`}>
      <h2>Sign up</h2>

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

      <label>
        <span>display name:</span>
        <input
          className={mode}
          required
          type="text" 
          onChange={e => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>

      <label>
        <span>profile thumbnail:</span>
        <input
          className={mode}
          required
          type="file"
        />
      </label>

      <button className='btn'>Sign up</button>
    </form>
  )
}
