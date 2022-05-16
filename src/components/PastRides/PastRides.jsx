import React,{useState,useEffect}  from 'react'
import Details from '../details/Details'
import './pastrides.css'

function PastRides({rides,user}) {
  const [pastRides, setPastRides] = useState([]);
  useEffect(() => {
    const today = new Date();
    const filtered = rides.filter((ride) => {
      const date = new Date(ride.date);
      return today > date;
    });
    setPastRides(filtered);
  }, []);
  return (
    <div className="pastRides">
    {pastRides.length === 0 ? <p className='noContent'>No rides Here!</p> : (pastRides.map((e) => {
      return <Details ride={e} user={user}/>
    }))}
    </div>
  )
}

export default PastRides