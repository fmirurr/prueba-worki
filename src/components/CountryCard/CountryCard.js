import React, { Component } from "react";

export default class CountryCard extends Component {
  constructor(props) {
    super(props);
    this.Country = props.Country;
    this.TotalConfirmed = props.TotalConfirmed;
    this.TotalDeaths = props.TotalDeaths;
    this.TotalRecovered = props.TotalRecovered;
    this.NewConfirmed = props.NewConfirmed;
    this.NewDeaths = props.NewDeaths;
  }

  render() {
    return (
      <div className="card gap-3">
        <div className="card-body">
          <h5 className="card-title">{this.Country}</h5>
          <p className="card-text">Total Confirmed: {this.TotalConfirmed}</p>
          <p className="card-text">Total Deaths: {this.TotalDeaths}</p>
          <p className="card-text">Total Recovered: {this.TotalRecovered}</p>
          <p className="card-text">New Confirmed: {this.NewConfirmed}</p>
          <p className="card-text">New Deaths: {this.NewDeaths}</p>
          <a href="#" className="btn btn-primary">
            Go Country
          </a>
        </div>
      </div>
    );
  }
}
