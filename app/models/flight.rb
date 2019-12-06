class Flight < ApplicationRecord
  belongs_to :fleet, class_name: "Fleet", foreign_key: "fleet_id"
  belongs_to :departure, class_name: "Airport", foreign_key: "departure_id"
  belongs_to :arrival, class_name: "Airport", foreign_key: "arrival_id"
  has_many :seat

  validate :check_departure_and_arrival

  def self.details
    flights = all.as_json
    flights.each { |flight|
      fleet_rec = Fleet.find(flight["fleet_id"])
      flight["plane_color"] = fleet_rec.color
      flight["plane_model"] = fleet_rec.plane.model
      flight["plane_row"] = fleet_rec.plane.row
      flight["plane_col"] = fleet_rec.plane.seatsPerRow
      dep_rec = Airport.find(flight["departure_id"])
      flight["dep_airport"] = dep_rec.location
      flight["dep_code"] = dep_rec.code
      arr_rec = Airport.find(flight["arrival_id"])
      flight["arr_airport"] = arr_rec.location
      flight["arr_code"] = arr_rec.code
      booked_seats = []
      booked_seats_rec = Flight.find(flight["id"]).seat
      booked_seats_rec.each { |seat|
        booked_seats.push(seat.as_json)
      }
      flight["booked_seats"] = booked_seats
    }
    flights
  end

  def self.forFlight(flight_id)
    where("flight_id = ?", flight_id)
  end

  def check_departure_and_arrival
    if departure == arrival
      errors.add(:arrival, "can't be the same as departure")
    end
  end
end
