import React from 'react'
import './optionbar.css'
import filterIcon from './image/filterIcon.svg'

function Optionbar() {
  return (
    <div className='optionbar'>
        <div className='optionDiv'>
        <p className='optionText active'>Nearest Rides (4)</p>
        <p className='optionText'>Upcoming Rides (3)</p>
        <p className='optionText'>Past Rides (3)</p>
        </div>
        <div className='filterDiv'>
        <img className='filterIcon' alt='filterIcon' src={filterIcon}></img>
        <p className='filterText'> Filters </p>
        </div>
    </div>
  )
}

export default Optionbar