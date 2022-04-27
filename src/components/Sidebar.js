// styles
import './Sidebar.css'

import React from 'react'

export default function Sidebar() {
  return (
    <div>
      <div className="logo">Logo here</div>
      <nav>
        <ul className="navigation-links">
          <li><a className="active" href="#">Dashboard</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">My Task</a></li>
          <li><a href="#">Calender</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </nav>
    </div>
  )
}
