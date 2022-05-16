import React from 'react'
import Details from '../details/Details'
import './upcomingrides.css'

function UpcomingRides({rides,user}) {
  return (
    <div className="upcomingRides">
    {rides.map((e) => {
      return <Details ride={e} user={user}/>
    })}
    </div>
  )
}

export default UpcomingRides