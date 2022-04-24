import { useEffect, useState } from 'react'
import Select from 'react-select'
import { useCollection } from '../../hooks/useCollection'
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
  const { documents } = useCollection('users')
  const [users, setUsers] = useState([])
  const { mode } = useTheme()

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
    console.log(name, details, dueDate, category.value, assignedUsers)
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

        <button className={`btn ${mode}`}>Add Project</button>
        {formError && <div className='error'>{formError}</div>}
      </form>
    </div>
  )
}
