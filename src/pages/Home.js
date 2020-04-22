import React, { useState } from "react";
import { Link } from "react-router-dom";
import MUButton from "@material-ui/core/Button";

import {
  PhoneSelectorContainer,
  WhichPhoneWrapper,
  WhichPhoneLogo,
  HeaderText,
} from "../App.styles";
import appleLogo from "../../src/assets/img/AppleLogo.svg";
import googleLogo from "../../src/assets/img/GoogleLogo.png";
import samsungLogo from "../../src/assets/img/SamsungLogo.png";

const Home = () => {
  const [buttonApple, setButtonApple] = useState({
    color: "linear-gradient(45deg, #0d7400 30%, #9dff90 90%)",
  });

  const [buttonGoogle, setButtonGoogle] = useState({
    color: "linear-gradient(45deg, #ffdc18 30%, #f6f1c1 90%)",
  });

  const [buttonSamsung, setButtonSamsung] = useState({
    color: "linear-gradient(45deg, #000e8d 30%, #6170fb 90%)",
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
          <Link to="/apple">
            <MUButton
              style={{
                ...styledButton,
                background: buttonApple.color,
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
              <WhichPhoneLogo src={appleLogo} alt=""></WhichPhoneLogo>
            </MUButton>
          </Link>

          <Link to="/google">
            <MUButton
              style={{
                ...styledButton,
                background: buttonGoogle.color,
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
              <WhichPhoneLogo src={googleLogo} alt=""></WhichPhoneLogo>
            </MUButton>
          </Link>

          <Link to="/samsung">
            <MUButton
              style={{
                ...styledButton,
                background: buttonSamsung.color,
              }}
              onMouseLeave={() =>
                setButtonSamsung({
                  ...buttonSamsung,
                  color: "linear-gradient(45deg, #000e8d 30%, #6170fb 90%)",
                })
              }
              onMouseOver={() =>
                setButtonSamsung({
                  ...buttonSamsung,
                  color: "linear-gradient(45deg, #0116d3 30%, #9ba4f8 90%)",
                })
              }
              onMouseUp={() =>
                setButtonSamsung({
                  ...buttonSamsung,
                })
              }
              onMouseDown={() =>
                setButtonSamsung({
                  ...buttonSamsung,
                })
              }
            >
              <WhichPhoneLogo src={samsungLogo} alt=""></WhichPhoneLogo>
            </MUButton>
          </Link>
        </PhoneSelectorContainer>
      </WhichPhoneWrapper>
    </>
  );
};

export default Home;
