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
      .then(response => this.setState({ flights: response }))
      .catch(() => this.props.history.push("/"));
  }

  render() {

    const { flights } = this.state;
    console.log(flights)
    const allFlights = flights.map((flight, index) => (
      <div key={index} className="col-md-6 col-lg-4">
        <div className="card mb-4">
          <img
            src="https://home.bt.com/images/passenger-plane-landed-in-hudson-river-136395463010202601-150114153840.jpg"
            className="card-img-top"
            alt={`${flight.id} image`}
          />

          <div className="card-body">
            <h5 className="card-title">{flight.id} - {flight.dep_code} ➡ {flight.arr_code}</h5>
            <div>{flight.plane_color} - {flight.plane_model}</div>
            <div>{Number(flight.plane_col) * Number(flight.plane_row)} 💺 in-total, {Number(flight.plane_col) * Number(flight.plane_row) - flight.booked_seats.length} available</div>
            <Link to={`/flight/${flight.id}`} className="btn custom-button">
              Goto Flight
            </Link>
          </div>
        </div>
      </div>
    ));
    const noFlight = (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h4>
          No Flight available. Why not <Link to="/new_flight">create one and flight it yourself</Link>
        </h4>
      </div>
    );

    var sectionStyle = {
      backgroundImage: "url(https://images.unsplash.com/photo-1484848016494-33ad4fc7feef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
      backgroundSize: "cover",
      overflow: 'hidden',
    }
    var jumbotronStyle = {
      backgroundColor: 'rgba(255, 255, 255, 0.7)'
    }

    return (
      <>
        <section className="jumbotron jumbotron-fluid text-center" style={sectionStyle}>
          <div className="container py-5 rounded" style={jumbotronStyle}>
            <h1 className="display-4">Flights for every destinations</h1>
            <p className="lead text-muted">
              We only fly the hotest people to the hotest destinations
            </p>
          </div>
        </section>
        <div className="py-5">
          <main className="container">
            <div className="row">
              {flights.length > 0 ? allFlights : noFlight}
            </div>
            <div className="text-right mb-3">
              <Link to="/flight" className="btn custom-button">
                Can you fly?
              </Link>
            </div>
            <Link to="/" className="btn btn-link">
              Home
            </Link>
          </main>
        </div>
      </>
    );
  }
}
export default Flights;


