import React, { useState } from "react";
import { Grommet, Select } from "grommet";
import axios from "axios";

// styles
import { TextOutPutContainer, TextOutputIndividual } from "../App.styles";
import samsungLogo from "../../src/assets/img/Samsungv2.png";

const SamsungPhone = () => {
  const [samsungPrice, setSamsungPrice] = useState(0);
  const [originalSamsungPrice, setOriginalSamsungPrice] = useState(0);
  const [phoneCost, setPhoneCost] = useState(0);
  const [yearBought, setYearBought] = useState(0);
  const [shares, setShares] = useState(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [gainLoss, setGainLoss] = useState(0);
  const [isClicked, setIsClicked] = useState(0);

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
    let sharesBought = (phoneCost / originalSamsungPrice).toFixed(2);
    let currentWorth = (sharesBought * samsungPrice).toFixed(2);
    let currentGain = (currentWorth - phoneCost).toFixed(2);

    setCurrentValue(currentWorth);
    setShares(sharesBought);
    setGainLoss(currentGain);
    setIsClicked(1);
    event.preventDefault();
  };

  axios
    .get("https://financialmodelingprep.com/api/v3/company/profile/NDAQ")
    .then((response) => {
      setSamsungPrice(response.data.profile.price);
    })
    .catch((error) => {
      console.log(error);
    });

  axios
    .get("https://financialmodelingprep.com/api/v3/enterprise-value/NDAQ")
    .then((response) => {
      setOriginalSamsungPrice(getStockPrice(response.data.enterpriseValues));
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
            src={samsungLogo}
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
                border: "solid 2px #6170fb",
                borderRadius: "8px",
                background: "#c6c6c7",
                textAlign: "center",
                fontSize: "larger",
              }}
              type="number"
              placeholder="cost"
              value={phoneCost}
              onChange={handlePhoneChange}
            />
            <input
              style={{
                minHeight: "2rem",
                minWidth: "5rem",
                border: "2px solid #6170fb",
                background: "#c6c6c7",
                borderRadius: "5px",
              }}
              type="submit"
              value="Submit"
            />
          </form>
          {isClicked === 1 ? (
            <TextOutPutContainer>
              <TextOutputIndividual>
                Current Stock Price: ${samsungPrice}
              </TextOutputIndividual>
              <TextOutputIndividual>
                Stock Price in {yearBought}: ${originalSamsungPrice}
              </TextOutputIndividual>
              <TextOutputIndividual>
                Could Have Bought: {shares} Shares
              </TextOutputIndividual>
              <TextOutputIndividual>
                Those Shares Are Now Worth: ${currentValue}
              </TextOutputIndividual>
              <br></br>
              <TextOutputIndividual>
                If you bought Stock instead of the Product, <br></br>
                your Gain(Loss) would be: ${gainLoss}
              </TextOutputIndividual>
            </TextOutPutContainer>
          ) : null}
        </div>
      </Grommet>
    </>
  );
};
export default SamsungPhone;
