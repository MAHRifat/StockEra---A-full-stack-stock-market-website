import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom"; // You can still use this for navigation if needed
import axios from "axios";
import GeneralContext from "./GeneralContext";
import { Doughnut_Chart } from "./Doughnut_Chart";

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


const data = {
  labels: allOrders.map((subArray) => subArray["name"]),
  datasets: [
    {
      label: 'Total Price',
      data: allOrders.map((stock)=> (stock.price* stock.qty)),
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};



  return (
    <>
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
      <br /><br /><br /><br /><br />
      <Doughnut_Chart data={data}/>
    </div>
    </>
  );
};

export default Orders;
