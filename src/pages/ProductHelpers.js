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
      "https://financialmodelingprep.com/api/v3/profile/AAPL?apikey=242a9bb7640f1a45c2313cc3da52f14a",
    setOriginalPriceAPI:
      "https://financialmodelingprep.com/api/v3/enterprise-values/AAPL?apikey=242a9bb7640f1a45c2313cc3da52f14a",
    logo: appleLogo,
    type: "phone",
  },
  google: {
    setPriceAPI:
      "https://financialmodelingprep.com/api/v3/profile/GOOG?apikey=242a9bb7640f1a45c2313cc3da52f14a",
    setOriginalPriceAPI:
      "https://financialmodelingprep.com/api/v3/enterprise-values/GOOG?apikey=242a9bb7640f1a45c2313cc3da52f14a",
    logo: googleLogo,
    type: "phone",
  },
  samsung: {
    setPriceAPI:
      "https://financialmodelingprep.com/api/v3/profile/GOOG?apikey=242a9bb7640f1a45c2313cc3da52f14a",
    setOriginalPriceAPI:
      "https://financialmodelingprep.com/api/v3/enterprise-values/NDAQ?apikey=242a9bb7640f1a45c2313cc3da52f14a",
    logo: samsungLogo,
    type: "phone",
  },
  other: {
    setPriceAPI:
      "https://financialmodelingprep.com/api/v3/profile/GOOG?apikey=242a9bb7640f1a45c2313cc3da52f14a",
    setOriginalPriceAPI:
      "https://financialmodelingprep.com/api/v3/enterprise-values/NDAQ?apikey=242a9bb7640f1a45c2313cc3da52f14a",
    logo: otherLogo,
    type: "phone",
  },
};

export const laptopDetails = {
  hp: {
    setPriceAPI:
      "https://financialmodelingprep.com/api/v3/profile/hpe?apikey=242a9bb7640f1a45c2313cc3da52f14a",
    setOriginalPriceAPI:
      "https://financialmodelingprep.com/api/v3/enterprise-values/hpe?apikey=242a9bb7640f1a45c2313cc3da52f14a",
    logo: hpLogo,
    type: "laptop",
  },
  dell: {
    setPriceAPI:
      "https://financialmodelingprep.com/api/v3/profile/dell?apikey=242a9bb7640f1a45c2313cc3da52f14a",
    setOriginalPriceAPI:
      "https://financialmodelingprep.com/api/v3/enterprise-values/dell?apikey=242a9bb7640f1a45c2313cc3da52f14a",
    logo: dellLogo,
    type: "laptop",
  },
  microsoft: {
    setPriceAPI:
      "https://financialmodelingprep.com/api/v3/profile/mst?apikey=242a9bb7640f1a45c2313cc3da52f14a",
    setOriginalPriceAPI:
      "https://financialmodelingprep.com/api/v3/enterprise-values/msft?apikey=242a9bb7640f1a45c2313cc3da52f14a",
    logo: microsoftLogo,
    type: "laptop",
  },
  apple: {
    setPriceAPI:
      "https://financialmodelingprep.com/api/v3/profile/AAPL?apikey=242a9bb7640f1a45c2313cc3da52f14a",
    setOriginalPriceAPI:
      "https://financialmodelingprep.com/api/v3/enterprise-values/AAPL?apikey=242a9bb7640f1a45c2313cc3da52f14a",
    logo: appleLogo,
    type: "laptop",
  },
  google: {
    setPriceAPI:
      "https://financialmodelingprep.com/api/v3/profile/GOOG?apikey=242a9bb7640f1a45c2313cc3da52f14a",
    setOriginalPriceAPI:
      "https://financialmodelingprep.com/api/v3/enterprise-values/GOOG?apikey=242a9bb7640f1a45c2313cc3da52f14a",
    logo: googleLogo,
    type: "laptop",
  },
  other: {
    setPriceAPI:
      "https://financialmodelingprep.com/api/v3/profile/GOOG?apikey=242a9bb7640f1a45c2313cc3da52f14a",
    setOriginalPriceAPI:
      "https://financialmodelingprep.com/api/v3/enterprise-values/NDAQ?apikey=242a9bb7640f1a45c2313cc3da52f14a",
    logo: otherLogo,
    type: "laptop",
  },
};

export const carDetails = {
  toyota: {
    setPriceAPI:
      "https://financialmodelingprep.com/api/v3/profile/tm?apikey=242a9bb7640f1a45c2313cc3da52f14a",
    setOriginalPriceAPI:
      "https://financialmodelingprep.com/api/v3/enterprise-values/tm?apikey=242a9bb7640f1a45c2313cc3da52f14a",
    logo: toyotaLogo,
    type: "car",
  },
  honda: {
    setPriceAPI:
      "https://financialmodelingprep.com/api/v3/profile/hmc?apikey=242a9bb7640f1a45c2313cc3da52f14a",
    setOriginalPriceAPI:
      "https://financialmodelingprep.com/api/v3/enterprise-values/hmc?apikey=242a9bb7640f1a45c2313cc3da52f14a",
    logo: hondaLogo,
    type: "car",
  },
  gm: {
    setPriceAPI:
      "https://financialmodelingprep.com/api/v3/profile/gm?apikey=242a9bb7640f1a45c2313cc3da52f14a",
    setOriginalPriceAPI:
      "https://financialmodelingprep.com/api/v3/enterprise-values/gm?apikey=242a9bb7640f1a45c2313cc3da52f14a",
    logo: gmLogo,
    type: "car",
  },
  ford: {
    setPriceAPI:
      "https://financialmodelingprep.com/api/v3/profile/f?apikey=242a9bb7640f1a45c2313cc3da52f14a",
    setOriginalPriceAPI:
      "https://financialmodelingprep.com/api/v3/enterprise-values/f?apikey=242a9bb7640f1a45c2313cc3da52f14a",
    logo: fordLogo,
    type: "car",
  },
  tesla: {
    setPriceAPI:
      "https://financialmodelingprep.com/api/v3/profile/tsla?apikey=242a9bb7640f1a45c2313cc3da52f14a",
    setOriginalPriceAPI:
      "https://financialmodelingprep.com/api/v3/enterprise-values/tsla?apikey=242a9bb7640f1a45c2313cc3da52f14a",
    logo: teslaLogo,
    type: "car",
  },
  other: {
    setPriceAPI:
      "https://financialmodelingprep.com/api/v3/profile/GOOG?apikey=242a9bb7640f1a45c2313cc3da52f14a",
    setOriginalPriceAPI:
      "https://financialmodelingprep.com/api/v3/enterprise-values/NDAQ?apikey=242a9bb7640f1a45c2313cc3da52f14a",
    logo: otherLogo,
    type: "car",
  },
};
