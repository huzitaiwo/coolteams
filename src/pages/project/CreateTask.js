// react packages
import { useEffect, useState } from 'react'
import Select from 'react-select'

// pages, components, hooks, context
import { useDocument } from '../../hooks/useDocument'
import { useTheme } from '../../hooks/useTheme'

// firebase function
import { useFirestore } from '../../hooks/useFirestore'
import { useAuthContext } from '../../hooks/useAuthContext'
import { timestamp } from '../../firebase/config'

// styles
// import './CreateTask.css'

const tags = [
  { value: 'html', label: 'Html'},
  { value: 'css', label: 'Css'},
  { value: 'javascript', label: 'Js'},
  { value: 'react', label: 'Reactjs'},
  { value: 'vue', label: 'Vuejs'},
  { value: 'node', label: 'Nodejs'},
  { value: 'xd', label: 'Adobe XD'},
  { value: 'photoshop', label: 'Photoshop'},
  { value: 'figma', label: 'Figma'},
  { value: 'firebase', label: 'Firebase'},
  { value: 'php', label: 'Php'},
  { value: 'python', label: 'Python'},
  { value: 'laravel', label: 'Laravel'},
  { value: 'bootstrap', label: 'Bootstrap'},
  { value: 'tailwind', label: 'Tailwind'},
  { value: 'scss', label: 'SCSS'},
]

export default function CreateTask({ project }) {
  const { mode } = useTheme()
  const { user } = useAuthContext()
  const { document } = useDocument('projects', project.id)
  const [users, setUsers] = useState([])
  const [tag, setTag] = useState([])
  const { updateDocument, response } = useFirestore('projects')

  // form field values
  const [name, setName] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [taskTags, setTaskTags] = useState([])
  const [assignedUsers, setAssignedUsers] = useState([])
  const [formError, setFormError] = useState(null)

  useEffect(() => {
    setTag(tags)
    if (document) {
      const options = document.assignedUsersList.map(user => {
        return { value: user, label: user.displayName}
      })
      setUsers(options)
    }

  }, [document])

  const handleSubmit = async e => {
    e.preventDefault()

    setFormError(null)

    if (!tag) {
      setFormError('Please select task tags')
      return
    }
    if (assignedUsers.length < 1) {
      setFormError('Please assign the task to at least one user')
      return
    }

    const createdBy = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      id: user.uid
    }

    const assignedUsersList = assignedUsers.map(u => {
      return {
        displayName: u.value.displayName,
        photoURL: u.value.photoURL,
        id: u.value.id
      }
    })

    const task = {
      name,
      tags: taskTags,
      dueDate: timestamp.fromDate(new Date(dueDate)),
      assignedUsersList,
      createdBy,
      isCompleted: false,
      inProgress: false
    }

    await updateDocument(project.id, {
      tags: [ ...project.tasks, task ]
    })

    if (!response.error) {
      setName('')
      setTaskTags([])
      setAssignedUsers([])
      setDueDate('')
    }
  }


  return (
    <div className="create-form">
      <h2 className={`page-title ${mode}`}>Create a new Task</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Task name:</span>
          <input
            className={mode}
            required
            type="text"
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </label>

        <label>
          <span>Task Tag:</span>
          <Select
            onChange={option => setTaskTags(option)}
            options={tag}
            isMulti
          />
        </label>

        <label>
          <span>Assign to:</span>
          <Select
            className={`select ${mode}`}
            onChange={option => setAssignedUsers(option)}
            options={users}
            isMulti
          />
        </label>

        <label>
          <span>Due Date:</span>
          <input
            className={mode}
            required
            type="date"
            onChange={e => setDueDate(e.target.value)}
            value={dueDate}
          />
        </label>

        {response.isPending && <button disabled className={`btn ${mode}`}>adding task...</button>}
        {!response.isPending && <button className={`btn ${mode}`}>Add Task</button>}
        {formError && <div className='error'>{formError}</div>}
      </form>
    </div>
  )
}