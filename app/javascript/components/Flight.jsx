import React from "react";
import { Link } from "react-router-dom";

class Flight extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flight: "" };

    this.addHtmlEntities = this.addHtmlEntities.bind(this);
  }

  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    const url = `/api/v1/flights/${id}`;
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ flight: response }))
      .catch(() => this.props.history.push("/flights"));
  }

  addHtmlEntities(str) {
    return String(str)
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");
  }

  render() {
    const { flight } = this.state;
    console.log(flight);
    console.log(this.state)
    let ingredientList = "No ingredients available";
    // const total_seat = Number(flight.plane_row) * Number(flight.plane_col)
    // const booked_seats = Number(flight.booked_seats.length)

    // if (flight..length > 0) {
    //   ingredientList = recipe.ingredients
    //     .split(",")
    //     .map((ingredient, index) => (
    //       <li key={index} className="list-group-item">
    //         {ingredient}
    //       </li>
    //     ));
    // }
    const recipeInstruction = this.addHtmlEntities(flight.plane_model);

    return (
      <div className="">
        <div className="hero position-relative d-flex align-items-center justify-content-center">
          <img
            src="https://images.unsplash.com/photo-1483450388369-9ed95738483c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            alt={`${flight.id} image`}
            className="img-fluid position-absolute"
          />
          <div></div>
          <div className="overlay bg-dark position-absolute" />
          <h1 className="display-4 position-relative text-white">
            {flight.name}
          </h1>
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="col-sm-12 col-lg-3">
              <ul className="list-group">
                <h5 className="mb-2">Plane Layout</h5>
                {ingredientList}
              </ul>
            </div>
            <div className="col-sm-12 col-lg-7">
              <h5 className="mb-2">Preparation Instructions</h5>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${recipeInstruction}`
                }}
              />
            </div>
            <div className="col-sm-12 col-lg-2">
              <button type="button" className="btn btn-danger">
                Delete Flight
              </button>
            </div>
          </div>
          <Link to="/flights" className="btn btn-link">
            Back to flights
          </Link>
        </div>
      </div>
    );
  }

}

export default Flight;