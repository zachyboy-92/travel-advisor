import {
  useEffect,
  useState,
  useRef,
  useContext,
} from "react/cjs/react.development";
import { StoreValue } from "./Travel";
import "./styles/CurrencyExchange.css";

function CurrencyExchange(props) {
  const [currencyOptions, setCurrencyOptions] = useState([]);

  // Option currency
  // // const [optionCurrencyCode, setOptionCurrencyCode] = useState("");
  // const [optionCurrencyName, setOptionCurrencyName] = useState("");

  const [enteredValue, setEnteredValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [convertedValue, setConvertedValue] = useState("");
  const [buttonNumber, setButtonNumber] = useState();
  const inputRef = useRef();

  const { input, currencyCode, currencySymbol, currencyName } =
    useContext(StoreValue);

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
        setCurrencyOptions([...Object.entries(data.symbols)]);
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
      style={{ display: input ? "block" : "none" }}
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
                <option key={index} id="currency-option" value={option[0]}>
                  {`${option[0]}: ${option[1]}`}
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
