// components
import Header from '../../components/Header'

// styles
import './Task.css'

export default function Task() {
  return (
    <div className="project__tasks">
      <Header list={true} grid={false} />
      <h1>TASK</h1>
      <div className='table'>
        <div className='thead'>
          <div>Task Name</div>
          <div>Task Tags</div>
          <div>Task Assign to</div>
          <div>Due date</div>
        </div>
        <h3>To do (05)</h3>
        <div className='td'>
          <div className='task__title'>
            <span>01</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p>Create wireframe</p>
          </div>
          <div>Figma, xd</div>
          <div>Hussen</div>
          <div>6 May, 2023</div>
        </div>
      </div>
      {/* <div className='tb'>
        <div className='thead'>
          <p>Task Name</p>
          <p>Task Tags</p>
          <p>Task Assign to</p>
          <p>Due date</p>
        </div>
      </div> */}
    </div>
  )
}
