import React, { Component } from "react";
import "./Home.css";

import Ascendete from "../../components/Ascendente/Ascendete";
import Descendente from "../../components/Descendente/Descendente";

export class Home extends Component {
  render() {
    return (
      <div>
        <h1>asjdiasoi</h1>
        <div className="container">
          <div>
            <Ascendete />
          </div>
          <div>
            <Descendente />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
