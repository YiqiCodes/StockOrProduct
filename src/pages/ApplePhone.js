import React, { useState } from "react";
import { Grommet, Select } from "grommet";
import axios from "axios";

// styles
import { TextOutputWrapper } from "../App.styles";
import appleLogo from "../../src/assets/img/AppleLogo.jpg";

const ApplePhone = () => {
  const [applePrice, setApplePrice] = useState(0);
  const [originalApplePrice, setOriginalApplePrice] = useState(0);
  const [phoneCost, setPhoneCost] = useState(0);
  const [yearBought, setYearBought] = useState(0);
  const [shares, setShares] = useState(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [gainLoss, setGainLoss] = useState(0);

  let stockPrice;
  const getStockPrice = (stockRecords) => {
    for (let stockYear of stockRecords) {
      if (stockYear.date.includes(yearBought.toString())) {
        stockPrice = stockYear["Stock Price"];
        break;
      }
    }
    return stockPrice;
  };

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
      setApplePrice(response.data.profile.price);
    })
    .catch((error) => {
      console.log(error);
    });

  axios
    .get("https://financialmodelingprep.com/api/v3/enterprise-value/AAPL")
    .then((response) => {
      setOriginalApplePrice(getStockPrice(response.data.enterpriseValues));
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <>
      <Grommet>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            style={{ maxHeight: "25%", maxWidth: "25%", marginBottom: "1rem" }}
            src={appleLogo}
            alt=""
          ></img>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Select
              placeholder="Year of Purchase"
              options={[
                2019,
                2018,
                2017,
                2016,
                2015,
                2014,
                2013,
                2012,
                2011,
                2010,
                2009,
              ]}
              onChange={(year) => handleYearChange(year)}
            />
            <input
              style={{
                margin: "1rem",
                minWidth: "100%",
                minHeight: "100%",
                border: "solid 2px black",
                borderRadius: "8px",
                textAlign: "center",
                fontSize: "larger",
              }}
              type="number"
              placeholder="cost"
              value={phoneCost}
              onChange={handlePhoneChange}
            />
            <input type="submit" value="Submit" />
          </form>
          <TextOutputWrapper>
            Current Stock Price: {applePrice}
          </TextOutputWrapper>
          <TextOutputWrapper>
            Stock Price in {yearBought}: {originalApplePrice}
          </TextOutputWrapper>
          <TextOutputWrapper>
            Could Have Bought: {shares} Shares
          </TextOutputWrapper>
          <TextOutputWrapper>
            Those Shares Are Now Worth: {currentValue}
          </TextOutputWrapper>
          <TextOutputWrapper>
            If you bought Stock instead of the Product, <br></br>
            your Gain(Loss) would be: {gainLoss}
          </TextOutputWrapper>
        </div>
      </Grommet>
    </>
  );
};

export default ApplePhone;
