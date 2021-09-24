import React, { useState, createContext, useEffect } from "react";
import Form from "./Form";
import Info from "./Info";
import MoreInfo from "./MoreInfo";
import DisplayMap from "./DisplayMap";
import CurrencyExchange from "./CurrencyExchange";
import Translation from "./Translation";
import "./styles/Travel.css";

export const StoreValue = createContext();

function Travel(props) {
  // Stored value from FORM
  const [inputValue, setInputValue] = useState("");
  const [recievedFormSubmitted, setRecievedFormSubmitted] = useState();
  const [fetchedData, setFetchedData] = useState("");

  // Stored values from fetched data
  // Name data
  const [name, setName] = useState();
  const [officialName, setOfficialName] = useState();
  // Flag data
  const [flag, setFlag] = useState();
  // Capital data
  const [capital, setCapital] = useState();
  // region data
  const [region, setRegion] = useState();
  // Currency data
  const [currencyCode, setCurrencyCode] = useState();
  const [currencySymbol, setCurrencySymbol] = useState();
  const [currencyName, setCurrencyName] = useState();
  const [currency, setCurrency] = useState([]);
  // Language data
  const [language, setLanguage] = useState();
  const [languageCode, setLanguageCode] = useState();

  // Fetch data from the Rest countries Api
  useEffect(() => {
    if (inputValue) {
      fetch(`https://restcountries.com/v3/name/${inputValue}`)
        .then((response) => response.json())
        .then((data) => {
          data.map((dt) => {
            setName(dt.name.common);
            setOfficialName(dt.name.official);
            setFlag(dt.flags[0]);
            setCapital(dt.capital);
            setRegion(dt.region);
            setLanguageCode(dt.cca2.toLowerCase());
            setCurrency([
              ...Object.entries(dt.currencies).map((currency) => {
                setCurrencyName(currency[1].name);
                setCurrencySymbol(currency[1].symbol);
                setCurrencyCode(currency[0]);
              }),
            ]);
            setLanguage([
              Object.values(dt.languages).filter((language, index) => {
                if (index === 0) {
                  return true;
                }
                return false;
              }),
            ]);
          });
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      return;
    }
  }, [inputValue]);

  const saveData = (data) => {
    return setFetchedData(data);
  };

  // Recieved input value from FORM
  const saveValue = (enteredValue) => {
    return setInputValue(enteredValue.toLowerCase());
  };

  // Recieved whether FORM is submitted or not
  const saveFormSubmitted = (value) => {
    return setRecievedFormSubmitted(value);
  };

  return (
    <div>
      <Form onSaveInput={saveValue} onSaveFormSubmitted={saveFormSubmitted} />
      <StoreValue.Provider
        value={{
          input: inputValue,
          countryName: name,
          officialName: officialName,
          flag: flag,
          capital: capital,
          region: region,
          currencyCode: currencyCode,
          currencySymbol: currencySymbol,
          currencyName: currencyName,
          language: language,
          languageCode: languageCode,
        }}
      >
        <div className="travel-container">
          <CurrencyExchange />
          <Translation />
          <div
            className="info-container"
            style={{ display: inputValue ? "block" : "none" }}
          >
            <Info />
            <MoreInfo />
          </div>
          <DisplayMap />
        </div>
      </StoreValue.Provider>
    </div>
  );
}

export default Travel;
