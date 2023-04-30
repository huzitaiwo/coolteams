// react&react-router packages
import { useParams } from 'react-router-dom'

// hooks
import { useDocument } from '../../hooks/useDocument'
import { useTheme } from '../../hooks/useTheme'

// components
import Avatar from '../../components/Avatar'
import Comment from './Comment'
import CreateTask from './CreateTask'

// styles
import './Project.css'

export default function Project() {
  const { mode } = useTheme()
  const { id } = useParams()
  const { document: project, error, isPending } = useDocument('projects', id)

  if (error) {
    return <div className='error'>{error}</div>
  }

  if (isPending) {
    return <h4>loading...</h4>
  }

  return (
    <div className={`project ${mode}`}>
      <div className={`project__card ${mode}`}>
        {project && (
          <>
            <img className='project__image' src={project.photoURL} alt="placeholder" />
            <div className="card-body">
              <h2 className={`project__title ${mode}`}>{project.name}</h2>
              <p className={`project__details ${mode}`}>{project.details}</p>
              <div className="project__status">
                {project.isCompleted && (
                  <span className="status completed">Completed</span>
                )}
                {project.inProgress && (
                  <span className="status completed">In Progress</span>
                )}
                {!project.isCompleted && !project.inProgress && (
                  <span className="status progress_select">start</span>
                )}
                <span className={`status ${project.priority}`}>{project.priority} Priority</span>
              </div>
              <ul className={`project__category ${mode}`}>
                {project.categories.map(catogory => (
                  <span className={`category ${catogory.value} ${mode}`} key={catogory.value}>{catogory.label}</span>
                ))}
              </ul>
              <ul className="users">
                {project.assignedUsersList.map(user => (
                  <li key={user.photoURL}>
                    <Avatar src={user.photoURL} />
                  </li>
                ))}
              </ul>
              <p className={`msg warning ${mode}`}>Due by: {project.dueDate.toDate().toDateString()}</p>
            </div>
            <CreateTask project={project}/>
          </>
        )}
      </div>
      <div className="project__comments">
        {project && <Comment project={project} />}
      </div>
    </div>
  )
}
