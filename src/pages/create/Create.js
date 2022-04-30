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
    </div>
  )
}
