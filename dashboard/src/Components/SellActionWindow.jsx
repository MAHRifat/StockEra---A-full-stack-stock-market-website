import React, { useState } from "react";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

import "./SellActionWindow.css";

const SellActionWindow = ({ uid, closeSellWindow, allOrders }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [popupMessage, setPopupMessage] = useState("");

  console.log(allOrders);
  console.log(uid);

  const handleSellClick = (e) => {
    e.preventDefault();

    if (!allOrders || allOrders.length === 0) {
      setPopupMessage("Order data is not available.");
      return;
    }

    const stock = allOrders.find((order) => {
      return order.name.trim().toLowerCase() === uid.trim().toLowerCase();
    });

    if (!stock) {
      setPopupMessage("This stock is not available in your orders.");
      return;
    }

    if (stockQuantity > stock.qty) {
      setPopupMessage("You cannot sell more than the available quantity.");
      return;
    }

    axios
      .post("http://localhost:3002/sellStock", {
        name: uid,
        qty: stockQuantity,
      })
      .then((response) => {
        setPopupMessage(response.data.message);
        closeSellWindow();
        window.location.reload();

        // Update the orders list by refetching or updating locally
        const updatedOrders = allOrders.filter(
          (order) => !(order.name === uid && stockQuantity === order.qty)
        );
        setAllOrders(updatedOrders);
      })
      .catch((error) => {
        console.error("Error selling stock:", error);
        setPopupMessage("Quantity must be positive");
      });

  };


  const handleCancelClick = () => {
    closeSellWindow();
  };

  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="popup">
        {popupMessage && (
          <div className="popup-message">
            <p>{popupMessage}</p>
          </div>
        )}
      </div>
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
        </div>
      </div>

      <div className="buttons">
        <div>
          <Link className="btn btn-blue" onClick={handleSellClick}>
            Sell
          </Link>
          <Link className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
