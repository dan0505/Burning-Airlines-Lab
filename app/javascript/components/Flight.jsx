import React from "react";
import { Link } from "react-router-dom";
import Plane from "./Plane";

class Flight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flight: "",
    };

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
      .then(response => this.setState({ flight: response })
      )
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
    console.log(this.state);
    let ingredientList = "place holder";
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

    var sectionStyle = {
      backgroundImage:
        "url(https://images.unsplash.com/photo-1483450388369-9ed95738483c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)",
      backgroundSize: "cover",
      overflow: "hidden",
      width: "100%",
      height: "300px"
    };

    var jumbotronStyle = {
      backgroundColor: "rgba(255, 255, 255, 0.7)",
      // width: "70%",
      // margin: "auto"
    };

    return (
      <div className="">
        <div style={sectionStyle} className="align-items-center justify-content-center">
          <div
            className="rounded"
            style={jumbotronStyle}
          >
            <div className="container secondary-color">
              <h3 className="display-8 mr-3 ml-3">BA{flight.id}</h3>
              <h3 className="display-8 mr-3 ml-3">From:</h3>
              <h3 className="display-8 mr-3 ml-3">{flight.dep_airport} {"("}{flight.dep_code}{")"}</h3>
              <h3 className="display-8 mr-3 ml-3">To:</h3>
              <h3 className="display-8 mr-3 ml-3">{flight.arr_airport} {"("}{flight.arr_code}{")"}</h3>
              <h3 className="display-8 mr-3 ml-3">At:</h3>
              <h3 className="display-8 mr-3 ml-3">{flight.date}</h3>
              <p className="lead mr-3 ml-3 text-center">
                placeholder
              </p>
              <hr className="my-4" />
              <div className="text-center">
              </div>
            </div>
          </div>
        </div>
        <h1 className="display-4 position-relative text-white">
          {flight.name}
        </h1>
        <div className="container py-5">
          <div className="row">
            <Plane flight={this.state.flight} />
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
            {/* <div className="col-sm-12 col-lg-2">
              <button type="button" className="btn btn-danger">
                Delete Flight
              </button>
            </div> */}
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
