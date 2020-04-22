import React, { useState } from "react";
import axios from "axios";
import MUButton from "@material-ui/core/Button";
import { Link } from "react-router-dom";
// styles
import {
  TextOutPutContainer,
  TextOutputIndividual,
  CostYearInput,
  SubmitButton,
  PhoneLogo,
  PhoneForm,
  PhoneContainerDiv,
} from "../App.styles";

import appleLogo from "../../src/assets/img/AppleLogo.svg";

const ApplePhone = () => {
  const [applePrice, setApplePrice] = useState(0);
  const [originalApplePrice, setOriginalApplePrice] = useState(0);
  const [phoneCostApple, setPhoneCostApple] = useState(0);
  const [yearBoughtApple, setYearBoughtApple] = useState(0);
  const [sharesApple, setSharesApple] = useState(0);
  const [currentValueApple, setCurrentValueApple] = useState(0);
  const [gainLossApple, setGainLossApple] = useState(0);
  const [isClickedApple, setIsClickedApple] = useState(0);
  const [isCostValid, setIsCostValid] = useState(true);
  const [isYearValid, setIsYearValid] = useState(true);
  const [buttonApple, setButtonApple] = useState({
    color: "linear-gradient(45deg, #0d7400 30%, #9dff90 90%)",
  });

  const styledButton = {
    borderRadius: 12,
    border: 0,
    color: "white",
    height: 40,
    width: 163,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px #4a148c 30%",
    minHeight: "20vh",
    marginRight: "1em",
    marginLeft: "1em",
    marginTop: "10px",
    marginBottom: "10px",
  };

  const getStockPrice = (stockRecords) => {
    let stockPrice;
    for (let stockYear of stockRecords) {
      if (stockYear.date.includes(yearBoughtApple.toString())) {
        stockPrice = stockYear["Stock Price"];
        break;
      }
    }
    return stockPrice;
  };

  const handlePhoneChange = (event) => {
    setPhoneCostApple(event.target.value);
  };

  const handleYearChange = (event) => {
    setYearBoughtApple(event.target.value);
  };

  const handleSubmit = (event) => {
    if (
      yearBoughtApple >= 2009 &&
      yearBoughtApple <= 2019 &&
      phoneCostApple > 0
    ) {
      let sharesBought = (phoneCostApple / originalApplePrice).toFixed(2);
      let currentWorth = (sharesBought * applePrice).toFixed(2);
      let currentGain = (currentWorth - phoneCostApple).toFixed(2);

      setCurrentValueApple(currentWorth);
      setSharesApple(sharesBought);
      setGainLossApple(currentGain);
      setIsClickedApple(1);
      setIsCostValid(true);
      setIsYearValid(true);
      event.preventDefault();
    } else if (
      phoneCostApple <= 0 &&
      yearBoughtApple >= 2009 &&
      yearBoughtApple <= 2019
    ) {
      setIsCostValid(false);
      setIsYearValid(true);
      event.preventDefault();
    } else if (
      (yearBoughtApple < 2009 || yearBoughtApple > 2019) &&
      phoneCostApple > 0
    ) {
      setIsCostValid(true);
      setIsYearValid(false);
      event.preventDefault();
    } else {
      setIsCostValid(false);
      setIsYearValid(false);
      event.preventDefault();
    }
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
      <PhoneContainerDiv>
        <PhoneLogo src={appleLogo} alt=""></PhoneLogo>
        <PhoneForm onSubmit={handleSubmit}>
          <CostYearInput
            style={{ borderColor: "#139b01" }}
            placeholder="Enter Year of Purchase"
            onChange={handleYearChange}
          />
          {isYearValid === false ? (
            <div>Please enter a year between 2009-2019!</div>
          ) : null}
          <CostYearInput
            style={{ borderColor: "#139b01" }}
            placeholder="Enter Purchase Cost"
            onChange={handlePhoneChange}
          />
          {isCostValid === false ? (
            <div>Please enter a positive value!</div>
          ) : null}
          <SubmitButton
            style={{
              background: "#139b01",
              color: "white",
            }}
            type="submit"
            value="Submit"
          >
            Submit
          </SubmitButton>
        </PhoneForm>
        {isClickedApple === 1 ? (
          <TextOutPutContainer>
            <TextOutputIndividual>
              Current Stock Price: ${applePrice}
            </TextOutputIndividual>
            <TextOutputIndividual>
              Stock Price in {yearBoughtApple}: ${originalApplePrice}
            </TextOutputIndividual>
            <br></br>
            <TextOutputIndividual>
              You Could Have Bought: {sharesApple} Shares
            </TextOutputIndividual>
            <TextOutputIndividual>
              Those Shares Are Now Worth: ${currentValueApple}
            </TextOutputIndividual>
            <br></br>
            <TextOutputIndividual>
              If you bought Stock instead of the phone, <br></br>
              your Gain(Loss) would be: ${gainLossApple}
            </TextOutputIndividual>
            <br></br>
            <TextOutputIndividual
              style={{ fontWeight: 200, fontSize: "large" }}
            >
              {gainLossApple > 0
                ? `You would have made more money buying stock. Was your
                    phone worth $${gainLossApple}?`
                : "Seems like you made the right choice buying the phone!"}
            </TextOutputIndividual>
          </TextOutPutContainer>
        ) : null}
        <Link to="/">
          <MUButton
            style={{
              ...styledButton,
              background: buttonApple.color,
              minHeight: "40px",
            }}
            onMouseLeave={() =>
              setButtonApple({
                ...buttonApple,
                color: "linear-gradient(45deg, #0d7400 30%, #9dff90 90%)",
              })
            }
            onMouseOver={() =>
              setButtonApple({
                ...buttonApple,
                color: "linear-gradient(45deg, #139b01 30%, #bbffb3 90%)",
              })
            }
            onMouseUp={() =>
              setButtonApple({
                ...buttonApple,
              })
            }
            onMouseDown={() =>
              setButtonApple({
                ...buttonApple,
              })
            }
          >
            Go Back
          </MUButton>
        </Link>
      </PhoneContainerDiv>
    </>
  );
};

export default ApplePhone;
