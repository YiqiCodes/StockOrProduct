import React from "react";
import { Link } from "react-router-dom";

import {
  ProductSelectorContainer,
  CarLogoContainer,
  WhichPhoneWrapper,
  WhichCarLogo,
  HeaderText,
  OtherText,
} from "../App.styles";
import toyotaLogo from "../../src/assets/img/ToyotaLogo.png";
import hondaLogo from "../../src/assets/img/HondaLogo.png";
import gmLogo from "../../src/assets/img/GMLogo.png";
import fordLogo from "../../src/assets/img/FordLogo.png";
import teslaLogo from "../../src/assets/img/TeslaLogo.png";

const Home = () => {
  return (
    <>
      <WhichPhoneWrapper>
        <ProductSelectorContainer>
          <HeaderText>What brand is your Car?</HeaderText>
          <CarLogoContainer>
            <Link to="/cars/toyota">
              <WhichCarLogo src={toyotaLogo} alt=""></WhichCarLogo>
            </Link>
            <Link to="/cars/honda">
              <WhichCarLogo src={hondaLogo} alt=""></WhichCarLogo>
            </Link>
            <Link to="/cars/gm">
              <WhichCarLogo src={gmLogo} alt=""></WhichCarLogo>
            </Link>
            <Link to="/cars/ford">
              <WhichCarLogo src={fordLogo} alt=""></WhichCarLogo>
            </Link>
            <Link to="/cars/tesla">
              <WhichCarLogo src={teslaLogo} alt=""></WhichCarLogo>
            </Link>
            <Link to="/cars/other">
              <OtherText>Other</OtherText>
            </Link>
          </CarLogoContainer>
        </ProductSelectorContainer>
      </WhichPhoneWrapper>
    </>
  );
};

export default Home;
