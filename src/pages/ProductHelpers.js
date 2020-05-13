import appleLogo from "../assets/img/AppleLogo.svg";
import googleLogo from "../assets/img/GoogleLogo.png";
import samsungLogo from "../assets/img/SamsungLogo.png";
import otherLogo from "../assets/img/OtherLogo.png";

import hpLogo from "../assets/img/HPLogo.png";
import microsoftLogo from "../assets/img/MicrosoftLogo.png";
import dellLogo from "../assets/img/DellLogo.png";

import toyotaLogo from "../assets/img/ToyotaLogo.png";
import hondaLogo from "../assets/img/HondaLogo.png";
import gmLogo from "../assets/img/GMLogo.png";
import fordLogo from "../assets/img/FordLogo.png";
import teslaLogo from "../assets/img/TeslaLogo.png";

export const phoneDetails = {
  apple: {
    setPriceAPI:
      "https://financialmodelingprep.com/api/v3/company/profile/AAPL",
    setOriginalPriceAPI:
      "https://financialmodelingprep.com/api/v3/enterprise-value/AAPL",
    logo: appleLogo,
    type: "phone",
  },
  google: {
    setPriceAPI:
      "https://financialmodelingprep.com/api/v3/company/profile/GOOGL",
    setOriginalPriceAPI:
      "https://financialmodelingprep.com/api/v3/enterprise-value/GOOGL",
    logo: googleLogo,
    type: "phone",
  },
  samsung: {
    setPriceAPI:
      "https://financialmodelingprep.com/api/v3/company/profile/NDAQ",
    setOriginalPriceAPI:
      "https://financialmodelingprep.com/api/v3/enterprise-value/NDAQ",
    logo: samsungLogo,
    type: "phone",
  },
  other: {
    setPriceAPI:
      "https://financialmodelingprep.com/api/v3/company/profile/NDAQ",
    setOriginalPriceAPI:
      "https://financialmodelingprep.com/api/v3/enterprise-value/NDAQ",
    logo: otherLogo,
    type: "phone",
  },
};

export const laptopDetails = {
  hp: {
    setPriceAPI: "https://financialmodelingprep.com/api/v3/company/profile/hpe",
    setOriginalPriceAPI:
      "https://financialmodelingprep.com/api/v3/enterprise-value/hpe",
    logo: hpLogo,
    type: "laptop",
  },
  dell: {
    setPriceAPI:
      "https://financialmodelingprep.com/api/v3/company/profile/dell",
    setOriginalPriceAPI:
      "https://financialmodelingprep.com/api/v3/enterprise-value/dell",
    logo: dellLogo,
    type: "laptop",
  },
  microsoft: {
    setPriceAPI:
      "https://financialmodelingprep.com/api/v3/company/profile/msft",
    setOriginalPriceAPI:
      "https://financialmodelingprep.com/api/v3/enterprise-value/msft",
    logo: microsoftLogo,
    type: "laptop",
  },
  apple: {
    setPriceAPI:
      "https://financialmodelingprep.com/api/v3/company/profile/aapl",
    setOriginalPriceAPI:
      "https://financialmodelingprep.com/api/v3/enterprise-value/appl",
    logo: appleLogo,
    type: "laptop",
  },
  google: {
    setPriceAPI:
      "https://financialmodelingprep.com/api/v3/company/profile/goog",
    setOriginalPriceAPI:
      "https://financialmodelingprep.com/api/v3/enterprise-value/goog",
    logo: googleLogo,
    type: "laptop",
  },
  other: {
    setPriceAPI:
      "https://financialmodelingprep.com/api/v3/company/profile/NDAQ",
    setOriginalPriceAPI:
      "https://financialmodelingprep.com/api/v3/enterprise-value/NDAQ",
    logo: otherLogo,
    type: "laptop",
  },
};

export const carDetails = {
  toyota: {
    setPriceAPI: "https://financialmodelingprep.com/api/v3/company/profile/tm",
    setOriginalPriceAPI:
      "https://financialmodelingprep.com/api/v3/enterprise-value/tm",
    logo: toyotaLogo,
    type: "car",
  },
  honda: {
    setPriceAPI: "https://financialmodelingprep.com/api/v3/company/profile/hmc",
    setOriginalPriceAPI:
      "https://financialmodelingprep.com/api/v3/enterprise-value/hmc",
    logo: hondaLogo,
    type: "car",
  },
  gm: {
    setPriceAPI: "https://financialmodelingprep.com/api/v3/company/profile/GM",
    setOriginalPriceAPI:
      "https://financialmodelingprep.com/api/v3/enterprise-value/gm",
    logo: gmLogo,
    type: "car",
  },
  ford: {
    setPriceAPI: "https://financialmodelingprep.com/api/v3/company/profile/f",
    setOriginalPriceAPI:
      "https://financialmodelingprep.com/api/v3/enterprise-value/f",
    logo: fordLogo,
    type: "car",
  },
  tesla: {
    setPriceAPI:
      "https://financialmodelingprep.com/api/v3/company/profile/tsla",
    setOriginalPriceAPI:
      "https://financialmodelingprep.com/api/v3/enterprise-value/tsla",
    logo: teslaLogo,
    type: "car",
  },
  other: {
    setPriceAPI:
      "https://financialmodelingprep.com/api/v3/company/profile/NDAQ",
    setOriginalPriceAPI:
      "https://financialmodelingprep.com/api/v3/enterprise-value/NDAQ",
    logo: otherLogo,
    type: "car",
  },
};
