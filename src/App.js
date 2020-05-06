import React from "react";
import MainPage from "./pages/MainPage/MainPage";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <MainPage />
    </Router>
  );
};

export default App;
