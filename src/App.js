import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Checkup from "./components/Checkup";
import PackageDetail from "./components/PackageDetail";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Switch>
          <Route path="/package-detail">
            <PackageDetail />
          </Route>
          {/* This is the default route */}
          <Route path="/">
            <Header />
            <Checkup />
            <Body />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
