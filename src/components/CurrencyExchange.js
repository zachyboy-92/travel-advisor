// import { useContext } from "react";
// import { StoreOptions } from "./CurrencyHolder";
import { useEffect, useState } from "react/cjs/react.development";
import "./styles/CurrencyExchange.css";

function CurrencyExchange(props) {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const data = props.onRecievedData;

  useEffect(() => {
    if (!data) {
      return;
    } else {
      data.map((dt) => {
        dt.currencies.map((currency) => setSelectedCurrency(currency.code));
      });
    }
  }, [data]);

  console.log(selectedCurrency);

  useEffect(() => {
    fetch("https://currencyapi-net.p.rapidapi.com/currencies?output=JSON", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "currencyapi-net.p.rapidapi.com",
        "x-rapidapi-key": "a831ce6793msh5db70e8f597c291p1a5d6cjsn9fbe4d2569ab",
      },
    })
      .then((response) => response.json())
      .then((data) => setCurrencyOptions([...Object.keys(data.currencies)]))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <div className="input-container">
        <input
          id="currency-value"
          type="number"
          value={props.amount}
          onChange={props.onChangeAmount}
        />
        <select>
          {currencyOptions.map((option, index) => {
            return (
              <option key={index} id="currency-option" value={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
      <span> = </span>
      <div className="input-container">
        <input
          id="currency-value"
          type="number"
          value={props.amount}
          onChange={props.onChangeAmount}
        />
        <select>
          <option id="currency-option" value={selectedCurrency}>
            {selectedCurrency}
          </option>
        </select>
      </div>
    </div>
  );
}

export default CurrencyExchange;
