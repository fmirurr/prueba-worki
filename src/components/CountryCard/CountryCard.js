import React, { Component } from "react";

export default class CountryCard extends Component {
  constructor(props) {
    super(props);
    this.Country = props.Country;
    this.NewConfirmed = props.NewConfirmed;
    this.NewDeaths = props.NewDeaths;
    this.TotalConfirmed = props.TotalConfirmed;
    this.TotalConfirmed = props.TotalConfirmed;
    this.TotalRecovered = props.TotalRecovered;
  }

  render() {
    return (
      <div className="card">
        <div>
          <h4>
            <b>{this.Country}</b>
          </h4>
        </div>
      </div>
    );
  }
}
