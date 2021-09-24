import { useContext } from "react";
import "./styles/Info.css";
import { StoreValue } from "./Travel";

function Info(props) {
  const {
    input,
    countryName,
    officialName,
    flag,
    capital,
    region,
    currencyName,
    language,
  } = useContext(StoreValue);

  return (
    <div
      style={{ display: input ? "block" : "none" }}
      className={props.className}
    >
      <div>
        <img id="flag-logo" src={flag} alt="country-flag" />
      </div>
      <h3>Name: {countryName}</h3>
      <h5>
        <strong>Full-Name:</strong> {officialName}
      </h5>
      <p>
        <strong>Capital:</strong> {capital}
      </p>
      <p>
        <strong>Region:</strong> {region}
      </p>
      <p>
        <strong>Language:</strong> {language}
      </p>
      <p>
        <strong>Currency:</strong> {currencyName}
      </p>
    </div>
  );
}

export default Info;
