class Seat < ApplicationRecord
  belongs_to :user
  belongs_to :flight

  def self.forFlight(flight_id)
    where("flight_id = ?", flight_id)
  end

  def self.forUser(user_id)
    where("user_id = ?", user_id)
  end
end
