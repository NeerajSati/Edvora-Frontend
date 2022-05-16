import React from "react";
import Details from "../details/Details";
import "./nearestrides.css";

function NearestRides({rides,user}) {
  return (
    <div className="nearestRides">
      {rides.map((e) => {
        return <Details ride={e} user={user}/>
      })}
    </div>
  );
}

export default NearestRides;
