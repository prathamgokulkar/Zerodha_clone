import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow.jsx";

// Create context with extended default values
const GeneralContext = React.createContext({
  openBuyWindow: (uid, action) => {},
  closeBuyWindow: () => {},
  uid: "",
  action: "BUY",
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [actionType, setActionType] = useState("BUY");

  const handleOpenBuyWindow = (uid, action = "BUY") => {
    setSelectedStockUID(uid);
    setActionType(action);
    setIsBuyWindowOpen(true);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
    setActionType("BUY");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        uid: selectedStockUID,
        action: actionType,
      }}
    >
      {props.children}
      {isBuyWindowOpen && (
        <BuyActionWindow uid={selectedStockUID} action={actionType} />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
