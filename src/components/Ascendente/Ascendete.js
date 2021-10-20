import React, { Component } from "react";
import axios from "axios";
import CountryCard from "../CountryCard/CountryCard";

export default class Ascendete extends Component {
  state = {
    url: "https://api.covid19api.com/summary",
    datos: [],
  };

  componentDidMount() {
    axios.get(this.state.url).then((res) => {
      const datos = res.data.Countries;
      this.setState({ datos });
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.datos.map((dato) => (
            <CountryCard
              key={dato.ID}
              Country={dato.Country}
              TotalConfirmed={dato.TotalConfirmed}
              TotalDeaths={dato.TotalDeaths}
              TotalRecovered={dato.TotalRecovered}
              NewConfirmed={dato.NewConfirmed}
              NewDeaths={dato.NewDeaths}
            />
          ))}
        </ul>
      </div>
    );
  }
}
