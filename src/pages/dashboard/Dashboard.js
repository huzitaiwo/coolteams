import { useTheme } from '../../hooks/useTheme'

// styles
import './Dashboard.css'

export default function Dashboard() {
  const { mode } = useTheme()

  return (
    <div>
      <p className="page-title">Dashbaord</p>
    </div>
  )
}
