import React from "react";
import { BiSearch } from "react-icons/bi";
import "./index.css";
const index = ({onchange,mode}) => {
  return (
    <div
      className={
        !mode ? "searchbar_wrapper" : "dark_mode-search searchbar_wrapper"
      }
    >
      <BiSearch />
      <input
        type="text"
        name="search"
        placeholder="search for a country..."
        onChange={onchange}
      />
    </div>
  );
};

export default index;
