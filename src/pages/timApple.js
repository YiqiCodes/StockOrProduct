const enterpriseValue = [
  {
    date: "2019-12-31",
  },
  {
    date: "2018-12-31",
  },
  {
    date: "2018-12-01",
  },
  {
    date: "2018-12",
  },
  {
    date: "2017-12-31",
  },
  {
    date: "2017-12-01",
  },
  {
    date: "2017-12",
  },
  {
    date: "2016-12-31",
  },
  {
    date: "2016-12-01",
  },
  {
    date: "2016-12",
  },
  {
    date: "2015-12-31",
  },
  {
    date: "2015-12-01",
  },
  {
    date: "2015-12",
  },
  {
    date: "2014-12-01",
  },
  {
    date: "2014-12",
  },
];

const test(enterpriseValue){
  let year;
  for (let x of enterpriseValue) {
    if (x.date.includes("2018")) {
      year = x.date;
      break;
    }
  }
  return year;
};


const test = (enterpriseValue) => {
  let year;
  for (let x of enterpriseValue) {
    if (x.date.includes("2018")) {
      year = x["Stock Price"];
      break;
    }
  }
  return year;
};
