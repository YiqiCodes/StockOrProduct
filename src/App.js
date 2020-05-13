import React from "react";
import { Route, Switch } from "react-router-dom";

// Components
import Home from "./pages/Home";
import CarHome from "./pages/CarHome";
import ProductSelector from "./pages/ProductSelector";
import { phoneDetails, carDetails } from "./pages/ProductHelpers";
import { PageWrapper } from "./App.styles";

const App = () => {
  return (
    <PageWrapper>
      <Route exact path="/" render={() => <Home></Home>}></Route>
      <Switch>
        {/* phone routes */}
        <Route
          exact
          path="/apple"
          render={() => (
            <ProductSelector productKey={phoneDetails.apple}></ProductSelector>
          )}
        ></Route>
        <Route
          exact
          path="/google"
          render={() => (
            <ProductSelector productKey={phoneDetails.google}></ProductSelector>
          )}
        ></Route>
        <Route
          exact
          path="/samsung"
          render={() => (
            <ProductSelector
              productKey={phoneDetails.samsung}
            ></ProductSelector>
          )}
        ></Route>

        {/* car routes */}
        <Route exact path="/cars" render={() => <CarHome></CarHome>}></Route>
        <Route
          exact
          path="/cars/toyota"
          render={() => (
            <ProductSelector productKey={carDetails.toyota}></ProductSelector>
          )}
        ></Route>
        <Route
          exact
          path="/cars/honda"
          render={() => (
            <ProductSelector productKey={carDetails.honda}></ProductSelector>
          )}
        ></Route>
        <Route
          exact
          path="/cars/gm"
          render={() => (
            <ProductSelector productKey={carDetails.gm}></ProductSelector>
          )}
        ></Route>
        <Route
          exact
          path="/cars/ford"
          render={() => (
            <ProductSelector productKey={carDetails.ford}></ProductSelector>
          )}
        ></Route>
        <Route
          exact
          path="/cars/tesla"
          render={() => (
            <ProductSelector productKey={carDetails.tesla}></ProductSelector>
          )}
        ></Route>
        <Route
          exact
          path="/cars/other"
          render={() => (
            <ProductSelector productKey={carDetails.other}></ProductSelector>
          )}
        ></Route>
      </Switch>
    </PageWrapper>
  );
};

export default App;
