import React from 'react'
import './navbar.css'

function Navbar({user}) {
  return (
    <div className='navbar'>
    <div className='navLeft'>
    <div className='logo'>Edvora</div>
    </div>
    <div className='navRight'>
    <div className='profileName'>{user.name}</div>
    <div className='profileImage'><img src={user.url} alt="profilePic" className="img"></img></div>
    </div>
    </div>
  )
}

export default Navbar