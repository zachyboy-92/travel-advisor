import { useContext } from "react";
import { useState, useEffect } from "react/cjs/react.development";
import "./styles/Info.css";
import { StoreValue } from "./Travel";

function Info(props) {
  const [fetchedData, setFetchedData] = useState([]);
  const value = useContext(StoreValue);

  useEffect(() => {
    if (value === "") {
      return;
    } else {
      fetch(`https://restcountries.eu/rest/v2/name/${value}`)
        .then((response) => response.json())
        .then((data) => setFetchedData(data));
    }
  }, [value]);

  // useEffect(() => {
  //   if (value === "") {
  //     return;
  //   } else {
  //     fetch(`https://restcountries.com/v3/name/${value}`)
  //       .then((response) => response.json())
  //       .then((data) => setFetchedData(data));
  //   }
  // }, [value]);

  // props.onSaveData(fetchedData);

  return (
    <div>
      {fetchedData.map((info, index) => {
        return (
          <div key={index} className="country-container">
            <div>
              <img id="flag-logo" src={info.flag} alt="country-flag" />
            </div>
            <h3>Name: {info.name}</h3>
            <h5>
              <strong>Full-Name:</strong> {info.nativeName}
            </h5>
            <p>
              <strong>Capital:</strong> {info.capital}
            </p>
            <p>
              <strong>Population:</strong> {info.population}
            </p>
            <p>
              <strong>Language:</strong> {info.languages[0].name}
            </p>
            <p>
              <strong>Currency:</strong> {info.currencies[0].name}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Info;
