import React, { useState, useCallback, useEffect } from "react";
import SearchBar from "../searchbar";
import Filter from "../filter";
import Loader from "../../utils/loading";
import Card from "../card";
import Detail from "../detail";
import "./index.css";

const index = ({ mode }) => {
  const [showOpts, setShowOpts] = useState(false);
  const [countryData, setCountryData] = useState([]);
  const [searchParam, setSearchParam] = useState();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState("all-countries");
  const [detailData, setDetailData] = useState({});
  const handleFetchCountries = useCallback(async () => {
    try {
      setLoading(true);
      const resp = await fetch("https://restcountries.com/v3.1/all").then(
        (data) => data.json()
      );
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
  const handleShowDetailPage = (data) => {
    setPage("detail");
    setDetailData(data);
  };
  const ShowCountries = () => {
    return (
      <div className="card_wrapper">
        {countryData.length ? (
          countryData.map((data, idx) => (
            <Card
              key={idx}
              data={data}
              mode={mode}
              showDetail={handleShowDetailPage}
            />
          ))
        ) : (
          <div className="error">
            <p>No country found</p>
          </div>
        )}
      </div>
    );
  };
  return (
    <div className={!mode ? "home_wrapper" : "dark_mode-home home_wrapper"}>
      <div className="action_block">
        <SearchBar onchange={handleSearch} mode={mode} />
        <Filter
          setShowOpts={handleCloseOpt}
          showOpts={showOpts}
          onchange={handleFilter}
          mode={mode}
        />
      </div>
      {loading && <Loader />}
      {!loading & (page === "all-countries") && <ShowCountries />}
      {!loading & (page === "detail") && <Detail goBack={()=>setPage("all-countries")} data={detailData} />}
    </div>
  );
};

export default index;
