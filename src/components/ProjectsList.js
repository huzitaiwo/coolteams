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
            <small>{project.tasks.length}</small>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 taskIcon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
            </svg>

            <small>{project.comments.length}</small>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
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
      </div>
    </div>
  )
}
