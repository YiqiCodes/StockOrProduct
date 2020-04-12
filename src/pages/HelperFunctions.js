import React, { useState } from "react";

const [yearGoogleBought, setGoogleYearBought] = useState(0);
const getStockPrice = (stockRecords) => {
  let stockPrice;
  for (let stockYear of stockRecords) {
    if (stockYear.date.includes(yearGoogleBought.toString())) {
      stockPrice = stockYear["Stock Price"];
      break;
    }
  }
  return stockPrice;
};

export default getStockPrice;
