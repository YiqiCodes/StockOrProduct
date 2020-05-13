import toyotaLogo from "../assets/img/ToyotaLogo.png";
import hondaLogo from "../assets/img/HondaLogo.png";
import gmLogo from "../assets/img/GMLogo.png";
import fordLogo from "../assets/img/FordLogo.png";
import teslaLogo from "../assets/img/TeslaLogo.png";

export const carDetails = {
  toyota: {
    setPriceAPI: "https://financialmodelingprep.com/api/v3/company/profile/tm",
    setOriginalPriceAPI:
      "https://financialmodelingprep.com/api/v3/enterprise-value/tm",
    logo: toyotaLogo,
  },
  honda: {
    setPriceAPI: "https://financialmodelingprep.com/api/v3/company/profile/hmc",
    setOriginalPriceAPI:
      "https://financialmodelingprep.com/api/v3/enterprise-value/hmc",
    logo: hondaLogo,
  },
  gm: {
    setPriceAPI: "https://financialmodelingprep.com/api/v3/company/profile/GM",
    setOriginalPriceAPI:
      "https://financialmodelingprep.com/api/v3/enterprise-value/gm",
    logo: gmLogo,
  },
  ford: {
    setPriceAPI: "https://financialmodelingprep.com/api/v3/company/profile/f",
    setOriginalPriceAPI:
      "https://financialmodelingprep.com/api/v3/enterprise-value/f",
    logo: fordLogo,
  },
  tesla: {
    setPriceAPI:
      "https://financialmodelingprep.com/api/v3/company/profile/tsla",
    setOriginalPriceAPI:
      "https://financialmodelingprep.com/api/v3/enterprise-value/tsla",
    logo: teslaLogo,
  },
  other: {
    setPriceAPI:
      "https://financialmodelingprep.com/api/v3/company/profile/NDAQ",
    setOriginalPriceAPI:
      "https://financialmodelingprep.com/api/v3/enterprise-value/NDAQ",
  },
};
