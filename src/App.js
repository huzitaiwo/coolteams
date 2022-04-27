import { BrowserRouter, Switch as Routes, Route } from 'react-router-dom'

// styles 
import './App.css'

// pages && components
import Dashboard from './pages/dashboard/Dashboard'
import Projects from './pages/projects/Projects'
import Project from './pages/project/Project'
import Task from './pages/task/Task'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Sidebar />
      <div className="content">
        <Navbar />
        <main>
          <Routes>
            <Route exact path='/'>
              <Dashboard />
            </Route>
            <Route path='/project'>
              <Projects />
            </Route>
            <Route path='/task'>
              <Task />
            </Route>
            <Route path='/projects/:id'>
              <Project />
            </Route>
          </Routes>
        </main>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App
