import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import { useTheme } from './hooks/useTheme'

// styles 
import './App.css'

// pages && components
import Dashboard from './pages/dashboard/Dashboard'
import Settings from './pages/settings/Settings'
import Calender from './pages/calender/Calender'
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
              <Switch>
                <Route exact path='/'>
                  {!user && <Redirect to='/login' />}
                  {user && <Dashboard />}
                </Route>
                <Route path='/projects'>
                  {!user && <Redirect to='/login' />}
                  {user && <Projects />}
                </Route>
                <Route path='/projects/:id'>
                  {!user && <Redirect to='/login' />}
                  {user && <Project />}
                </Route>
                <Route path='/task'>
                  {!user && <Redirect to='/login' />}
                  {user && <Task />}
                </Route>
                <Route path='/calender'>
                  {!user && <Redirect to='/login' />}
                  {user && <Calender />}
                </Route>
                <Route path='/settings'>
                  {!user && <Redirect to='/login' />}
                  {user && <Settings />}
                </Route>
                <Route path='/signup'>
                  {user && <Redirect to='/' />}
                  {!user && <Signup />}
                </Route>
                <Route path='/login'>
                  {user && <Redirect to='/' />}
                  {!user && <Login />}
                </Route>
              </Switch>
            </main>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App
