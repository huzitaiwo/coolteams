import { useLogout } from '../../hooks/useLogout'

// styles && components
import './Settings.css'
import ThemeSelector from '../../components/ThemeSelector'

export default function Settings() {
  const { logout, isPending, error } = useLogout()

  return (
    <div>
      <div className="settings-header">
        <ThemeSelector />
        {!isPending && <button onClick={logout} className="btn">Logout</button>}
        {isPending && <button className='btn'>Logging out...</button>}
      </div>
      {error && <div>{error}</div>}
    </div>
  )
}
