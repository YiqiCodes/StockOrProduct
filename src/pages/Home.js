import React from "react";
import { Link } from "react-router-dom";

import {
  PhoneSelectorContainer,
  PhoneLogoContainer,
  WhichPhoneWrapper,
  WhichPhoneLogo,
  HeaderText,
} from "../App.styles";
import appleLogo from "../../src/assets/img/AppleLogo.svg";
import googleLogo from "../../src/assets/img/GoogleLogo.png";
import samsungLogo from "../../src/assets/img/SamsungLogo.png";

const Home = () => {
  return (
    <>
      <WhichPhoneWrapper>
        <PhoneSelectorContainer>
          <HeaderText>
            Should you have bought your phone or stock from your phone company?
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
          </PhoneLogoContainer>
        </PhoneSelectorContainer>
      </WhichPhoneWrapper>
    </>
  );
};

export default Home;
