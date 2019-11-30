class Flight < ApplicationRecord
    belongs_to :fleet, class_name: "Fleet", foreign_key: "fleet_id"
    belongs_to :departure, class_name: "Airport", foreign_key: "departure_id"
    belongs_to :arrival, class_name: "Airport", foreign_key: "arrival_id"

    validate :check_departure_and_arrival

    def check_departure_and_arrival
        if departure == arrival
            errors.add(:arrival, "can't be the same as departure")
        end
    end
end
