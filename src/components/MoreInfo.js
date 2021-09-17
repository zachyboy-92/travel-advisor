import { useEffect, useState, useContext } from "react";
import { StoreValue } from "./Travel";
import "./styles/MoreInfo.css";

function MoreInfo() {
  const [otherData, setOtherData] = useState([]);
  const [click, setClick] = useState(false);
  const value = useContext(StoreValue);

  useEffect(() => {
    if (value === "") {
      return;
    } else {
      fetch(`https://api.api-ninjas.com/v1/country?name=${value}`, {
        method: "GET",
        headers: { "X-Api-Key": "hXZ2xymABNMD27CEvEu9XA==Ez5CzM5nd23ygfpb" },
      })
        .then((response) => response.json())
        .then((data) => setOtherData(data))
        .catch((err) => {
          console.error(err);
        });
    }
  }, [value]);

  const clickHandler = () => {
    setClick(!click);
  };

  return (
    <div>
      {otherData.map((dt, index) => {
        return (
          <div key={index} className="more-info__container">
            <button id="toggle-info" onClick={clickHandler}>
              {click ? "Hide Extra Info" : "Show Extra Info"}
            </button>
            <div style={{ display: click ? "block" : "none" }}>
              <p>
                <strong>Tourists:</strong> {dt.tourists}
              </p>
              <p>
                <strong>Forested Area:</strong> {dt.forested_area}
              </p>
              <p>
                <strong>Gross domestic product (GDP):</strong> {dt.gdp}
              </p>
              <p>
                <strong>GDP Growth:</strong> {dt.gdp_growth}
              </p>
              <p>
                <strong>GDP Per Capita:</strong> {dt.gdp_per_capita}
              </p>
              <p>
                <strong>Imports:</strong> {dt.imports}
              </p>
              <p>
                <strong>Exports:</strong> {dt.exports}
              </p>
              <p>
                <strong>Employment Services:</strong> {dt.employment_services}
              </p>
              <p>
                <strong>Employment Agriculture:</strong>{" "}
                {dt.employment_agriculture}
              </p>
              <p>
                <strong>Unemployment Rate:</strong> {dt.unemployment}
              </p>
              <p>
                <strong>Urban Population:</strong> {dt.urban_population}
              </p>
              <p>
                <strong>Pop Growth:</strong> {dt.pop_growth}
              </p>
              <p>
                <strong>Pop Density:</strong> {dt.pop_density}
              </p>
              <p>
                <strong>Life Expectancy Male:</strong> {dt.life_expectancy_male}
              </p>
              <p>
                <strong>Life Expectancy Female:</strong>{" "}
                {dt.life_expectancy_female}
              </p>
              <p>
                <strong>Infant Mortality:</strong> {dt.infant_mortality}
              </p>
              <p>
                <strong>Refugees: </strong>
                {dt.refugees}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MoreInfo;
