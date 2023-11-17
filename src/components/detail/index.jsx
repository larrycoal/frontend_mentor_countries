import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import "./index.css";

const index = ({ data, goBack,mode }) => {
  console.log(goBack, data);
  return (
    <div
      className={!mode ? "detail_wrapper" : "dark_mode-detail detail_wrapper"}
    >
      <div className="top">
        <div onClick={goBack}>
          <span>
            <FaArrowLeft />
          </span>
          <span>Back</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <img src={data.flags.svg} alt={data.name.official + "country flag"} />
        </div>
        <div className="right">
          <h2>{data.name.common}</h2>
          <div>
            <p>
              <span>Native Name:</span>
              <span>{data.name.official}</span>
            </p>
            <p>
              <span>Top Level Domain:</span>
              <span>{data.tld?.join(", ")}</span>
            </p>
          </div>
          <div>
            <p>
              <span>Population:</span>
              <span>{data.population.toLocaleString()}</span>
            </p>
            <p>
              <span>Currencies:</span>
              <span>{Object.values(data.currencies)[0].name}</span>
            </p>
          </div>
          <div>
            <p>
              <span>Region:</span>
              <span>{data.region}</span>
            </p>
            <p>
              <span>Languages:</span>
              <span>{Object.values(data.languages).join(", ")}</span>
            </p>
          </div>
          <div>
            <p>
              <span>Sub Region:</span>
              <span>{data.subregion}</span>
            </p>
            <p>
              <span>Capital:</span>
              <span>{data.capital?.join(", ")}</span>
            </p>
          </div>
          <div>
            <p>
              <span>Border Countries:</span>
              <span>{data.borders?.join(", ")}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
