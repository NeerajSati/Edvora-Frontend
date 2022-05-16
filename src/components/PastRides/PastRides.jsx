import React from 'react'
import Details from '../details/Details'
import './pastrides.css'

function PastRides({rides,user}) {
  return (
    <div className="pastRides">
    {rides.map((e) => {
      return <Details ride={e} user={user}/>
    })}
    </div>
  )
}

export default PastRides