import React,{useState,useEffect} from 'react'
import Details from '../details/Details'
import './upcomingrides.css'

function UpcomingRides({rides,user}) {
  const [upcomingRides, setUpcomingRides] = useState([]);
  useEffect(() => {
    const today = new Date();
    const filtered = rides.filter((ride) => {
      const date = new Date(ride.date);
      return today < date;
    });
    setUpcomingRides(filtered);
  }, []);
  return (
    <div className="upcomingRides">
    {upcomingRides.length === 0 ? <p className='noContent'>No rides Here!</p> : (upcomingRides.map((e) => {
      return <Details ride={e} user={user}/>
    }))}
    </div>
  )
}

export default UpcomingRides