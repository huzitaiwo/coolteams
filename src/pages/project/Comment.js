// react packages
import { useState } from "react"

// firebase functions
import { timestamp } from "../../firebase/config"
import { useAuthContext } from "../../hooks/useAuthContext"
import { useFirestore } from '../../hooks/useFirestore'
import { useTheme } from "../../hooks/useTheme"

// external packages
import formatDistanceToNow from "date-fns/formatDistanceToNow"
import { v4 as uuid } from "uuid"

//components
import Avatar from "../../components/Avatar"

const Comment = ({ project }) => {
  const { mode } = useTheme()
  const [newComment, setNewComment ] = useState('')
  const { user } = useAuthContext()
  const { updateDocument, response } = useFirestore('projects')
  // const assignedUsers = project.assignedUsersList.map(u => {
  //   return u.uid
  // })

  project.comments.map(comment => {
    console.log(user.uid, comment.userID)
  })

  const handleSubmit =  async (e) => {
    e.preventDefault()

    const comment = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: newComment,
      createdAt: timestamp.fromDate(new Date()),
      id: uuid(),
      userID: user.uid
    }

    await updateDocument(project.id, {
      comments: [ ...project.comments, comment ]
    })

    if (!response.error) {
      setNewComment('')
    }
  }

  return (
    <div className={`project__comments ${mode}`}>
      {project && (
        <>
          <h3>Comments <small>{project.comments.length} comment{project.comments.length > 1 && <span>s</span>}</small></h3>

          <ul>
            {project.comments && project.comments.map(comment => (
              <li key={comment.id} className={user.uid === comment.userID ? 'me' : ''}>
                <div className="comment">
                  <Avatar src={comment.photoURL} />
                  <div>
                    <div className="comment__author">
                      <p>{comment.displayName}</p>
                      <small className="comment__time">{formatDistanceToNow(comment.createdAt.toDate(), { addSuffix: true })}</small>
                    </div>
                    <p className="comment__text">{comment.content}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <form onSubmit={handleSubmit} className="add__comment">
            <label>
              <textarea
                required
                onChange={e => {setNewComment(e.target.value)}}
                value={newComment}          
              ></textarea>
              {!response.isLoading && (
                <button className={`send ${mode}`}>
                  <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_576_43)">
                    <path d="M18.65 31.3778L13.7003 26.428L17.7072 19.1213L10.4004 23.1282L5.45068 18.1785L25.4854 11.3431L18.65 31.3778Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_576_43">
                    <rect width="24" height="28" fill="white" transform="translate(0.0292969 17) rotate(-45)"/>
                    </clipPath>
                    </defs>
                  </svg>

                </button>
              )}
              {response.error && <div className="error">{response.error}</div>}
            </label>
          </form>
        </>
      )}
    </div>
  )
}

export default Comment