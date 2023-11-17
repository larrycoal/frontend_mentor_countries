import React from "react";
import "./index.css";
const index = ({ data, mode, showDetail }) => {
  return (
    <div
      className={!mode ? "card_container" : "dark_mode-card card_container"}
      onClick={() => showDetail(data)}
    >
      <img src={data.flags.svg} alt={data.name.official + "country flag"} />
      <div className="details">
        <h2>{data.name.common}</h2>
        <p>
          <span>Population:</span>
          <span>{data.population.toLocaleString()}</span>
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
