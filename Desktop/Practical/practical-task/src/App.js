import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/index";
import Views from "./components/Blogs/view";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  return (
    <Router>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/viewall" exact component={Views}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
