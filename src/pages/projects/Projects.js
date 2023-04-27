import { Link } from 'react-router-dom'

// components & styles
import ProjectList from '../../components/ProjectList'
import Header from '../../components/Header'
import './Projects.css'

// hooks
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

  // if (documents.length === 0) {
  //   return <p className={`project-redirect ${mode}`}>No projects yet! Add a new project <Link to='/create'>here</Link></p>
  // }

  return (
    <>
      <Header />
      <div className='project__grid'>
        {/* {documents && <ProjectList projects={documents} />} */}
        {documents && documents.map(project => (
          <Link className='card' to={`/project/${project.id}`} key={project.id}>
            <ProjectList project={project} />
          </Link>
        ))}
      </div>
    </>
  )
}
