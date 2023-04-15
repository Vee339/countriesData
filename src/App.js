import React from "react";
import Header from "./Components/Header.js";
import Content from "./Components/Content.js";
import Country from "./Components/Country.js";
import "./style.css";
import data from "./data.json";
const countryCodes = new Object();
data.map((nation) => (countryCodes[nation.alpha3Code] = nation.name));

function App() {
  const [page, setPage] = React.useState("content");
  const [alphaCode, setAlphaCode] = React.useState("IN");
  const [theme, setTheme] = React.useState("dark");

  // console.log(theme);
  const country = data.find((obj) => obj["alpha2Code"] === alphaCode);
  function changeCode(code) {
    setAlphaCode(code);
  }

  const countryData = {
    name: country.name,
    nativeName: country.nativeName || "",
    population: country.population || "",
    region: country.region || "",
    subRegion: country.subregion || "",
    capital: country.capital || "",
    topLevelDomain:
      country.topLevelDomain.map((domain, i) =>
        i + 1 !== country.topLevelDomain.length ? domain + ", " : domain
      ) || "",
    currencies:
      country.currencies?.map((currency, i) =>
        i + 1 !== country.currencies.length
          ? currency.name + ", "
          : currency.name
      ) || "",
    languages:
      country.languages?.map((language, i) =>
        i + 1 !== country.languages.length
          ? language.name + ", "
          : language.name
      ) || "",
    borderCountries: country.borders?.map((border) => countryCodes[border]),
    flag: country.flags.svg || "",
  };

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
  } = countryData;

  function changePage() {
    if (page === "content") {
      setPage("country");
    } else {
      setPage("content");
    }
  }

  function changeTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <section className={theme === "dark" ? "dark" : "light"}>
      
        <Header theme={theme} changeTheme={changeTheme} />
        <div className="container">
        {page === "content" ? (
          <Content
            changePage={changePage}
            changeCode={(code) => changeCode(code)}
          />
        ) : (
          <Country
            name={name}
            nativeName={nativeName}
            population={population}
            region={region}
            subRegion={subRegion}
            capital={capital}
            topLevelDomain={topLevelDomain}
            currencies={currencies}
            languages={languages}
            borderCountries={borderCountries}
            flag={flag}
            changePage={changePage}
          />
        )}
        </div>
        
     
    </section>
  );
}

export default App;
