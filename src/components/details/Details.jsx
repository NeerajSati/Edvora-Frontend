import React,{useEffect,useState}  from 'react'
import './details.css'

function Details({ride,user}) {
  
  const [dist,setDist] = useState(0);
  useEffect(() => {
    let min = Number.MAX_VALUE;
    ride.station_path.forEach((path) => {
      min = Math.min(min,Math.abs(parseInt(path) - parseInt(user.station_code))
      );
    });
    setDist(min);
  }, []);
  return (
    <div className='details'>
     <div className="mapDiv">
      <img className="mapImg" alt="map" src={ride.map_url}></img>
     </div>
     <div className="rideDiv">
      <div className='rideContent'>
      <p className='detailName'>Ride Id : <span className='detailData'> {ride.id}</span></p>
      <p className='detailName'>Origin Station : <span className='detailData'>{ride.origin_station_code}</span></p>
      <p className='detailName'>station_path : <span className='detailData'>{JSON.stringify(ride.station_path)}</span></p>
      <p className='detailName'>Date : <span className='detailData'>{ride.date}</span></p>
      <p className='detailName'>Distance : <span className='detailData'>{dist}</span></p>
     </div>
     <div className='rideLocation'>
      <div className='ridePlace'>{ride.city}</div>
      <div className='ridePlace'>{ride.state}</div>
     </div>
     </div>
    </div>
  )
}

export default Details