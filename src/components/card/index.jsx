import React from "react";
import "./index.css";
const index = ({ data }) => {
  return (
    <div className="card_container">
      <img src={data.flags.svg} alt="germany flag" />
      <div className="details">
        <h2>{data.name.official}</h2>
        <p>
          <span>Population:</span> <span>{data.population.toLocaleString()}</span>
        </p>
        <p>
          <span>Region:</span> <span>{data.region}</span>
        </p>
        <p>
          <span>Capital:</span> <span>{data.capital}</span>
        </p>
      </div>
    </div>
  );
};

export default index;
