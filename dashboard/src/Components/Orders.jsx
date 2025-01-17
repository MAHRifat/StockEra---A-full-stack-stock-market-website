import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom"; // You can still use this for navigation if needed
import axios from "axios";
import GeneralContext from "./GeneralContext";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const generalContext = useContext(GeneralContext);

  useEffect(() => {
    axios.get("http://localhost:3002/allOrders").then((res) => {
      setAllOrders(res.data);
    });
  }, []);

  const handleSellClick = (uid) => {
    console.log("uid passed to sell: ", uid); // Check if correct uid is being passed
    const stock = allOrders.find((order) => order.name === uid);
    console.log("Stock found: ", stock);
    if (!stock) {
      setPopupMessage("This stock is not available in your orders.");
      return;
    }
    // console.log(generalContext.openSellWindow(uid));
    console.log(uid);
    generalContext.openSellWindow(uid); // Make sure the openSellWindow function is working
  };

  return (
    <div className="orders">
      {allOrders.length > 0 && (
        <div>
          <h3 className="title">Orders ({allOrders.length})</h3>
          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Instrument</th>
                  <th>Qty.</th>
                  <th>Avg. cost</th>
                  <th>Mode</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {allOrders.map((stock, index) => {
                  return (
                    <tr key={index}>
                      <td>{stock.name}</td>
                      <td>{stock.qty}</td>
                      <td>{stock.price.toFixed(2)}</td>
                      <td>{stock.mode}</td>
                      <td>
                        {/* Using button instead of Link for action */}
                        <button onClick={() => handleSellClick(stock.name)}>
                          Sell
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {allOrders.length === 0 && (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>

          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      )}
    </div>
  );
};

export default Orders;
