class Airport < ApplicationRecord
    has_many :departure, class_name: "Flight", foreign_key: "departure_id"
    has_many :arrival, class_name: "Flight", foreign_key: "arrival_id"
end

