import { BrowserRouter, Switch as Routes, Route, Redirect } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import { useTheme } from './hooks/useTheme'

// styles 
import './App.css'

// pages && components
import Dashboard from './pages/dashboard/Dashboard'
import Settings from './pages/settings/Settings'
import Projects from './pages/projects/Projects'
import Project from './pages/project/Project'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
import Task from './pages/task/Task'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  const { user, authIsReady } = useAuthContext()
  const { mode } = useTheme()

  return (
    <div className={`App ${mode}`}>
      {authIsReady && (
        <BrowserRouter>
        <Sidebar />
        <div className="content">
          <Navbar />
          <main>
            <Routes>
              <Route exact path='/'>
                <Dashboard />
              </Route>
              <Route path='/signup'>
                <Signup />
              </Route>
              <Route path='/login'>
                <Login />
              </Route>
              <Route path='/projects'>
                <Projects />
              </Route>
              <Route path='/projects/:id'>
                <Project />
              </Route>
              <Route path='/task'>
                <Task />
              </Route>
              <Route path='/settings'>
                <Settings />
              </Route>
            </Routes>
          </main>
        </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App
