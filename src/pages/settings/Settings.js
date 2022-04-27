import { useLogout } from '../../hooks/useLogout'
import { useTheme } from '../../hooks/useTheme'

// styles && components
import './Settings.css'
import ThemeSelector from '../../components/ThemeSelector'

export default function Settings() {
  const { mode } = useTheme()
  const { logout, isPending } = useLogout()

  return (
    <div>
      <div className="settings-header">
        <ThemeSelector />
        {!isPending && <button onClick={logout} className={`btn ${mode}`}>Logout</button>}
        {isPending && <button className={`btn ${mode}`}>Logging out...</button>}
      </div>
    </div>
  )
}
