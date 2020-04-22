import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MUButton from "@material-ui/core/Button";
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
import googleLogo from "../../src/assets/img/GoogleLogo.png";

const GooglePhone = () => {
  const [googlePrice, setGooglePrice] = useState(0);
  const [originalPriceGoogle, setOriginalPriceGoogle] = useState(0);
  const [googlePhoneCost, setPhoneCostGoogle] = useState(0);
  const [yearBoughtGoogle, setYearBoughtGoogle] = useState(0);
  const [sharesGoogle, setSharesGoogle] = useState(0);
  const [currentValueGoogle, setCurrentValueGoogle] = useState(0);
  const [gainLossGoogle, setGainLossGoogle] = useState(0);
  const [isClickedGoogle, setIsClickedGoogle] = useState(0);
  const [isCostValid, setIsCostValid] = useState(true);
  const [isYearValid, setIsYearValid] = useState(true);
  const [buttonGoogle, setButtonGoogle] = useState({
    color: "linear-gradient(45deg, #ffdc18 30%, #f6f1c1 90%)",
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
      if (stockYear.date.includes(yearBoughtGoogle.toString())) {
        stockPrice = stockYear["Stock Price"];
        break;
      }
    }
    return stockPrice;
  };

  const handlePhoneChange = (event) => {
    setPhoneCostGoogle(event.target.value);
  };

  const handleYearChange = (event) => {
    setYearBoughtGoogle(event.target.value);
  };

  const handleSubmit = (event) => {
    if (
      yearBoughtGoogle >= 2009 &&
      yearBoughtGoogle <= 2019 &&
      googlePhoneCost > 0
    ) {
      let sharesBought = (googlePhoneCost / originalPriceGoogle).toFixed(2);
      let currentWorth = (sharesBought * googlePrice).toFixed(2);
      let currentGain = (currentWorth - googlePhoneCost).toFixed(2);

      setCurrentValueGoogle(currentWorth);
      setSharesGoogle(sharesBought);
      setGainLossGoogle(currentGain);
      setIsClickedGoogle(1);
      setIsCostValid(true);
      setIsYearValid(true);
      event.preventDefault();
    } else if (
      googlePhoneCost <= 0 &&
      yearBoughtGoogle >= 2009 &&
      yearBoughtGoogle <= 2019
    ) {
      setIsCostValid(false);
      setIsYearValid(true);
      event.preventDefault();
    } else if (
      (yearBoughtGoogle < 2009 || yearBoughtGoogle > 2019) &&
      googlePhoneCost > 0
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
    .get("https://financialmodelingprep.com/api/v3/company/profile/GOOGL")
    .then((response) => {
      setGooglePrice(response.data.profile.price);
    })
    .catch((error) => {
      console.log(error);
    });

  axios
    .get("https://financialmodelingprep.com/api/v3/enterprise-value/GOOGL")
    .then((response) => {
      setOriginalPriceGoogle(getStockPrice(response.data.enterpriseValues));
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <>
      <PhoneContainerDiv>
        <PhoneLogo src={googleLogo} alt=""></PhoneLogo>
        <PhoneForm onSubmit={handleSubmit}>
          <CostYearInput
            placeholder="Enter Year of Purchase"
            onChange={handleYearChange}
          />
          {isYearValid === false ? (
            <div>Please enter a year between 2009-2019!</div>
          ) : null}
          <CostYearInput
            placeholder="Enter Purchase Cost"
            onChange={handlePhoneChange}
          />
          {isCostValid === false ? (
            <div>Please enter a positive value!</div>
          ) : null}
          <SubmitButton type="submit" value="Submit">
            Submit
          </SubmitButton>
        </PhoneForm>

        {isClickedGoogle === 1 ? (
          <TextOutPutContainer>
            <TextOutputIndividual>
              Current Stock Price: ${googlePrice}
            </TextOutputIndividual>
            <TextOutputIndividual>
              Stock Price in {yearBoughtGoogle}: ${originalPriceGoogle}
            </TextOutputIndividual>
            <br></br>
            <TextOutputIndividual>
              You Could Have Bought: {sharesGoogle} Shares
            </TextOutputIndividual>
            <TextOutputIndividual>
              Those Shares Are Now Worth: ${currentValueGoogle}
            </TextOutputIndividual>
            <br></br>
            <TextOutputIndividual>
              If you bought Stock instead of the phone, <br></br>
              your Gain(Loss) would be: ${gainLossGoogle}
            </TextOutputIndividual>
            <br></br>
            <TextOutputIndividual
              style={{ fontWeight: 200, fontSize: "large" }}
            >
              {gainLossGoogle > 0
                ? `You would have made more money buying stock. Was your
                  phone worth $${gainLossGoogle}?`
                : "Seems like you made the right choice buying the phone!"}
            </TextOutputIndividual>
          </TextOutPutContainer>
        ) : null}
        <Link to="/">
          <MUButton
            style={{
              ...styledButton,
              background: buttonGoogle.color,
              minHeight: "40px",
              color: "black",
            }}
            onMouseLeave={() =>
              setButtonGoogle({
                ...buttonGoogle,
                color: "linear-gradient(45deg, #ffdc18 30%, #f6f1c1 90%)",
              })
            }
            onMouseOver={() =>
              setButtonGoogle({
                ...buttonGoogle,
                color: "linear-gradient(45deg, #e6c404 30%, #f8f0aa 90%)",
              })
            }
            onMouseUp={() =>
              setButtonGoogle({
                ...buttonGoogle,
              })
            }
            onMouseDown={() =>
              setButtonGoogle({
                ...buttonGoogle,
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

export default GooglePhone;
