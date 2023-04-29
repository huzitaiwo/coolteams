import { Link } from 'react-router-dom'

// components & styles
import ProjectsList from '../../components/ProjectsList'
import Header from '../../components/Header'
import './Projects.css'

// hooks
import { useCollection } from '../../hooks/useCollection'
import { useTheme } from '../../hooks/useTheme'

export default function Projects() {
  const { mode } = useTheme()
  const { documents: projects, isPending, error } = useCollection('projects')

  const completedProjects = projects ? projects.filter(document => {
    let completed = false
    if (document.isCompleted) {
      completed = true
    }
    return completed
  }) : null

  const projectsInProgress = projects ? projects.filter(document => {
    let progress = false
    if (document.inProgress) {
      progress = true
    }
    return progress
  }) : null

  const workProjects = projects ? projects.filter(document => {
    let work = false
    if (!document.inProgress && !document.isCompleted) {
      work = true
    }
    return work
  }) : null

  if (error) {
    return <div className='error'>{error}</div>
  }
  if (isPending) {
    return <h4>loading...</h4>
  }

  // if (projects.length === 0) {
  //   return <p className={`project-redirect ${mode}`}>No projects yet! Add a new project <Link to='/create'>here</Link></p>
  // }

  return (
    <>
      <Header list={false} grid={true} />
      {projects && (
        <div className="project__grid">
          <div className="working__task">
            <div className="project__grid-header">
              <h3 className={`project__status ${mode}`}>Working<span>( {workProjects.length} )</span></h3>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
            </div>
            {workProjects.map(project => (
              <Link className={`project__card ${mode}`} to={`/project/${project.id}`} key={project.id}>
                <ProjectsList project={project} />
              </Link>
            ))}
          </div>
          <div className="progress__task">
            <div className="project__grid-header">
              <h3 className={`project__status ${mode}`}>In Progress<span>( {projectsInProgress.length} )</span></h3>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
            </div>
            {projectsInProgress.map(project => (
              <Link className={`project__card ${mode}`} to={`/project/${project.id}`} key={project.id}>
                <ProjectsList project={project} />
              </Link>
            ))}
          </div>
          <div className="completed__task">
            <div className="project__grid-header">
              <h3 className={`project__status ${mode}`}>Completed<span>( {completedProjects.length} )</span></h3>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
            </div>
            {completedProjects.map(project => (
              <Link className={`project__card ${mode}`} to={`/project/${project.id}`} key={project.id}>
                <ProjectsList project={project} />
              </Link>
            ))}
          </div>
        </div>

      )}
      
    </>
  )
}

// {/* <div className='project__grid'>
//         {/* {documents && <ProjectList projects={documents} />} */}
//         {documents && documents.map(project => (
//           <Link className='card' to={`/project/${project.id}`} key={project.id}>
//             <ProjectList project={project} />
//           </Link>
//         ))}
//       </div> */}
