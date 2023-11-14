import React from 'react';
import { useState } from 'react';
import {BsMoon} from "react-icons/bs"
import { FaSun } from "react-icons/fa";
import "./index.css"
const index = ({mode,setMode}) => {
    return (
      <header className={!mode ? "header_wrapper" : "dark_mode header_wrapper"}>
        <h2>Where in the world?</h2>
        <p className="mode_wrapper" onClick={() => setMode(!mode)}>
          <span>
            <FaSun className={!mode ? "active" : "hidden"} />
            <BsMoon
              color="#949493"
              className={mode ? "active" : "hidden"}
            />
          </span>
          <span>Dark Mode</span>
        </p>
      </header>
    );
};

export default index;