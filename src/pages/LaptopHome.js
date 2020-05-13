import React from "react";
import { Link } from "react-router-dom";

import {
  ProductSelectorContainer,
  LaptopLogoContainer,
  WhichPhoneWrapper,
  WhichCarLogo,
  HeaderText,
  OtherText,
  ProductMainButton,
} from "../App.styles";
import hpLogo from "../../src/assets/img/HPLogo.png";
import dellLogo from "../../src/assets/img/DellLogo.png";
import microsoftLogo from "../../src/assets/img/MicrosoftLogo.png";
import appleLogo from "../../src/assets/img/AppleLogo.svg";
import googleLogo from "../../src/assets/img/GoogleLogo.png";

const Home = () => {
  return (
    <>
      <WhichPhoneWrapper>
        <ProductSelectorContainer>
          <HeaderText>What brand is your Laptop?</HeaderText>
          <LaptopLogoContainer>
            <Link to="/laptops/hp">
              <WhichCarLogo src={hpLogo} alt=""></WhichCarLogo>
            </Link>
            <Link to="/laptops/microsoft">
              <WhichCarLogo src={microsoftLogo} alt=""></WhichCarLogo>
            </Link>
            <Link to="/laptops/dell">
              <WhichCarLogo src={dellLogo} alt=""></WhichCarLogo>
            </Link>
            <Link to="/laptops/apple">
              <WhichCarLogo src={appleLogo} alt=""></WhichCarLogo>
            </Link>
            <Link to="/laptops/google">
              <WhichCarLogo src={googleLogo} alt=""></WhichCarLogo>
            </Link>
            <Link to="/laptops/other">
              <OtherText>Other</OtherText>
            </Link>
          </LaptopLogoContainer>
          <Link to="/">
            <ProductMainButton style={{ margin: "5px 0px" }}>
              Back to Phones
            </ProductMainButton>
          </Link>
          <Link to="/cars">
            <ProductMainButton>Next Product</ProductMainButton>
          </Link>
        </ProductSelectorContainer>
      </WhichPhoneWrapper>
    </>
  );
};

export default Home;
