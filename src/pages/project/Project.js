// react&react-router packages
import { useParams } from 'react-router-dom'

// hooks
import { useDocument } from '../../hooks/useDocument'
import { useTheme } from '../../hooks/useTheme'

// components
import Avatar from '../../components/Avatar'
import Comment from './Comment'

// styles
import './Project.css'
import Header from '../../components/Header'

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
    <div>
      <Header grid={true} list={false} taskUID={id} />
      <div className={`project ${mode}`}>
        <div>
          <div className={`project__card ${mode}`}>
            {project && (
              <>
                {/* <img className='project__image' src={project.photoURL} alt="placeholder" /> */}
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
              </>
            )}
          </div>
          <div className={`project__tasks-list ${mode}`}>
            {project && (
              <>
                <h3>Tasks <small>{project.tasks.length} task{project.tasks.length > 1 && <span>s</span>}</small></h3>

                <ul>
                  {project.tasks && project.tasks.map(task => (
                    <li className='project__task' key={task.id}>
                      <small>{task.dueDate.toDate().toDateString()}</small>
                      <h4 className='task__name'>{task.name}</h4>
                      <div className='task'>
                        <ul className='tags'>
                          {task.tags.map(tag => (
                            <li className={`tag ${tag.value} ${mode}`} key={tag.value}>{tag.label}</li>
                          ))}
                        </ul>
                        <div>
                          {task.assignedUsersList.map(user => (
                            <span className='task_user' key={user.photoURL}>
                              <Avatar src={user.photoURL} />
                            </span>
                          ))}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
        <div className="project__comments">
          {project && <Comment project={project} />}
        </div>
      </div>
    </div>
  )
}
