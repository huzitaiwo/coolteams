import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Select from 'react-select'
import { useCollection } from '../../hooks/useCollection'
import { useFirestore } from '../../hooks/useFirestore'
import { useAuthContext } from '../../hooks/useAuthContext'
import { timestamp } from '../../firebase/config'
import { useTheme } from '../../hooks/useTheme'

// styles
import './Create.css'

// select catogory
const categories = [
  { value: 'development', label: 'Development'},
  { value: 'design', label: 'Design'},
  { value: 'sales', label: 'Sales'},
  { value: 'marketing', label: 'Marketing'}
]

export default function Create() {
  const { mode } = useTheme()
  const { user } = useAuthContext()
  const { documents } = useCollection('users')
  const { addDocument, response } = useFirestore('projects')
  const [users, setUsers] = useState([])
  const history = useHistory()

  // form field values
  const [name, setName] = useState('')
  const [details, setDetails] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [category, setCategory] = useState('')
  const [assignedUsers, setAssignedUsers] = useState([])
  const [formError, setFormError] = useState(null)

  useEffect(() => {
    if (documents) {
      const options = documents.map(user => {
        return { value: user, label: user.displayName}
      })
      setUsers(options)
    }

    if (response.success) {
      history.push('/')
    }
  }, [documents])

  const handleSubmit = e => {
    e.preventDefault()

    setFormError(null)

    if (!category) {
      setFormError('Please select a project category')
      return
    }
    if (assignedUsers.length < 1) {
      setFormError('Please assign the project to at least one user')
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

    const project = {
      name,
      details,
      category: category.value,
      dueDate: timestamp.fromDate(new Date(dueDate)),
      comments: [],
      createdBy,
      assignedUsersList
    }

    addDocument(project)
  }

  return (
    <div className='create-form'>
      <h2 className={`page-title ${mode}`}>Create a new project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Project name:</span>
          <input
            className={mode}
            required
            type="text"
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </label>

        <label>
          <span>Project details:</span>
          <textarea
            className={mode}
            required
            type="text"
            onChange={e => setDetails(e.target.value)}
            value={details}
          >
          </textarea>
        </label>

        <label>
          <span>Project name:</span>
          <input
            className={mode}
            required
            type="date"
            onChange={e => setDueDate(e.target.value)}
            value={dueDate}
          />
        </label>

        <label>
          <span>Project Category:</span>
          <Select
            onChange={option => setCategory(option)}
            options={categories}
          />
        </label>

        <label>
          <span>Assign to:</span>
          <Select
            onChange={option => setAssignedUsers(option)}
            options={users}
            isMulti
          />
        </label>

        {response.isPending && <button disabled className={`btn ${mode}`}>adding project...</button>}
        {!response.isPending && <button className={`btn ${mode}`}>Add Project</button>}
        {formError && <div className='error'>{formError}</div>}
      </form>
    </div>
  )
}
