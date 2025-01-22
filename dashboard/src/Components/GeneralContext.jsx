import React, { useState,useEffect } from "react";
import axios from "axios";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
  openSellWindow: (uid) => {},
  closeSellWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("https://stockera-backend.onrender.com/allOrders").then((res) => {
      setAllOrders(res.data);
    });
  }, []);

  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  const openSellWindow = (uid) => {
    console.log("Open Sell Window for UID: ", uid);
    setSelectedStockUID(uid);
    setIsSellWindowOpen(true);
  };

  const handleCloseSellWindow = () => {
    setSelectedStockUID("");
    setIsSellWindowOpen(false);
  };


  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: openSellWindow,
        closeSellWindow: handleCloseSellWindow,
        allOrders: allOrders,
      }}
    >
      {console.log(selectedStockUID)}
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
      {isSellWindowOpen && (
        <SellActionWindow
          uid={selectedStockUID}
          closeSellWindow={handleCloseSellWindow}
          allOrders={allOrders}
        />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;