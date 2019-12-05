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
    const url = "/api/v1/flights";
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(" Shitty Network, Sorry! ")
        })
        .then(response => this.setState({ flights = response }))
        .catch(() => this.props.history.push("/"));

}

render() {
    return  flights
}




}


export default Flights;


