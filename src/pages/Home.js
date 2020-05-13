import React from "react";
import { Link } from "react-router-dom";

import {
  ProductSelectorContainer,
  PhoneLogoContainer,
  WhichPhoneWrapper,
  WhichPhoneLogo,
  HeaderText,
  OtherText,
  ProductMainButton,
} from "../App.styles";
import appleLogo from "../../src/assets/img/AppleLogo.svg";
import googleLogo from "../../src/assets/img/GoogleLogo.png";
import samsungLogo from "../../src/assets/img/SamsungLogo.png";

const Home = () => {
  return (
    <>
      <WhichPhoneWrapper>
        <ProductSelectorContainer>
          <HeaderText>
            Should you have bought your product or stock from that company?
            <br></br>
            <br></br>
            Let's find out!
            <br></br>
            <br></br>
            What brand is your Phone?
          </HeaderText>
          <PhoneLogoContainer>
            <Link to="/apple">
              <WhichPhoneLogo src={appleLogo} alt=""></WhichPhoneLogo>
            </Link>
            <Link to="/google">
              <WhichPhoneLogo src={googleLogo} alt=""></WhichPhoneLogo>
            </Link>
            <Link to="/samsung">
              <WhichPhoneLogo src={samsungLogo} alt=""></WhichPhoneLogo>
            </Link>
            <Link to="/other">
              <OtherText>Other</OtherText>
            </Link>
          </PhoneLogoContainer>
          <Link to="/cars">
            <ProductMainButton>Next Product</ProductMainButton>
          </Link>
        </ProductSelectorContainer>
      </WhichPhoneWrapper>
    </>
  );
};

export default Home;
