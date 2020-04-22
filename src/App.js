import React from "react";
import { Route, Switch } from "react-router-dom";

// Components
import Home from "./pages/Home";
import PhoneSelector from "./pages/PhoneSelector";
import { phoneDetails } from "./pages/PhoneHelpers";
import { PageWrapper } from "./App.styles";

const App = () => {
  return (
    <PageWrapper>
      <Route exact path="/" render={() => <Home></Home>}></Route>
      <Switch>
        <Route
          exact
          path="/apple"
          render={() => (
            <PhoneSelector phoneKey={phoneDetails.apple}></PhoneSelector>
          )}
        ></Route>
        <Route
          exact
          path="/google"
          render={() => (
            <PhoneSelector phoneKey={phoneDetails.google}></PhoneSelector>
          )}
        ></Route>
        <Route
          exact
          path="/samsung"
          render={() => (
            <PhoneSelector phoneKey={phoneDetails.samsung}></PhoneSelector>
          )}
        ></Route>
      </Switch>
    </PageWrapper>
  );
};

export default App;
