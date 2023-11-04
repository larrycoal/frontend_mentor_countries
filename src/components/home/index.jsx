import React from "react";
import SearchBar from "../searchbar";
import Filter from "../filter";
import "./index.css";
const index = () => {
  return (
    <div className="home_wrapper">
      <div className="action_block">
        <SearchBar />
        <Filter />
      </div>
    </div>
  );
};

export default index;
