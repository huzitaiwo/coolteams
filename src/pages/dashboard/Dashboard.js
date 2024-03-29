// react packaged
import { Link } from "react-router-dom";

// components & pages
import ProjectsList from "../../components/ProjectsList";
import Header from "../../components/Header";

// hooks
import { useCollection } from "../../hooks/useCollection";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useTheme } from "../../hooks/useTheme";

// styles
import "./Dashboard.css";

export default function Dashboard() {
  const { mode } = useTheme();
  const { user } = useAuthContext();
  const { documents, isPending, error } = useCollection("projects");

  const myProjects = documents
    ? documents.filter((document) => {
        let assignedToMe = false;
        document.assignedUsersList.forEach((u) => {
          if (user.uid === u.id) {
            assignedToMe = true;
          }
        });
        return assignedToMe;
      })
    : null;

  if (error) {
    return <div className="error">{error}</div>;
  }
  if (isPending) {
    return <h4>loading...</h4>;
  }

  return (
    <div>
      {documents && (
        <>
          <Header grid={true} list={false} />
          <div className="project__grid">
            <div className="my__projects">
              {/* <div className="project__grid-header">
                <h3 className={`project__status ${mode}`}>My Projects<span>({myProjects !== 0 && myProjects.length < 10 && 0}{myProjects.length})</span></h3>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
              </div> */}
              {myProjects.length === 0 && (
                <h3 className={`warning__text ${mode}`}>
                  Projects you created will show here
                </h3>
              )}
              {myProjects.map((project) => (
                <Link
                  className={`project__card ${mode}`}
                  to={`/project/${project.id}`}
                  key={project.id}
                >
                  <ProjectsList project={project} />
                </Link>
              ))}
            </div>
            {/* <div className={`my__task ${mode}`}>
              <div className="project__grid-header">
                <h3 className={`project__status ${mode}`}>My Tasks<span>({myTasks !== 0 && myTasks.length < 10 && 0}{myTasks.length})</span></h3>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
              </div>
              {myTasks.length === 0 && <h3 className={`warning__text ${mode}`}>Projects you asigned to will show here</h3>}
              <ul>
                {myTasks.map(task => (
                  <li key={task.id}>
                    <Link className={mode} to='/'>
                      <span>00</span>
                      <span>{task.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
        </>
      )}
    </div>
  );
}
