import ProjectList from '../../components/ProjectList'
import { useCollection } from '../../hooks/useCollection'
import { useTheme } from '../../hooks/useTheme'

// styles
import './Dashboard.css'

export default function Dashboard() {
  const { mode } = useTheme()
  const { documents, isPending, error } = useCollection('projects')

  if (error) {
    return <div className='error'>{error}</div>
  }
  if (isPending) {
    return <h2>loading...</h2>
  }

  return (
    <div>
      {documents && <ProjectList projects={documents} />}
    </div>
  )
}
