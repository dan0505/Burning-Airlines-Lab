import React from "react";
import Seat from "./Seat"
import im_seat from "images/im_seat.jpeg"

class Plane extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const booked_seat = this.props.flight.booked_seats;
    const flight_id = this.props.flight.id;
    
    const seatRow = (row, col) => {
      let rowLetter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
      rowLetter = rowLetter.slice(0, col);
      let seat_row = [];
      console.log("passed in row are", seat_row)
      rowLetter.forEach(val => seat_row.push(Seat(row, im_seat, val, booked_seat, flight_id))
      )
      return seat_row
    }

    const seats = (row, col) => {
      console.log("rows are", row);
      let seats = [...Array(row+1).keys()].slice(1);
      console.log(seats);
      let rows = [];
      seats.forEach((val) => {
        console.log("going in loop", val);
        rows.push(<div key={`seat_row_${val}`}>{seatRow(val, col)}</div>);
      })
      return rows
    }

    return (
      <div className={`plane-${ this.props.flight.plane_model }`}>
        <div>row: {this.props.flight.plane_row}</div>
        <div>col: {this.props.flight.plane_col}</div>
        {
          Number(this.props.flight.plane_col) > 0 &&
          seats(Number(this.props.flight.plane_row), Number(this.props.flight.plane_col))
        }
      </div>
    )
  }
}

export default Plane;