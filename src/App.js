import React, { useEffect, useState } from 'react'
import Navbar from "./components/Navbar/Navbar";
import NearestRides from "./components/NearestRides/NearestRides";
import UpcomingRides from "./components/UpcomingRides/UpcomingRides";
import PastRides from "./components/PastRides/PastRides";
import Optionbar from "./components/Optionbar/Optionbar";
import { Routes, Route} from "react-router-dom";
import axios from "axios";

function App() {
  const [rides, setRides] = useState([]);
  const [nearRides, setNearRides] = useState([]);
  const [userData,setUserData] = useState({});
  useEffect(() => {
    const getRides = async () => {
        const res = await axios.get(`https://assessment.api.vweb.app/rides`)
        setRides(res.data);
    };
    getRides();
  }, []);
  
  useEffect(() => {
    const getUser = async () => {
    const res = await axios.get(`https://assessment.api.vweb.app/user`)
        setUserData(res.data)
    };
        getUser();
  }, [])
  useEffect(() => {
    const arr = [];
    if (rides.length === 0 || Object.keys(userData).length === 0) return;
    rides.forEach((ride) => {
      let obj = { ...ride };
      let min = Number.MAX_VALUE;
      if (ride === undefined) return;
      ride.station_path.forEach((path) => {
        min = Math.min(min, Math.abs(path - userData.station_code));
      });
      obj.distance = min;
      arr.push(obj);
      arr.sort((a, b) => a.distance - b.distance);
      setNearRides(arr);
    });
  }, [rides]);
  return (
    <div className="App">
      <Navbar user={userData}/>
      <Optionbar  rides = {rides}/>
      <Routes>
        <Route path="/" element={<NearestRides rides = {nearRides} user = {userData}/>} />
        <Route path="/upcoming" element={<UpcomingRides rides = {rides} user = {userData}/>} />
        <Route path="/past" element={<PastRides  rides = {rides} user = {userData}/>} />
      </Routes>
      
    </div>
  );
}

export default App;
