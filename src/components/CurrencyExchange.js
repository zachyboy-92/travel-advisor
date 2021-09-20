import { useContext } from "react";
import { StoreOptions } from "./CurrencyHolder";
import "./styles/CurrencyExchange.css";

function CurrencyExchange(props) {
  let options = useContext(StoreOptions);
  return (
    <div className="input-container">
      <input
        id="currency-value"
        type="number"
        value={props.amount}
        onChange={props.onChangeAmount}
      />
      <select value={props.selectedCurrency} onChange={props.onChangeCurrency}>
        {options.map((option, index) => {
          return (
            <option key={index} id="currency-option" value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default CurrencyExchange;
