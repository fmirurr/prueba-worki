import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detalle from "./views/Detalle/Detalle";
import Home from "./views/Home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/detalle/:_id">
          <Detalle />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
