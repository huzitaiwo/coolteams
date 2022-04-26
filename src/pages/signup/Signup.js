import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'
import { useSignup } from '../../hooks/useSignup'

//syles
import './Signup.css'

export default function Signup() {
  const { mode } = useTheme()
  const { signup, isPending, error } = useSignup()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [thumbnail, setThumbnail] = useState(null)
  const [thumbnailError, setThumbnailError] = useState(null)

  const handleFileChange = e => {
    setThumbnail(null)

    let file = e.target.files[0]

    if (!file) {
      setThumbnailError('Please select an image file')
      return
    }
    if (!file.type.includes('image')) {
      setThumbnailError('Selected file must be an image')
      return
    }
    if (file.size > 1000000) {
      setThumbnailError('Image file size must be less than 1MB')
      return 
    }

    setThumbnailError(null)
    setThumbnail(file)
  }

  const handleSignup = e => {
    e.preventDefault()
    signup(email, password, displayName, thumbnail)
  }

  return (
    <form onSubmit={handleSignup} className={`auth-form ${mode}`}>
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
          onChange={handleFileChange}
        />
        {thumbnailError && <div className='error'>{thumbnailError}</div>}
      </label>

      {!isPending && <button className={`btn ${mode}`}>Sign up</button>}
      {isPending && <button disabled className={`btn ${mode}`}>Signing up...</button>}
      {error && <div className='error'>{error}</div>}

      <div className='account'>
        <p>Already have an account?</p>
        <Link to='/login'>Login</Link>
      </div>
    </form>
  )
}
