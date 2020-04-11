import React, { useState } from "react";
import ApplePhone from "./ApplePhone";
import GooglePhone from "./GooglePhone";
import SamsungPhone from "./SamsungPhone";
import MUButton from "@material-ui/core/Button";

const WhichPhone = () => {
  const [selectedPhone, setSelectedPhone] = useState(0);
  const [button1, setButton1] = useState({
    color: "linear-gradient(45deg, #ec407a 30%, #f48fb1 90%)",
    x: 0,
  });

  const [button2, setButton2] = useState({
    color: "linear-gradient(45deg, #ffdc18 30%, #f6f1c1 90%)",
    x: 0,
  });

  const [button3, setButton3] = useState({
    color: "linear-gradient(45deg, #000e8d 30%, #6170fb 90%)",
    x: 0,
  });

  const style = {
    background: "linear-gradient(45deg, #ec407a 30%, #f48fb1 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 40,
    width: 163,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px #4a148c 30%",
    marginLeft: 0,
  };

  const style2 = {
    background: "linear-gradient(45deg, #ffdc18 30%, #f6f1c1 90%)",
    borderRadius: 3,
    border: 0,
    color: "black",
    height: 40,
    width: 163,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px #4a148c 30%",
    marginLeft: 0,
  };

  const style3 = {
    background: "linear-gradient(45deg, #000e8d 30%, #6170fb 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 40,
    width: 163,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px #4a148c 30%",
    marginLeft: 0,
  };

  return (
    <>
      {selectedPhone === 0 ? (
        <div
          className="phone-selector-container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MUButton
            className="selected-apple-phone-button"
            style={{
              ...style,
              background: button1.color,
              marginRight: "1em",
              marginLeft: "1em",
              marginTop: "4px",
            }}
            onMouseLeave={() =>
              setButton1({
                ...button1,
                color: "linear-gradient(45deg, #ec407a 30%, #f48fb1 90%)",
              })
            }
            onMouseOver={() =>
              setButton1({
                ...button1,
                color: "linear-gradient(45deg, #f06292 30%, #f8bbd0 90%)",
              })
            }
            onMouseUp={() =>
              setButton1({
                ...button1,
                x: 0,
              })
            }
            onMouseDown={() =>
              setButton1({
                ...button1,
                x: 2,
              })
            }
            onClick={() => setSelectedPhone(1)}
          >
            Apple
          </MUButton>

          <MUButton
            className="selected-google-phone-button"
            style={{
              ...style2,
              background: button2.color,
              marginRight: "1em",
              marginLeft: "1em",
              marginTop: "4px",
            }}
            onMouseLeave={() =>
              setButton2({
                ...button2,
                color: "linear-gradient(45deg, #ffdc18 30%, #f6f1c1 90%)",
              })
            }
            onMouseOver={() =>
              setButton2({
                ...button2,
                color: "linear-gradient(45deg, #ffe862 30%, #f6f3d6 90%)",
              })
            }
            onMouseUp={() =>
              setButton2({
                ...button2,
                x: 0,
              })
            }
            onMouseDown={() =>
              setButton2({
                ...button2,
                x: 2,
              })
            }
            onClick={() => setSelectedPhone(2)}
          >
            Google
          </MUButton>
          <MUButton
            className="selected-samsung-phone-button"
            style={{
              ...style3,
              background: button3.color,
              marginRight: "1em",
              marginLeft: "1em",
              marginTop: "4px",
            }}
            onMouseLeave={() =>
              setButton3({
                ...button3,
                color: "linear-gradient(45deg, #000e8d 30%, #6170fb 90%)",
              })
            }
            onMouseOver={() =>
              setButton3({
                ...button3,
                color: "linear-gradient(45deg, #0116d3 30%, #9ba4f8 90%)",
              })
            }
            onMouseUp={() =>
              setButton3({
                ...button3,
                x: 0,
              })
            }
            onMouseDown={() =>
              setButton3({
                ...button3,
                x: 2,
              })
            }
            onClick={() => setSelectedPhone(3)}
          >
            Samsung
          </MUButton>
        </div>
      ) : null}
      {selectedPhone === 1 ? (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ApplePhone></ApplePhone>
            <MUButton
              className="selected-samsung-phone-button"
              style={{
                ...style,
                background: button1.color,
                marginRight: "1em",
                marginLeft: "1em",
                marginTop: "1em",
              }}
              onMouseLeave={() =>
                setButton1({
                  ...button1,
                  color: "linear-gradient(45deg, #ec407a 30%, #f48fb1 90%)",
                })
              }
              onMouseOver={() =>
                setButton1({
                  ...button1,
                  color: "linear-gradient(45deg, #f06292 30%, #f8bbd0 90%)",
                })
              }
              onMouseUp={() =>
                setButton1({
                  ...button1,
                  x: 0,
                })
              }
              onMouseDown={() =>
                setButton1({
                  ...button1,
                  x: 2,
                })
              }
              onClick={() => setSelectedPhone(0)}
            >
              Go Back
            </MUButton>
          </div>
        </>
      ) : null}
      {selectedPhone === 2 ? (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <GooglePhone></GooglePhone>
            <MUButton
              className="selected-samsung-phone-button"
              style={{
                ...style,
                background: button1.color,
                marginRight: "1em",
                marginLeft: "1em",
                marginTop: "1em",
              }}
              onMouseLeave={() =>
                setButton1({
                  ...button1,
                  color: "linear-gradient(45deg, #ec407a 30%, #f48fb1 90%)",
                })
              }
              onMouseOver={() =>
                setButton1({
                  ...button1,
                  color: "linear-gradient(45deg, #f06292 30%, #f8bbd0 90%)",
                })
              }
              onMouseUp={() =>
                setButton1({
                  ...button1,
                  x: 0,
                })
              }
              onMouseDown={() =>
                setButton1({
                  ...button1,
                  x: 2,
                })
              }
              onClick={() => setSelectedPhone(0)}
            >
              Go Back
            </MUButton>
          </div>
        </>
      ) : null}
      {selectedPhone === 3 ? (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SamsungPhone></SamsungPhone>
            <MUButton
              className="selected-samsung-phone-button"
              style={{
                ...style,
                background: button1.color,
                marginRight: "1em",
                marginLeft: "1em",
                marginTop: "1em",
              }}
              onMouseLeave={() =>
                setButton1({
                  ...button1,
                  color: "linear-gradient(45deg, #ec407a 30%, #f48fb1 90%)",
                })
              }
              onMouseOver={() =>
                setButton1({
                  ...button1,
                  color: "linear-gradient(45deg, #f06292 30%, #f8bbd0 90%)",
                })
              }
              onMouseUp={() =>
                setButton1({
                  ...button1,
                  x: 0,
                })
              }
              onMouseDown={() =>
                setButton1({
                  ...button1,
                  x: 2,
                })
              }
              onClick={() => setSelectedPhone(0)}
            >
              Go Back
            </MUButton>
          </div>
        </>
      ) : null}
    </>
  );
};

export default WhichPhone;
