import React from 'react';
import { Link } from 'react-router-dom';

class Flights extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flights: []
        };

    }



componentDidMount() {
    console.log("was mounted");
    const url = "/api/v1/flights";
    fetch(url)
        .then(response => {
            if (response.ok) {
                console.log("successfull");
                return response.json();
            }
            throw new Error(" Shitty Network, Sorry! ")
        })
        .then(response => this.setState({ flights : response }))
        .catch(() => this.props.history.push("/"));

}

render() {
    const { flights } = this.state;
    const allFlights = flights.map((flight, index) => (
        <div key= {index} className="col-md-6 col-lg-4">
            <h2>{ flight.departure_id }</h2>

        </div>
    ))
    return  (
        <>
        <h1> the departure id is:{flights}</h1>
        </>
    )
}




}


export default Flights;


