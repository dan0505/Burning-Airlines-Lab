class Fleet < ApplicationRecord
    # the actuale plane which reference from plane model for details (rows, seats/row etc)
    belongs_to :plane
    has_many :fleet, class_name: "Flight", foreign_key: "fleet_id"
end
