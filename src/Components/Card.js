import React from "react";

function Card(props) {
  const { name, population, region, capital, alpha2Code, flag } = props;
  function handleClick() {
    props.changeCode(alpha2Code);
    props.cardClicked();
  }

  return (
    <div className="card" onClick={handleClick}>
      <div className="flag">
        <img src={flag} alt="flag_image" />
      </div>
      <div className="info">
        <h3>{name}</h3>
        <p>
          <span>Population:</span> {population}
        </p>
        <p>
          <span>Region:</span> {region}
        </p>
        <p>
          <span>Capital:</span> {capital}
        </p>
      </div>
    </div>
  );
}

export default Card;
