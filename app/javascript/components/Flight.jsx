import React from 'react';
import {Link} from 'react-router-dom';


class Flight extends React.Component {
    constructor(props) {
        super(props);
        this.state = { flight: {fleet: ""} };
        this.addHtmlEntities = this.addHtmlEntities.bind(this);
    }

    componentDidMount() {
        const {
            match: {
                params: { id }
            }
        } = this.props;

        const url = '/api/v1/show/${id}'

        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response messed up. ");
            })
            .then(response => this.setState({ flight: response }))
            .catch(() => this.props.history.push('/flights'));







    }

    addHtmlEntities(str) {
        return String(str)
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">");
      }

      render() {
          const { flight } = this.state;
          let fleetList = 'no flights available';

          if (flight.fleet.length > 0) {
              fleetList = flight.fleet
              .split(",")
              .map((fleet_item, index) => (
                  <li key={index} className="list-group-item">
                      {fleet_item}
                  </li>
              ));
          }
          const flightDeparture = this.addHtmlEntities(flight.departure_id);

          return (
              <div>
                  <h1>here is the ID: {flightDeparture}</h1>
              </div>
          )
      }












}

export default Flight;