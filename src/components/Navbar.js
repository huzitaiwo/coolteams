import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import { useAuthContext } from '../hooks/useAuthContext'

// styles and components
import './Navbar.css'
import Avatar from './Avatar'

export default function Navbar() {
  const { user } = useAuthContext()
  const { mode } = useTheme()


  const handleClick = () => {
    console.log('click')
  }

  return (
    <header className={mode}>
      <button onClick={handleClick} className="list hamburger">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>

      <form className={`search ${mode}`}>
        <input type="text" placeholder="search" />
      </form>
      <button className={`notification ${mode}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      </button>
      <Link to='/settings'>
        <Avatar src={user.photoURL}/>
      </Link>
    </header>
  )
}
