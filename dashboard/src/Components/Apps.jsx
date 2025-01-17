import React from "react";
import { GeneralContextProvider } from "./GeneralContext"; // Your GeneralContextProvider
import Orders from "./Orders";

function App() {
  return (
    <GeneralContextProvider>
      <Orders />
    </GeneralContextProvider>
  );
}

export default App;
