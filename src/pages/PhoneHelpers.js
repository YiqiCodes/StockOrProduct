import appleLogo from "../assets/img/AppleLogo.svg";
import googleLogo from "../assets/img/GoogleLogo.png";
import samsungLogo from "../assets/img/SamsungLogo.png";

export const phoneDetails = {
  apple: {
    setPriceAPI:
      "https://financialmodelingprep.com/api/v3/company/profile/AAPL",
    setOriginalPriceAPI:
      "https://financialmodelingprep.com/api/v3/enterprise-value/AAPL",
    logo: appleLogo,
  },
  google: {
    setPriceAPI:
      "https://financialmodelingprep.com/api/v3/company/profile/GOOGL",
    setOriginalPriceAPI:
      "https://financialmodelingprep.com/api/v3/enterprise-value/GOOGL",
    logo: googleLogo,
  },
  samsung: {
    setPriceAPI:
      "https://financialmodelingprep.com/api/v3/company/profile/NDAQ",
    setOriginalPriceAPI:
      "https://financialmodelingprep.com/api/v3/enterprise-value/NDAQ",
    logo: samsungLogo,
  },
};
