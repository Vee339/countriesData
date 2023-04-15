import React from "react";
import data from "../data.json";
import { BsArrowLeft } from "react-icons/bs";

function Country(props) {
  const {
    name,
    nativeName,
    population,
    region,
    subRegion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borderCountries,
    flag,
  } = props;

  const borderingNations = borderCountries?.map(function (country) {
    return <span className="borderCountry">{country}</span>;
  });

  return (
    <div className="country">
      <div className="back" onClick={props.changePage}>
        <BsArrowLeft />
        Back
      </div>
      <div className="data">
        <div className="flag">
          <img src={flag} alt="country_flag" />
        </div>
        <div className="details">
          <h1>{name}</h1>
          <div className="info">
            <div className="left">
              <p>
                <span>Native Name: </span>
                {nativeName}
              </p>
              <p>
                <span>Population: </span>
                {population}
              </p>
              <p>
                <span>Region: </span>
                {region}
              </p>
              <p>
                <span>Sub Region: </span>
                {subRegion}
              </p>
              <p>
                <span>Capital: </span>
                {capital}
              </p>
            </div>
            <div className="right">
              <p>
                <span>Top Level Domain: </span>
                {topLevelDomain}
              </p>
              <p>
                <span>Currencies: </span>
                {currencies}
              </p>
              <p>
                <span>Languages: </span>
                {languages}
              </p>
            </div>
          </div>
          <div className="borders">
            <span>Border Countries: </span>
            <div className="countriesName">{borderingNations}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Country;
