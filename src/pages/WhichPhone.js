import React, { useState } from "react";
import ApplePhone from "./ApplePhone";
import GooglePhone from "./GooglePhone";
import SamsungPhone from "./SamsungPhone";
import MUButton from "@material-ui/core/Button";
import {
  PhoneSelectorContainer,
  WhichPhoneWrapper,
  ApplePhoneWrapper,
  GooglePhoneWrapper,
  SamsungPhoneWrapper,
  WhichPhoneLogo,
  HeaderText,
} from "../App.styles";
import appleLogo from "../../src/assets/img/AppleLogo.svg";
import googleLogo from "../../src/assets/img/GoogleLogo.png";
import samsungLogo from "../../src/assets/img/SamsungLogo.png";

const WhichPhone = () => {
  const [selectedPhone, setSelectedPhone] = useState(0);
  const [buttonApple, setButtonApple] = useState({
    color: "linear-gradient(45deg, #ec407a 30%, #f48fb1 90%)",
  });

  const [buttonGoogle, setButtonGoogle] = useState({
    color: "linear-gradient(45deg, #ffdc18 30%, #f6f1c1 90%)",
  });

  const [buttonSamsung, setButtonSamsung] = useState({
    color: "linear-gradient(45deg, #000e8d 30%, #6170fb 90%)",
  });

  const styledButton = {
    background: "linear-gradient(45deg, #ec407a 30%, #f48fb1 90%)",
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
      {selectedPhone === 0 ? (
        <>
          <WhichPhoneWrapper>
            <PhoneSelectorContainer>
              <HeaderText>
                Should you have bought your phone or stock from your phone
                company?
                <br></br>
                Let's find out!
                <br></br>
                <br></br>
                What brand is your Phone?
              </HeaderText>
              <MUButton
                style={{
                  ...styledButton,
                  background: buttonApple.color,
                }}
                onMouseLeave={() =>
                  setButtonApple({
                    ...buttonApple,
                    color: "linear-gradient(45deg, #ec407a 30%, #f48fb1 90%)",
                  })
                }
                onMouseOver={() =>
                  setButtonApple({
                    ...buttonApple,
                    color: "linear-gradient(45deg, #f06292 30%, #f8bbd0 90%)",
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
                onClick={() => setSelectedPhone(1)}
              >
                <WhichPhoneLogo src={appleLogo} alt=""></WhichPhoneLogo>
              </MUButton>

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
                    color: "linear-gradient(45deg, #ffe862 30%, #f6f3d6 90%)",
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
                onClick={() => setSelectedPhone(2)}
              >
                <WhichPhoneLogo src={googleLogo} alt=""></WhichPhoneLogo>
              </MUButton>

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
                onClick={() => setSelectedPhone(3)}
              >
                <WhichPhoneLogo src={samsungLogo} alt=""></WhichPhoneLogo>
              </MUButton>
            </PhoneSelectorContainer>
          </WhichPhoneWrapper>
        </>
      ) : null}
      {selectedPhone === 1 ? (
        <>
          <ApplePhoneWrapper>
            <ApplePhone></ApplePhone>
            <MUButton
              style={{
                ...styledButton,
                background: buttonApple.color,
                minHeight: "40px",
              }}
              onMouseLeave={() =>
                setButtonApple({
                  ...buttonApple,
                  color: "linear-gradient(45deg, #ec407a 30%, #f48fb1 90%)",
                })
              }
              onMouseOver={() =>
                setButtonApple({
                  ...buttonApple,
                  color: "linear-gradient(45deg, #f06292 30%, #f8bbd0 90%)",
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
              onClick={() => setSelectedPhone(0)}
            >
              Go Back
            </MUButton>
          </ApplePhoneWrapper>
        </>
      ) : null}
      {selectedPhone === 2 ? (
        <>
          <GooglePhoneWrapper>
            <GooglePhone></GooglePhone>
            <MUButton
              style={{
                ...styledButton,
                background: buttonGoogle.color,
                minHeight: "40px",
                color: "black",
              }}
              onMouseLeave={() =>
                setButtonApple({
                  ...buttonApple,
                  color: "linear-gradient(45deg, #ec407a 30%, #f48fb1 90%)",
                })
              }
              onMouseOver={() =>
                setButtonApple({
                  ...buttonApple,
                  color: "linear-gradient(45deg, #f06292 30%, #f8bbd0 90%)",
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
              onClick={() => setSelectedPhone(0)}
            >
              Go Back
            </MUButton>
          </GooglePhoneWrapper>
        </>
      ) : null}
      {selectedPhone === 3 ? (
        <>
          <SamsungPhoneWrapper>
            <SamsungPhone></SamsungPhone>
            <MUButton
              style={{
                ...styledButton,
                background: buttonSamsung.color,
                minHeight: "40px",
              }}
              onMouseLeave={() =>
                setButtonApple({
                  ...buttonApple,
                  color: "linear-gradient(45deg, #ec407a 30%, #f48fb1 90%)",
                })
              }
              onMouseOver={() =>
                setButtonApple({
                  ...buttonApple,
                  color: "linear-gradient(45deg, #f06292 30%, #f8bbd0 90%)",
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
              onClick={() => setSelectedPhone(0)}
            >
              Go Back
            </MUButton>
          </SamsungPhoneWrapper>
        </>
      ) : null}
    </>
  );
};

export default WhichPhone;
