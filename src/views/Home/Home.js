import React, { Component } from "react";
import "./Home.css";

import Ascendete from "../../components/Ascendente/Ascendete";
import Descendente from "../../components/Descendente/Descendente";

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOrdenado: true,
    };
    this.handleInvertList = this.handleInvertList.bind(this);
  }

  handleInvertList() {
    this.setState((state) => ({
      isOrdenado: !state.isOrdenado,
    }));
    console.log(this.isOrdenado);
  }

  render() {
    if (this.state.isOrdenado) {
      return (
        <div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handleInvertList}
          >
            Invertir
          </button>
          <div className="container">
            <Ascendete />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handleInvertList}
          >
            Invertir
          </button>
          <div className="container">
            <Descendente />
          </div>
        </div>
      );
    }
  }
}

export default Home;
