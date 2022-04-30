import { useState } from 'react'

// styles
import './Create.css'

export default function Create() {
  // form field values
  const [name, setName] = useState('')
  const [details, setDetails] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [category, setCategory] = useState('')
  const [assignedUsers, setAssignedUsers] = useState([])
  const [formError, setFormError] = useState(null)

  return (
    <div className='create-form'>
      <h2 className='page-title'>Create a new project</h2>

      <label>
        <span>Project name:</span>
        <input
          required
          type="text"
          onChange={e => setName(e.target.value)}
          value={name}
        />
      </label>

      <label>
        <span>Project details:</span>
        <textarea
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
          required
          type="date"
          onChange={e => setDueDate(e.target.value)}
          value={dueDate}
        />
      </label>

    </div>
  )
}
