import { useTheme } from '../hooks/useTheme'

// styles and components
import './ProjectsList.css'
import Avatar from './Avatar'

export default function ProjectsList({ project }) {
  const { mode } = useTheme()

  return (
    <div className={`project__list ${mode}`}>
      {/* <img className='project__image' src={project.photoURL} alt="placeholder" /> */}
      <div className="card-body">
        <h2 className={`project__title ${mode}`}>{project.name}</h2>
        <p className={`project__details ${mode}`}>{project.details}</p>
        <ul className={`project__category ${mode}`}>
          {project.categories.map(catogory => (
            <span className={`category ${catogory.value} ${mode}`} key={catogory.value}>{catogory.label}</span>
          ))}
        </ul>
        <div className='assigned-to'>
          <div className={`list ${mode}`}>
            <small>{project.assignedUsersList.length}</small>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
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
        {/* <p className='msg warning'>Due by: {project.dueDate.toDate().toDateString()}</p> */}
      </div>
    </div>
  )
}
