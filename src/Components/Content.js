import React from "react";
import Card from "./Card.js";
import data from "../data.json";
import { MdSearch } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

function Content(props) {
  const [select, setSelect] = React.useState("inactive");
  const [region, setRegion] = React.useState("Filter by region");
  const [search, setSearch] = React.useState("");

  function toggleActive() {
    setSelect(select === "inactive" ? "active" : "inactive");
  }
  function changeRegion(event) {
    setRegion(event.target.innerText);
    setSelect("inactive");
  }

  function searchChange(event) {
    setSearch(event.target.value);
  }

  function filterRegion(country) {
    if (region === "Filter by region" || region === country.region) {
      return country;
    }
  }

  function filterSearch(country) {
    if (
      search === "" ||
      country.name.toLowerCase().includes(search.trim().toLowerCase())
    ) {
      return country;
    }
  }
  const countriesData = data.filter(filterRegion).filter(filterSearch);

  const cards = countriesData.map(function (card) {
    return (
      <Card
        name={card.name}
        population={card.population}
        region={card.region}
        capital={card.capital}
        flag={card.flags.svg}
        alpha2Code={card.alpha2Code}
        changeCode={(code) => props.changeCode(code)}
        cardClicked={props.changePage}
      />
    );
  });

  return (
    <div className="content">
      <div className="nav">
        <div className="searchBox">
          <div className="icon">
            <MdSearch />
          </div>
          <input
            type="text"
            placeholder="Search for a country..."
            onChange={searchChange}
            name="search"
            value={search}
          />
        </div>
        <div className="filter">
          <div
            className={`select ${select === "active" ? "active" : ""}`}
            onClick={toggleActive}
          >
            {region}
            <div className="icon">
              <IoIosArrowDown />
            </div>
          </div>
          <div className={`options ${select === "active" ? "active" : ""}`}>
            <div className="option" onClick={changeRegion}>
              Africa
            </div>
            <div className="option" onClick={changeRegion}>
              Americas
            </div>
            <div className="option" onClick={changeRegion}>
              Asia
            </div>
            <div className="option" onClick={changeRegion}>
              Europe
            </div>
            <div className="option" onClick={changeRegion}>
              Oceania
            </div>
          </div>
        </div>
      </div>
      <div className="countries">
        {countriesData.length === 0 ? <h3>No Data Found...</h3> : cards}
      </div>
    </div>
  );
}

export default Content;
