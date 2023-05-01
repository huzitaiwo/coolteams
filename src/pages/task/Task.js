// react packages
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// components
import Header from '../../components/Header'
import Avatar from '../../components/Avatar'

// hooks
import { useTheme } from '../../hooks/useTheme'
import { useCollection } from '../../hooks/useCollection'

// styles
import './Task.css'

export default function Task() {
  const { mode } = useTheme()
  const { documents } = useCollection('projects')
  const [i, setI] = useState(0)

  useEffect(() => {
    if(documents) {
     documents.map(doc => (
      setI(documents.length + doc.tasks.length)
     ))
    }
  },[documents])

  return (
    <div className={`project__tasks ${mode}`}>
      <Header list={true} grid={false} />
      {documents && (
        <div className="table">
          <div className='thead'>
            <div>Task Name</div>
            <div>Task Tags</div>
            <div>Task Assign to</div>
            <div>Due date</div>
          </div>
          <div className='h3'>
            <h3>To do ({i})</h3>
          </div>
          <>
            {documents.map(doc => (
              doc.tasks.map(task => (
                <Link to={`/project/${doc.id}`} key={task.id} className='td'>
                  <div className={`task__title task__title-${doc.priority}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${doc.isCompleted}`}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className='task__name'>{task.name}</p>
                  </div>
                  <div>
                    {task.tags && task.tags.map (tag => (
                      <span key={tag.value} className={`task_tag ${mode} ${tag.value}`}>{tag.label}</span>
                    ))}
                  </div>
                  <div className="assigned__list">
                    {task.assignedUsersList && task.assignedUsersList.map(user => (
                      <div key={user.photoURL} className='task__user'>
                        <Avatar src={user.photoURL} />
                        <span>{user.displayName}</span>
                      </div>
                    ))}
                  </div>
                  <p className='task__duedate'>{task.dueDate.toDate().toDateString().slice(3)}</p>
                </Link>
              ))
            ))}
        </>
        </div>
      )}
    </div>
  )
}
