import React, { useState, useEffect } from "react";
import "./optionbar.css";
import filterIcon from "../image/filterIcon.svg";
import { Link, useLocation } from "react-router-dom";

function Optionbar({ rides }) {
  const myurl = useLocation().pathname.split("/")[1];
  const [showFilter, setShowFilter] = useState(false);
  const [states,setStates] = useState(new Set());
  const [city,setCity] = useState(new Set());
  useEffect(() => {
    rides.forEach((e) => {
      setStates(prev => new Set(prev.add(e.state)))
      setCity(prev => new Set(prev.add(e.city)))
    });
  }, []);
  return (
    <div className="optionbar">
      <div className="optionDiv">
        <Link to="/">
          <p className={myurl === "" ? "optionText active" : "optionText"}>
            Nearest Rides (4)
          </p>
        </Link>
        <Link to="/upcoming">
          <p
            className={
              myurl === "upcoming" ? "optionText active" : "optionText"
            }
          >
            Upcoming Rides (3)
          </p>
        </Link>
        <Link to="/past">
          <p className={myurl === "past" ? "optionText active" : "optionText"}>
            Past Rides (3)
          </p>
        </Link>
      </div>
      <div className="filterDiv">
        <div
          className="filterButton"
          onClick={() => {
            setShowFilter(!showFilter);
          }}
        >
          <img className="filterIcon" alt="filterIcon" src={filterIcon}></img>
          <p className="filterText"> Filters </p>
        </div>
      </div>
      <div className={showFilter ? "filterBox" : "none"}>
        <div className="filterStyle">Filters</div>
        <select className="stateFilter">
          <option>State</option>
          {states.forEach((e) => {
            return <option>{e}</option>;
          })}
        </select>

        <select className="cityFilter">
          <option>City</option>
          {city.forEach((e) => {
            return <option>{e}</option>;
          })}
        </select>
      </div>
    </div>
  );
}

export default Optionbar;
