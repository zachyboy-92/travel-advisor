import React, { useState, createContext } from "react";
import Form from "./Form";
import Info from "./Info";
import MoreInfo from "./MoreInfo";
import DisplayMap from "./DisplayMap";
import "./styles/Travel.css";

export const StoreValue = createContext();

function Travel() {
  const [inputValue, setInputValue] = useState("");

  const saveValue = (enteredValue) => {
    return setInputValue(enteredValue.toLowerCase());
  };
  return (
    <div>
      <Form onSaveInput={saveValue} />
      <StoreValue.Provider value={inputValue}>
        <div className="container">
          <div
            className="info-container"
            style={{ display: inputValue ? "block" : "none" }}
          >
            <Info value={inputValue} />
            <MoreInfo value={inputValue} />
          </div>
          <DisplayMap />
        </div>
      </StoreValue.Provider>
    </div>
  );
}

export default Travel;
