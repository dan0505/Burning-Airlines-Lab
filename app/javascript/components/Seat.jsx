import React from "react";
// import { Link } from "react-router-dom";
import Popup from "reactjs-popup";

function Seat(row, img, seat_id, booked_seats, flight_id) {
  let seat_available = true;
  const rowLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  let seat_col_num = rowLetter.findIndex(val => {
    return val === seat_id;
  });
  seat_col_num = seat_col_num + 1;
  console.log("seat_num", seat_id, seat_col_num);
  booked_seats.forEach(seat_booked => {
    if (seat_booked.seat_row === row) {
      console.log("seat_id", seat_id);
      if (seat_booked.seat_col == seat_col_num) seat_available = false;
      console.log("booked");
    }
  });
  console.log(booked_seats);

  const url = `/api/v1/seats?user_id=2&flight_id=${flight_id}&seat_row=${row}&seat_col=${seat_col_num}`;
  console.log(url);
  const book_action = () => {
    fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ flight: response }))
      .catch(() => {
        window.location.reload();
      });
  };

  return (
    <span key={`seat_${row}${seat_id}`}>
      <Popup
        modal
        trigger={
          <span>
            {seat_available ? (
              <img
                src={img}
                height={20}
                width={20}
                mode="fit"
                alt={`seat_${row}${seat_id}`}
              />
            ) : (
              <span>❌</span>
            )}
            <span>{`${row}${seat_id}`}</span>
          </span>
        }
      >
        {seat_available ? (
          <div>
            <p>Are you sure you want to book seat {`${row}${seat_id}`}</p>
            <div>
              <button onClick={book_action}>Yes</button>
              <button>No</button>
              <button>Yes but for free🤑😂</button>
            </div>
          </div>
        ) : (
          <div>I'm already booked 😩</div>
        )}
      </Popup>
    </span>
  );
}

export default Seat;
