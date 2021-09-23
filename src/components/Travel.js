import React, { useState, createContext } from "react";
import Form from "./Form";
import Info from "./Info";
import MoreInfo from "./MoreInfo";
import DisplayMap from "./DisplayMap";
import CurrencyHolder from "./CurrencyHolder";
import Translation from "./Translation";
import "./styles/Travel.css";

export const StoreValue = createContext();

function Travel() {
  const [inputValue, setInputValue] = useState("");
  const [fetchedData, setFetchedData] = useState("");
  const [recievedFormSubmitted, setRecievedFormSubmitted] = useState();

  const saveValue = (enteredValue) => {
    return setInputValue(enteredValue.toLowerCase());
  };

  const saveData = (data) => {
    return setFetchedData(data);
  };

  const saveFormSubmitted = (value) => {
    return setRecievedFormSubmitted(value);
  };

  return (
    <div>
      <Form onSaveInput={saveValue} onSaveFormSubmitted={saveFormSubmitted} />
      <StoreValue.Provider value={inputValue}>
        <div className="container">
          <div className="currency-holder">
            <CurrencyHolder
              onFetchedData={fetchedData}
              isSubmitted={recievedFormSubmitted}
              storedInput={inputValue}
            />
          </div>
          <div className="translation">
            <Translation
              onFetchedData={fetchedData}
              isSubmitted={recievedFormSubmitted}
              storedInput={inputValue}
            />
          </div>
          <div
            className="info-container"
            style={{ display: inputValue ? "block" : "none" }}
          >
            <Info value={inputValue} onSaveData={saveData} />
            <MoreInfo value={inputValue} />
          </div>
          <div className="display-map">
            <DisplayMap />
          </div>
        </div>
      </StoreValue.Provider>
    </div>
  );
}

export default Travel;
