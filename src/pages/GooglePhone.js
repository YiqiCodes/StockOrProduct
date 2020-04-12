import React, { useState } from "react";
import axios from "axios";

// styles
import { TextOutPutContainer, TextOutputIndividual } from "../App.styles";
import googleLogo from "../../src/assets/img/GoogleLogo.png";

const GooglePhone = () => {
  const [googlePrice, setgooglePrice] = useState(0);
  const [originalGooglePrice, setOriginalGooglePrice] = useState(0);
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

  // net to set error handler here
  const handleYearChange = (event) => {
    // if (event.target.value <= 2019 && event.target.value >= 2009)
    setYearBought(event.target.value);
  };

  const handleSubmit = (event) => {
    let sharesBought = (phoneCost / originalGooglePrice).toFixed(2);
    let currentWorth = (sharesBought * googlePrice).toFixed(2);
    let currentGain = (currentWorth - phoneCost).toFixed(2);

    setCurrentValue(currentWorth);
    setShares(sharesBought);
    setGainLoss(currentGain);
    setIsClicked(1);
    event.preventDefault();
  };

  axios
    .get("https://financialmodelingprep.com/api/v3/company/profile/GOOGL")
    .then((response) => {
      setgooglePrice(response.data.profile.price);
    })
    .catch((error) => {
      console.log(error);
    });

  axios
    .get("https://financialmodelingprep.com/api/v3/enterprise-value/GOOGL")
    .then((response) => {
      setOriginalGooglePrice(getStockPrice(response.data.enterpriseValues));
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          style={{
            maxHeight: "25%",
            maxWidth: "25%",
            marginBottom: "1rem",
            marginTop: "1rem",
          }}
          src={googleLogo}
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
          <input
            style={{
              margin: "1rem",
              minWidth: "100%",
              minHeight: "100%",
              border: "solid 2px #f6f1c1",
              borderRadius: "8px",
              background: "#e9e9e9",
              textAlign: "center",
              fontSize: "larger",
            }}
            placeholder="Enter Year of Purchase"
            onChange={handleYearChange}
          />
          <input
            style={{
              margin: "1rem",
              minWidth: "100%",
              minHeight: "100%",
              border: "solid 2px #f6f1c1",
              borderRadius: "8px",
              background: "#e9e9e9",
              textAlign: "center",
              fontSize: "larger",
            }}
            placeholder="Enter Purchase Cost"
            onChange={handlePhoneChange}
          />
          <button
            style={{
              minHeight: "2rem",
              minWidth: "5rem",
              border: "solid 2px black",
              background: "#f6f1c1",
              borderRadius: "5px",
              margin: "1rem",
              color: "black",
            }}
            type="submit"
            value="Submit"
          >
            Submit
          </button>
        </form>
        {isClicked === 1 ? (
          <TextOutPutContainer>
            <TextOutputIndividual>
              Current Stock Price: ${googlePrice}
            </TextOutputIndividual>
            <TextOutputIndividual>
              Stock Price in {yearBought}: ${originalGooglePrice}
            </TextOutputIndividual>
            <br></br>
            <TextOutputIndividual>
              You Could Have Bought: {shares} Shares
            </TextOutputIndividual>
            <TextOutputIndividual>
              Those Shares Are Now Worth: ${currentValue}
            </TextOutputIndividual>
            <br></br>
            <TextOutputIndividual>
              If you bought Stock instead of the phone, <br></br>
              your Gain(Loss) would be: ${gainLoss}
            </TextOutputIndividual>
            <br></br>
            <TextOutputIndividual
              style={{ fontWeight: 200, fontSize: "large" }}
            >
              {gainLoss > 0
                ? `You would have made more money buying stock. Was your
                  phone worth $${gainLoss}?`
                : "Seems like you made the right choice buying the phone!"}
            </TextOutputIndividual>
          </TextOutPutContainer>
        ) : null}
      </div>
    </>
  );
};

export default GooglePhone;
