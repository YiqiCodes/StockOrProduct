import React from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";

// Components
import { PageWrapper } from "./App.styles";

// Pages
import Home from "./pages/Home";
import ApplePhone from "./pages/ApplePhone";
import GooglePhone from "./pages/GooglePhone";
import SamsungPhone from "./pages/SamsungPhone";

const App = () => {
  return (
    <PageWrapper>
      <Route exact path="/" render={() => <Home></Home>}></Route>
      <Switch>
        <Route
          exact
          path="/apple"
          render={() => <ApplePhone></ApplePhone>}
        ></Route>
        <Route
          exact
          path="/google"
          render={() => <GooglePhone></GooglePhone>}
        ></Route>
        <Route
          exact
          path="/samsung"
          render={() => <SamsungPhone></SamsungPhone>}
        ></Route>
      </Switch>
    </PageWrapper>
  );
};

export default App;
