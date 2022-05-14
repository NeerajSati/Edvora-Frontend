import React from 'react'
import './navbar.css'
import profilePic from './image/ProfilePic.png'

function Navbar() {
  return (
    <div className='navbar'>
    <div className='navLeft'>
    <div className='logo'>Edvora</div>
    </div>
    <div className='navRight'>
    <div className='profileName'>Dhruv Singh</div>
    <div className='profileImage'><img src={profilePic} alt="profilePic" className="img"></img></div>
    </div>
    </div>
  )
}

export default Navbar