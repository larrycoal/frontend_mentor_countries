import React from 'react';
import { useState } from 'react';
import {RiArrowDropDownLine} from "react-icons/ri"
import "./index.css"
const index = ({ showOpts, setShowOpts,onchange }) => {
  const [filterValue,setFilterValue] = useState("Filter by Region")
  const handleOptionSelect = (opt)=>{
     setShowOpts(!showOpts)
    setFilterValue(opt)
    onchange(opt)
  }
  return (
    <div className="filter_wrapper">
      <div className="select_box" onClick={() => setShowOpts(!showOpts)}>
        <p>{filterValue}</p>
        <RiArrowDropDownLine />
      </div>
      <ul className="options" style={{ display: showOpts && "flex" }}>
        {/* <li onClick={() => handleOptionSelect("Filter by Region")}>
          Filter by Region
        </li> */}
        <li onClick={() => handleOptionSelect("Africa")}>Africa</li>
        <li onClick={() => handleOptionSelect("America")}>America</li>
        <li onClick={() => handleOptionSelect("Asia")}>Asia</li>
        <li onClick={() => handleOptionSelect("Europe")}>Europe</li>
        <li onClick={() => handleOptionSelect("Ocenia")}>Ocenia</li>
      </ul>
    </div>
  );
};

export default index;