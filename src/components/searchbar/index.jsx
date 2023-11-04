import React from "react";
import { BiSearch } from "react-icons/bi";
import "./index.css";
const index = () => {
  return (
    <div className="searchbar_wrapper">
      <BiSearch />
      <input type="text" name="search" placeholder="search for a country..." />
    </div>
  );
};

export default index;
