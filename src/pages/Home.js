import React, { useState } from "react";
import axios from "axios";

const Home = () => {
  const [applePrice, setApplePrice] = useState(0);
  const [originalApplePrice, setOriginalApplePrice] = useState(0);
  const [phoneCost, setPhoneCost] = useState(0);
  const [yearBought, setYearBought] = useState(0);
  const [shares, setShares] = useState(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [gainLoss, setGainLoss] = useState(0);

  const handlePhoneChange = (event) => {
    setPhoneCost(event.target.value);
  };

  const handleYearChange = (event) => {
    setYearBought(event.target.value);
  };

  const handleSubmit = (event) => {
    let sharesBought = (phoneCost / originalApplePrice).toFixed(2);
    let currentWorth = (sharesBought * applePrice).toFixed(2);
    let currentGain = (currentWorth - phoneCost).toFixed(2);

    setCurrentValue(currentWorth);
    setShares(sharesBought);
    setGainLoss(currentGain);
    event.preventDefault();
  };

  axios
    .get("https://financialmodelingprep.com/api/v3/company/profile/AAPL")
    .then((response) => {
      console.log(response.data.profile.price);
      setApplePrice(response.data.profile.price);
    })
    .catch((error) => {
      console.log(error);
    });

  axios
    .get("https://financialmodelingprep.com/api/v3/enterprise-value/AAPL")
    .then((response) => {
      console.log(response.data.enterpriseValues[1]["Stock Price"]);
      setOriginalApplePrice(response.data.enterpriseValues[1]["Stock Price"]);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            placeholder="year"
            value={yearBought}
            onChange={handleYearChange}
          />
          <input
            type="number"
            placeholder="cost"
            value={phoneCost}
            onChange={handlePhoneChange}
          />
          <input type="submit" value="Submit" />
        </form>
        <div>Current Price: {applePrice}</div>
        <div>Original Price: {originalApplePrice}</div>
        <div>Could have bought: {shares} Shares</div>
        <div>Now worth: {currentValue} </div>
        <div>Net Potential Gain(Loss): {gainLoss} </div>
      </div>
    </>
  );
};

export default Home;
