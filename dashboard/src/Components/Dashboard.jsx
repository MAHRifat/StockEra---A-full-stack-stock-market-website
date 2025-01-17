import React from "react";
import { Route, Routes } from "react-router-dom";

// import Apps from "./Apps";
import Holdings from "../Components/Holdings";
import Orders from "../Components/Orders";
import Positions from "../Components/Positions";
import Summary from "./Summary";
import Funds from "./Funds";
import './CSS/dashboard.css';
import WatchList from "../Components/WatchList";
import Apps from "../Components/Apps";
import GeneralContext, {GeneralContextProvider} from "../Components/GeneralContext";

const Dashboard = () => {
  return (
      <div className="dashboard-container">
        <GeneralContextProvider>
          <WatchList/>
        </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
            <Route path="/orders" element={<Apps/>} />
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