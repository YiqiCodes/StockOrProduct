import React from "react";
import { Route, Switch } from "react-router-dom";

// Components
import Home from "./pages/Home";
import PhonesHome from "./pages/PhonesHome";
import LaptopHome from "./pages/LaptopsHome";
import CarHome from "./pages/CarsHome";
import ProductSelector from "./pages/ProductSelector";
import {
  phoneDetails,
  laptopDetails,
  carDetails,
} from "./pages/ProductHelpers";
import { PageWrapper } from "./App.styles";

const App = () => {
  return (
    <PageWrapper>
      <Route exact path="/" render={() => <Home></Home>}></Route>
      <Switch>
        {/* phone routes */}
        <Route
          exact
          path="/phones"
          render={() => <PhonesHome></PhonesHome>}
        ></Route>
        <Route
          exact
          path="/phones/apple"
          render={() => (
            <ProductSelector productKey={phoneDetails.apple}></ProductSelector>
          )}
        ></Route>
        <Route
          exact
          path="/phones/google"
          render={() => (
            <ProductSelector productKey={phoneDetails.google}></ProductSelector>
          )}
        ></Route>
        <Route
          exact
          path="/phones/samsung"
          render={() => (
            <ProductSelector
              productKey={phoneDetails.samsung}
            ></ProductSelector>
          )}
        ></Route>
        <Route
          exact
          path="/phones/other"
          render={() => (
            <ProductSelector productKey={phoneDetails.other}></ProductSelector>
          )}
        ></Route>

        {/* laptop routes */}
        <Route
          exact
          path="/laptops"
          render={() => <LaptopHome></LaptopHome>}
        ></Route>
        <Route
          exact
          path="/laptops/hp"
          render={() => (
            <ProductSelector productKey={laptopDetails.hp}></ProductSelector>
          )}
        ></Route>
        <Route
          exact
          path="/laptops/dell"
          render={() => (
            <ProductSelector productKey={laptopDetails.dell}></ProductSelector>
          )}
        ></Route>
        <Route
          exact
          path="/laptops/microsoft"
          render={() => (
            <ProductSelector
              productKey={laptopDetails.microsoft}
            ></ProductSelector>
          )}
        ></Route>
        <Route
          exact
          path="/laptops/apple"
          render={() => (
            <ProductSelector productKey={laptopDetails.apple}></ProductSelector>
          )}
        ></Route>
        <Route
          exact
          path="/laptops/google"
          render={() => (
            <ProductSelector
              productKey={laptopDetails.google}
            ></ProductSelector>
          )}
        ></Route>
        <Route
          exact
          path="/laptops/other"
          render={() => (
            <ProductSelector productKey={laptopDetails.other}></ProductSelector>
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
