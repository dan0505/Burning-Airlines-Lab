import React from "react";

function Seat(row, imgLink, seat_id) {
  return (
    <span key={`seat_${row}${seat_id}`}>

      <img
        src={`url(${imgLink})`}
        height={20}
        width={20}
        mode="fit"
        alt={`seat_${row}${seat_id}`}
      />
      <span>{`${row}${seat_id}`}</span>
    </span>
  );
}

export default Seat;
