import { Link } from 'react-router-dom'

// styles and components
import './ProjectList.css'
import Avatar from './Avatar'

export default function ProjectList({ projects }) {
  if (projects.length === 0) {
    return <p>No projects yet! Add a new project <Link to='/create'>here</Link></p>
  }
  return (
    <div className='project-list'>
      {projects.map(project => (
        <Link className='card' to={ `/projects/${project.id}`} key={project.id}>
          <h4>{project.name}</h4>
          <p>These project will need a brand new identity.</p>
          <div className='assigned-to'>
            <div className="list">
              <small>{project.assignedUsersList.length}</small>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <ul className="users">
              {project.assignedUsersList.map(user => (
                <li key={user.photoURL}>
                  <Avatar src={user.photoURL} />
                </li>
              ))}
            </ul>
          </div>
          <p className='success'>Due by: {project.dueDate.toDate().toDateString()}</p>
        </Link>
      ))}
    </div>
  )
}
