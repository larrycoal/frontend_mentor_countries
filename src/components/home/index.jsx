import React, { useState, useCallback, useEffect } from "react";
import SearchBar from "../searchbar";
import Filter from "../filter";
import Card from "../card";
import "./index.css";

const index = () => {
  const [showOpts, setShowOpts] = useState(false);
  const [countryData, setCountryData] = useState([]);
  const [searchParam, setSearchParam] = useState();
  const handleFetchCountries = useCallback(async () => {
    try {
      const resp = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population"
      ).then((data) => data.json());
      if (resp) {
        setCountryData(resp);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
   const handleFilterBySearch = useCallback(async (param) => {
     try {
       const resp = await fetch(
         `https://restcountries.com/v3.1/name/${param}`
       ).then((data) => data.json());
       console.log(resp)
       if (resp) {
         setCountryData(resp);
       }else{
        setCountryData([])
       }
     } catch (error) {
       console.log(error);
     }
   }, []);
  useEffect(() => {
    handleFetchCountries();
  }, []);

  useEffect(() => {
    const debounceFunc = setTimeout(() => {
      if(searchParam){
        handleFilterBySearch(searchParam)
      }else{
        handleFetchCountries()
      }
    }, 1000);
    return () => clearTimeout(debounceFunc);
  }, [searchParam]);

  const handleCloseOpt = () => {
    setShowOpts(!showOpts);
  };
  const handleSearch = (e) => {
    setSearchParam(e.target.value);
  };
  const handleFilter = async (filter) =>{
      try {
        const resp = await fetch(
          `https://restcountries.com/v3.1/region/${filter}`
        ).then((data) => data.json());
        if (resp) {
          setCountryData(resp);
        } else {
          setCountryData([]);
        }
      } catch (error) {
        console.log(error);
      }
  }
  return (
    <div className="home_wrapper">
      <div className="action_block">
        <SearchBar onchange={handleSearch} />
        <Filter setShowOpts={handleCloseOpt} showOpts={showOpts} onchange={handleFilter} />
      </div>
      <div className="card_wrapper">
        {countryData.length ? (
          countryData.map((data) => <Card data={data} />)
        ) : (
          <div className="error">
            <p>No country found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default index;
