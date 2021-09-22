// import { useContext } from "react";
// import { StoreOptions } from "./CurrencyHolder";
import { useEffect, useState, useRef } from "react/cjs/react.development";
import "./styles/CurrencyExchange.css";

function CurrencyExchange(props) {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  // fetched currency data
  const [currencyCode, setCurrencyCode] = useState("");
  const [currencyName, setCurrencyName] = useState("");
  const [currencySymbol, setCurrencySymbol] = useState("");

  const [enteredValue, setEnteredValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [convertedValue, setConvertedValue] = useState("");
  const [buttonNumber, setButtonNumber] = useState();
  // Data Recieved From CurrencyHolder
  const data = props.onRecievedData;
  const formSubmitted = props.recievedForm;
  const inputValue = props.recievedInputValue;
  //
  const inputRef = useRef();

  // Fetches FORM currency value
  useEffect(() => {
    if (!data) {
      return;
    } else {
      return data.map((dt) => {
        console.log(dt);
        return dt.currencies.map((currency) => {
          setCurrencyCode(currency.code);
          setCurrencyName(currency.name);
          setCurrencySymbol(currency.symbol);
        });
      });
    }
  }, [data]);

  // Fetches Currency exchange symbols
  useEffect(() => {
    fetch(
      "https://currency-conversion-and-exchange-rates.p.rapidapi.com/symbols",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host":
            "currency-conversion-and-exchange-rates.p.rapidapi.com",
          "x-rapidapi-key":
            "a831ce6793msh5db70e8f597c291p1a5d6cjsn9fbe4d2569ab",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setCurrencyOptions([...Object.keys(data.symbols)]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // Convert Currency
  useEffect(() => {
    if (selectedOption && currencyCode && enteredValue) {
      fetch(
        `https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from=${selectedOption}&to=${currencyCode}&amount=${enteredValue}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host":
              "currency-conversion-and-exchange-rates.p.rapidapi.com",
            "x-rapidapi-key":
              "a831ce6793msh5db70e8f597c291p1a5d6cjsn9fbe4d2569ab",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => setConvertedValue(data.result))
        .catch((err) => {
          console.error(err);
        });
    } else {
      return;
    }
  }, [selectedOption, currencyCode, enteredValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (buttonNumber === 1) {
      setEnteredValue(inputRef.current.value);
      inputRef.current.value = "";
    }

    if (buttonNumber === 2) {
      document.getElementById("exchange-value").innerHTML = "";
    }
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div
      className="currency-container"
      style={{ display: inputValue ? "block" : "none" }}
    >
      <h2>Currency Exchange</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            id="currency-value"
            type="number"
            ref={inputRef}
            onChange={props.onChangeAmount}
          />
          <select onChange={handleOptionChange} value={selectedOption}>
            {currencyOptions.map((option, index) => {
              return (
                <option key={index} id="currency-option" value={option}>
                  {`${option}`}
                </option>
              );
            })}
          </select>
        </div>
        <div className="button-container">
          <button type="submit" onClick={() => setButtonNumber(1)}>
            Sumbit
          </button>
          <button type="submit" onClick={() => setButtonNumber(2)}>
            Clear
          </button>
        </div>
      </form>
      {convertedValue ? (
        <p id="exchange-value">{`${currencySymbol}${convertedValue}`}</p>
      ) : (
        ""
      )}
    </div>
  );
}

export default CurrencyExchange;
