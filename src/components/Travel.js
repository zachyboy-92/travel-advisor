import React, { useState, createContext } from "react";
import Form from "./Form";
import Info from "./Info";
import MoreInfo from "./MoreInfo";
import DisplayMap from "./DisplayMap";
// import CurrencyHolder from "./CurrencyHolder";
import Translation from "./Translation";
import "./styles/Travel.css";

export const StoreValue = createContext();

function Travel() {
  const [inputValue, setInputValue] = useState("");
  const [fetchedData, setFetchedData] = useState("");

  const saveValue = (enteredValue) => {
    return setInputValue(enteredValue.toLowerCase());
  };

  const saveData = (data) => {
    return setFetchedData(data);
  };

  return (
    <div>
      <Form onSaveInput={saveValue} />
      <StoreValue.Provider value={inputValue}>
        <div className="container">
          {/* <CurrencyHolder onFetchedData={fetchedData} /> */}
          <Translation onFetchedData={fetchedData} />
          <div
            className="info-container"
            style={{ display: inputValue ? "block" : "none" }}
          >
            <Info value={inputValue} onSaveData={saveData} />
            <MoreInfo value={inputValue} />
          </div>
          <DisplayMap />
        </div>
      </StoreValue.Provider>
    </div>
  );
}

export default Travel;
