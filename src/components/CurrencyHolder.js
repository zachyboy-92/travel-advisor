import {
  useEffect,
  useState,
  createContext,
} from "react/cjs/react.development";
import CurrencyExchange from "./CurrencyExchange";
import "./styles/CurrencyHolder.css";

// const BASE_URL =
//   "http://api.exchangeratesapi.io/v1/latest?access_key=536c37033b125bfd909cb121990bbe88";

// export const StoreOptions = createContext();

// function CurrencyHolder() {
//   const [currencyOptions, setCurrencyOptions] = useState([]);
//   const [fromCurrency, setFromCurrency] = useState();
//   const [toCurrency, setToCurrency] = useState();
//   const [amount, setAmount] = useState(1);
//   const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
//   const [exchangeRate, setExchangeRate] = useState();

//   let toAmount, fromAmount;
//   if (amountInFromCurrency) {
//     fromAmount = amount;
//     toAmount = amount * exchangeRate;
//   } else {
//     toAmount = amount;
//     fromAmount = amount / exchangeRate;
//   }

//   useEffect(() => {
//     fetch(BASE_URL)
//       .then((response) => response.json())
//       .then((data) => {
//         const firstCurrency = Object.keys(data.rates)[0];
//         setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
//         setFromCurrency(data.base);
//         setToCurrency(firstCurrency);
//         setExchangeRate(data.rates[firstCurrency]);
//       });
//   }, []);

//   useEffect(() => {
//     const NEW_URL = `http://api.exchangeratesapi.io/v1/latest?access_key=536c37033b125bfd909cb121990bbe88&base=${fromCurrency}&symbols=${toCurrency}`;
//     if (toCurrency != null && fromCurrency != null) {
//       fetch(NEW_URL)
//         .then((response) => response.json())
//         .then((data) => console.log(data));
//     }
//   }, [fromCurrency, toCurrency]);

//   function handleFromAmountChange(e) {
//     setAmount(e.target.value);
//     setAmountInFromCurrency(true);
//   }

//   function handletoAmountChange(e) {
//     setAmount(e.target.value);
//     setAmountInFromCurrency(false);
//   }

//   return (
//     <StoreOptions.Provider value={currencyOptions}>
//       <div className="currency-container">
//         <CurrencyExchange
//           selectedCurrency={fromCurrency}
//           onChangeCurrency={(e) => setFromCurrency(e.target.value)}
//           amount={fromAmount}
//           onChangeAmount={handleFromAmountChange}
//         />
//         <span>=</span>
//         <CurrencyExchange
//           selectedCurrency={toCurrency}
//           onChangeCurrency={(e) => setToCurrency(e.target.value)}
//           amount={toAmount}
//           onChangeAmount={handletoAmountChange}
//         />
//       </div>
//     </StoreOptions.Provider>
//   );
// }

function CurrencyHolder(props) {
  let recievedData = props.onFetchedData;

  return (
    <div>
      <CurrencyExchange onRecievedData={recievedData} />
    </div>
  );
}

export default CurrencyHolder;
