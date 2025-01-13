import React from "react";
import { Route, Routes } from "react-router-dom";

// import Apps from "./Apps";
import Holdings from "../Components/Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import Funds from "./Funds";
import './CSS/dashboard.css';
import WatchList from "./WatchList";
import Apps from "../Components/Apps";


const Dashboard = () => {
  return (
    <div className="dashboard-container">
        <WatchList/>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps/>} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;