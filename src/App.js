import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Discover from "./components/pages/Discover";
import Search from "./components/pages/Search";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route exact path="/discover" component={Discover} />
          <Route path="/search" component={Search} />
        </div>
      </div>
    </Router>
  );
}

export default App;
