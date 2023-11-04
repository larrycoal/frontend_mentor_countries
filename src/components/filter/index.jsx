import React from 'react';
import "./index.css"
const index = () => {
    return (
      <div className="filter_wrapper">
        <select>
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    );
};

export default index;