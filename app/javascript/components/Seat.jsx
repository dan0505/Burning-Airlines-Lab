import React from "react";

function Seat(row, imgLink, seat_id) {
  return (
    <img
      key={`seat_${row}${seat_id}`}
      src={`url(${imgLink})`}
      height={20}
      width={20}
      mode="fit"
      alt={`seat_${row}${seat_id}`}
    />
  );
}

export default Seat;
