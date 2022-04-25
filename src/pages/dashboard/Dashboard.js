import { useCollection } from '../../hooks/useCollection'

// styles
import './Dashboard.css'

export default function Dashboard() {
  const { documents, isPending, error } = useCollection('projects')

  if (error) {
    return <div className='error'>{error}</div>
  }
  if (isPending) {
    return <h2>loading...</h2>
  }

  return (
    <div>
      <h2 className='page-title'>Dashboard</h2>
      {documents && documents.map(project => (
        <div key={project.id}>{project.name}</div>
      ))}
    </div>
  )
}
