import React, { useState, useCallback, useEffect } from "react";
import SearchBar from "../searchbar";
import Filter from "../filter";
import Loader from "../../utils/loading";
import Card from "../card";
import "./index.css";

const index = () => {
  const [showOpts, setShowOpts] = useState(false);
  const [countryData, setCountryData] = useState([]);
  const [searchParam, setSearchParam] = useState();
  const [loading, setLoading] = useState(false);
  const handleFetchCountries = useCallback(async () => {
    try {
      setLoading(true);
      const resp = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population"
      ).then((data) => data.json());
      if (resp) {
        setCountryData(resp);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, []);
  const handleFilterBySearch = useCallback(async (param) => {
    try {
      //setLoading(true);
      const resp = await fetch(
        `https://restcountries.com/v3.1/name/${param}`
      ).then((data) => data.json());
      if (resp) {
        setCountryData(resp);
      } else {
        setCountryData([]);
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
      if (searchParam) {
        handleFilterBySearch(searchParam);
      } else {
        handleFetchCountries();
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
  const handleFilter = async (filter) => {
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
  };

  const ShowCountries = () => {
    return (
      <div className="card_wrapper">
        {countryData.length ? (
          countryData.map((data) => <Card data={data} />)
        ) : (
          <div className="error">
            <p>No country found</p>
          </div>
        )}
      </div>
    );
  };
  return (
    <div className="home_wrapper">
      <div className="action_block">
        <SearchBar onchange={handleSearch} />
        <Filter
          setShowOpts={handleCloseOpt}
          showOpts={showOpts}
          onchange={handleFilter}
        />
      </div>
      {loading && <Loader />}
      {!loading && <ShowCountries />}
    </div>
  );
};

export default index;
