import React from "react";

import "./App.css";

// Components
import { PageWrapper } from "./App.styles";

// Pages
import Home from "./pages/Home";

const App = () => {
  return (
    <PageWrapper>
      <Home />
    </PageWrapper>
  );
};

export default App;
