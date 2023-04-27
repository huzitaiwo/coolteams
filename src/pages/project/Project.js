// react/react-router packages
import { useParams } from 'react-router-dom'

// components & hooks
import { useDocument } from '../../hooks/useDocument'
import ProjectList from '../../components/ProjectList'

export default function Project() {
  const { id } = useParams()
  const { document, error, isPending } = useDocument(id)

  if (error) {
    return <div className='error'>{error}</div>
  }

  if (isPending) {
    return <h4>loading...</h4>
  }

  return (
    <div>
      {document && <ProjectList project={document} />}
    </div>
  )
}
