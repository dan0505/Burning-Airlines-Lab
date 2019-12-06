import React from "react";
import { Link } from "react-router-dom";

var sectionStyle = {
  backgroundImage: "url(https://images.unsplash.com/photo-1484848016494-33ad4fc7feef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
  backgroundSize: "cover",
  overflow: 'hidden',
}

var jumbotronStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.7)'
}

export default () => (
  <div
    className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center"
    style={sectionStyle}
  >
    <div
      className="jumbotron jumbotron-fluid rounded"
      style={jumbotronStyle}
    >
      <div className="container secondary-color">
        <h1 className="display-4 mr-3 ml-3">Bunnings Airlines</h1>
        <p className="lead mr-3 ml-3">
          Welcome to our shitty Airline......
        </p>
        <hr className="my-4" />
        <div className="text-center">
          <Link
            to="/recipes"
            className="btn btn-lg custom-button"
            role="button"
          >
            Book a Seat
        </Link>
        </div>

      </div>
    </div>
  </div>
);