import { Link } from 'react-router-dom'
import placeholderImage from '../assets/image/booking.png'

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
          <img className='project-image' src={placeholderImage} alt="placeholder image" />
          <h4>{project.name}</h4>
          <p>These project will need a brand new identity.</p>
          <div className='assigned-to'>
            <div className="list">
              <small>{project.assignedUsersList.length}</small>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
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
