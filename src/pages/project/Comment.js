// react packages
import { useState } from "react"

// firebase functions
import { timestamp } from "../../firebase/config"
import { useAuthContext } from "../../hooks/useAuthContext"
import { useFirestore } from '../../hooks/useFirestore'

// external packages
import formatDistanceToNow from "date-fns/formatDistanceToNow"
import { v4 as uuid } from "uuid"

//components
import Avatar from "../../components/Avatar"

const Comment = ({ project }) => {
  const [newComment, setNewComment ] = useState('')
  const { user } = useAuthContext()
  const { updateDocument, response } = useFirestore('projects')

  console.log(user, project.comments)

  const handleSubmit =  async (e) => {
    e.preventDefault()

    const comment = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: newComment,
      createdAt: timestamp.fromDate(new Date()),
      id: uuid()
    }

    await updateDocument(project.id, {
      comments: [ ...project.comments, comment ]
    })

    if (!response.error) {
      setNewComment('')
    }
  }

  return (
    <div className="project__comments project__card">
      <h3>Project comments</h3>

      <ul>
        {project.comments && project.comments.map(comment => (
          <li key={comment.id}>
            <div className="comment__author">
              <Avatar src={comment.photoURL} />
            <p>{comment.displayName}</p>
            </div>
            <div className="comment__date">
              <p>{formatDistanceToNow(comment.createdAt.toDate(), { addSuffix: true })}</p>
            </div>
            <div className="commnet__content">
              <p>{comment.content}</p>
            </div>
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit} className="add__comment">
        <label>
          <span>Add new comment</span>
          <textarea
            required
            onChange={e => {setNewComment(e.target.value)}}
            value={newComment}          
          ></textarea>
          {!response.isLoading && <button className="btn">Add comment</button>}
          {response.isLoading && <button className="btn">Adding comment...</button>}
          {response.error && <div className="error">{response.error}</div>}
        </label>
      </form>
    </div>
  )
}

export default Comment