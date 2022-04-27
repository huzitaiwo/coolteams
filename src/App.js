import { BrowserRouter, Switch as Routes, Route } from 'react-router-dom'

// styles 
import './App.css'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Project from './pages/Project'
import Task from './pages/Task'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App
