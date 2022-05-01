import { useTheme } from "../hooks/useTheme"
import lightIcon from '../assets/icon/light.svg'
import darkIcon from '../assets/icon/dark.svg'

export default function ThemeSelector() {
  const { changeMode, mode } = useTheme()

  const toggleMode = () => {
    changeMode(mode === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="theme-selector">
      <button onClick={toggleMode} className="mode-toggler">
        {mode === 'light' && <img src={darkIcon} alt="mode toggler" />}
        {mode === 'dark' && <img src={lightIcon} alt="mode toggler" />}
      </button>
    </div>
  )
}