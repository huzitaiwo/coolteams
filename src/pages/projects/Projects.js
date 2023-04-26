import ProjectList from '../../components/ProjectList'
import { useCollection } from '../../hooks/useCollection'
// import { useTheme } from '../../hooks/useTheme'

export default function Projects() {
  // const { mode } = useTheme()
  const { documents, isPending, error } = useCollection('projects')

  if (error) {
    return <div className='error'>{error}</div>
  }
  if (isPending) {
    return <h4>loading...</h4>
  }

  return (
    <div>
      {documents && <ProjectList projects={documents} />}
      projects
    </div>
  )
}
