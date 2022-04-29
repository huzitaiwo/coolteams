// styles
import './Avatar.css'

import React from 'react'

export default function Avatar({ src }) {
  return (
    <div className='avtar'>
      <img src={src} alt='user avatar' />
    </div>
  )
}
