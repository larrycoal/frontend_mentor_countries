import React, { useState, useCallback, useEffect } from "react";
import SearchBar from "../searchbar";
import Filter from "../filter";
import Card from "../card";
import "./index.css";

const index = () => {
  const [showOpts, setShowOpts] = useState(false);
  const [countryData, setCountryData] = useState([]);
  const handleFetchCountries = useCallback(async () => {
    try {
      const resp = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population"
      ).then((data) => data.json());
      if (resp) {
        setCountryData(resp);
      } else {
        console.log(resp);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    handleFetchCountries();
  }, []);
  const data = {
    name: "Afghanistan",
    topLevelDomain: [".af"],
    alpha2Code: "AF",
    alpha3Code: "AFG",
    callingCodes: ["93"],
    capital: "Kabul",
    altSpellings: ["AF", "Afġānistān"],
    subregion: "Southern Asia",
    region: "Asia",
    population: 40218234,
    latlng: [33, 65],
    demonym: "Afghan",
    area: 652230,
    timezones: ["UTC+04:30"],
    borders: ["IRN", "PAK", "TKM", "UZB", "TJK", "CHN"],
    nativeName: "افغانستان",
    numericCode: "004",
    flags: {
      svg: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
      png: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png",
    },
    currencies: [
      {
        code: "AFN",
        name: "Afghan afghani",
        symbol: "؋",
      },
    ],
    languages: [
      {
        iso639_1: "ps",
        iso639_2: "pus",
        name: "Pashto",
        nativeName: "پښتو",
      },
      {
        iso639_1: "uz",
        iso639_2: "uzb",
        name: "Uzbek",
        nativeName: "Oʻzbek",
      },
      {
        iso639_1: "tk",
        iso639_2: "tuk",
        name: "Turkmen",
        nativeName: "Türkmen",
      },
    ],
    translations: {
      br: "Afghanistan",
      pt: "Afeganistão",
      nl: "Afghanistan",
      hr: "Afganistan",
      fa: "افغانستان",
      de: "Afghanistan",
      es: "Afganistán",
      fr: "Afghanistan",
      ja: "アフガニスタン",
      it: "Afghanistan",
      hu: "Afganisztán",
    },
    flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
    regionalBlocs: [
      {
        acronym: "SAARC",
        name: "South Asian Association for Regional Cooperation",
      },
    ],
    cioc: "AFG",
    independent: true,
  };
  const handleCloseOpt = () => {
    console.log(showOpts);
    setShowOpts(!showOpts);
  };
  return (
    <div className="home_wrapper">
      <div className="action_block">
        <SearchBar />
        <Filter setShowOpts={handleCloseOpt} showOpts={showOpts} />
      </div>
      <div className="card_wrapper">
        {countryData.map((data) => (
          <Card data={data} />
        ))}
      </div>
    </div>
  );
};

export default index;
