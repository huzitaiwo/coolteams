import { useTheme } from "../hooks/useTheme"
import lightIcon from '../assets/icon/light.svg'
import darkIcon from '../assets/icon/dark.svg'

export default function ThemeSelector() {
  const { changeMode, mode } = useTheme()

  const toggleMode = () => {
    changeMode(mode === 'dark' ? 'light' : 'dark')
  }
  console.log(mode)

  return (
    <div className="theme-selector">
      <button onClick={toggleMode} className="mode-toggler">
        {mode === 'dark' && <img src={darkIcon} alt="mode toggler" />}
        {mode === 'light' && <img src={lightIcon} alt="mode toggler" />}
      </button>
    </div>
  )
}