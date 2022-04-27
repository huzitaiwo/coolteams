import { NavLink } from 'react-router-dom'

// styles
import './Sidebar.css'

import React from 'react'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="logo">Logo here</div>
      <nav>
        <ul className="navigation-links">
          <li><NavLink className="active" to="/">Dashboard</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/task">My Task</NavLink></li>
          <li><NavLink to="/calender">Calender</NavLink></li>
          <li><NavLink to="/settings">Settings</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}
