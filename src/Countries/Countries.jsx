import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountry, setVisitedCountry] = useState([]);
  const [visitedFlag, setVisitedFlag] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    const newVisitedCountries = [...visitedCountry, country];
    setVisitedCountry(newVisitedCountries);
  };

  const handleVisitedCountryFlag = (flag) => {
    const newVisitedFlag = [...visitedFlag, flag];
    setVisitedFlag(newVisitedFlag);
  };

  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      {/* Visited countries */}
      <div>
        <h3>Visited countries: {visitedCountry.length}</h3>
        <ul>
          {visitedCountry.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>
      <div>
        {
          visitedFlag.map((flag, index) => <img key={index} src={flag} alt="" />)
        }
      </div>
      {/* All countries */}
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedCountryFlag={handleVisitedCountryFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
