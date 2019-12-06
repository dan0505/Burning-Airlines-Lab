import React from "react";
import Seat from "./Seat"

class Plane extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    
    const seatRow = (row, col) => {
      let rowLetter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
      rowLetter = rowLetter.slice(0, col);
      let seat_row = []
      console.log("passed in row are", seat_row)
      rowLetter.forEach(val =>seat_row.push(Seat(row, val,val))
      )

      return seat_row
    }

    return (
      <div className={`plane-${ this.props.flight.plane_model }`}>
        <div>row: {this.props.flight.plane_row}</div>
        <div>col: {this.props.flight.plane_col}</div>
        {
          Number(this.props.flight.plane_col) > 0 &&
          seatRow(Number(this.props.flight.plane_row), Number(this.props.flight.plane_col))
        }
      </div>
    )
  }
}

export default Plane;