import React from 'react';
import {BsMoon} from "react-icons/bs"
import "./index.css"
const index = () => {
    return (
      <header className='header_wrapper'>
        <h2>Where in the world?</h2>
        <p>
          <span><BsMoon/></span>
          <span>Dark Mode</span>
        </p>
      </header>
    );
};

export default index;