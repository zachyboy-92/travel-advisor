import { useContext, useState, useEffect } from "react";
import "./styles/Info.css";
import { StoreValue } from "./Travel";

function Info(props) {
  // const [fetchedData, setFetchedData] = useState([]);
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

  // // Stored values from fetched data
  // // Name data
  // const [name, setName] = useState();
  // const [officialName, setOfficialName] = useState();
  // // Flag data
  // const [flag, setFlag] = useState();
  // // Capital data
  // const [capital, setCapital] = useState();
  // // region data
  // const [region, setRegion] = useState();
  // // Currency data
  // const [currencyCode, setCurrencyCode] = useState();
  // const [currencySymbol, setCurrencySymbol] = useState();
  // const [currencyName, setCurrencyName] = useState();
  // const [currency, setCurrency] = useState([]);
  // // Language data
  // const [language, setLanguage] = useState();

  // // Fetch data from the Rest countries Api
  // useEffect(() => {
  //   fetch(`https://restcountries.com/v3/name/${value}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       data.map((dt) => {
  //         setName(dt.name.common);
  //         setOfficialName(dt.name.official);
  //         setFlag(dt.flags[0]);
  //         setCapital(dt.capital);
  //         setRegion(dt.region);
  //         setCurrency([
  //           ...Object.entries(dt.currencies).map((currency) => {
  //             setCurrencyName(currency[1].name);
  //             setCurrencySymbol(currency[1].symbol);
  //             setCurrencyCode(currency[0]);
  //           }),
  //         ]);
  //         setLanguage([
  //           Object.values(dt.languages).filter((language, index) => {
  //             if (index === 0) {
  //               return true;
  //             }
  //             return false;
  //           }),
  //         ]);
  //       });
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, [value]);

  return (
    <div
      style={{ display: input ? "block" : "none" }}
      className="country-container"
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
