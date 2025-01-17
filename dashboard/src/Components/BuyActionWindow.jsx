import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CloseIcon from '@mui/icons-material/Close';

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [allOrders, setAllOrders] = useState([]);
  const [avgPrice, setAvgPrice] = useState(0);
  const [stock, setStock] = useState(null);
  const [popupMessage, setPopupMessage] = useState("");

  // Fetch all orders when component mounts
  useEffect(() => {
    axios.get("http://localhost:3002/allOrders").then((res) => {
      setAllOrders(res.data);
    });
  }, []);

  // Find the stock when orders are fetched
  useEffect(() => {
    if (allOrders.length > 0) {
      const foundStock = allOrders.find((order) => order.name === uid);
      setStock(foundStock); // Store found stock in state
    }
  }, [allOrders, uid]); // Re-run this when allOrders or uid changes

  const handleBuyClick = () => {
    if (stock) {
      // Calculate new quantity and new average price based on existing stock
      const newQty = stock.qty + parseInt(stockQuantity);
      const newAvgPrice = ((stock.qty * stock.price) + (stockPrice * stockQuantity)) / newQty;
  
      // Update stock in the database
      axios.post("http://localhost:3002/updateOrder", {
        name: uid,
        qty: newQty,
        price: newAvgPrice,
      })
        .then((response) => {
          console.log("Stock updated successfully:", response.data);
          setAvgPrice(newAvgPrice);
          setAllOrders(response.data); // Optionally update allOrders in state if needed
        })
        .catch((error) => {
          console.error("Error updating stock:", error);
        });
    } else {
      // If stock does not exist yet, create a new order in the database
      axios.post("http://localhost:3002/newOrder", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
      })
      .then((response) => {
        console.log("New stock order placed:", response.data);
        // Update state to reflect the new stock
        setAllOrders(response.data);
      })
      .catch((error) => {
        console.error("Error placing new stock order:", error);
      });
    }
  
    // Close the buy window after performing the operation
    GeneralContext.closeBuyWindow();
  };
  
  const handleCancelClick = () => {
    GeneralContext.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <Link className="close_icon" onClick={handleCancelClick}>
        <CloseIcon />
      </Link>
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required $1</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
