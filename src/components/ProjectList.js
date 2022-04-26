import { Link } from 'react-router-dom'

// styles
import './ProjectList.css'

export default function ProjectList({ projects }) {
  if (projects.length === 0) {
    return <p>No projects yet! Add a new project <Link to='/create'>here</Link></p>
  }
  return (
    <div>
      {projects.map(project => (
        <Link key={project.id}>{project.name}
          
        </Link>
      ))}
    </div>
  )
}
