import { useState } from 'react'
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
  const { mode } = useTheme()
  console.log(documents)

  // form field values
  const [name, setName] = useState('')
  const [details, setDetails] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [category, setCategory] = useState('')
  const [assignedUsers, setAssignedUsers] = useState([])
  const [formError, setFormError] = useState(null)

  const handleSubmit = e => {
    e.preventDefault()
    console.log(name, details, dueDate)
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
          {/* category select here */}
          {/* <Select
            options={}
          /> */}
        </label>

        <button className={`btn ${mode}`}>Add</button>
      </form>
    </div>
  )
}
