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
        <Link to={ `/projects/${project.id}`} key={project.id}>
          <h4>{project.name}</h4>
          <p>These project will need a brand new identity.</p>
          <div className='assigned-to'>
            <small>{project.assignedUsersList}</small>
          </div>
          <p className='success'>Due by: {project.dueDate.toDate().toDateString()}</p>
        </Link>
      ))}
    </div>
  )
}
