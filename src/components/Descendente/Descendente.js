import React, { Component } from "react";
import axios from "axios";
import CountryCard from "../CountryCard/CountryCard";

export default class Descendente extends Component {
  state = {
    url: "https://api.covid19api.com/summary",
    datos: [],
  };

  componentDidMount() {
    axios.get(this.state.url).then((res) => {
      const datos = res.data.Countries;
      this.setState({ datos });
      console.log(datos);
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.datos.reverse().map((dato) => (
            <CountryCard key={dato.ID} Country={dato.Country} />
          ))}
        </ul>
      </div>
    );
  }
}
