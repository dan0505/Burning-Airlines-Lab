# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Plane.create(model: "Boeing 777", row: 25, seatsPerRow: 9)
Plane.create(model: "Airbus A320", row: 20, seatsPerRow: 6)

Fleet.create(plane_id: Plane.where("model = 'Boeing 777'").first.id, color: "White")
Fleet.create(plane_id: Plane.where("model = 'Boeing 777'").first.id, color: "Red")
Fleet.create(plane_id: Plane.where("model = 'Airbus A320'").first.id, color: "Green")
Fleet.create(plane_id: Plane.where("model = 'Airbus A320'").first.id, color: "Yellow")

Airport.create(location: "Sydney (Kingsford Smith) Airport", code: "SYD")
Airport.create(location: "Melbourne Airport", code: "MEL")

Flight.create(departure_id: Airport.where("code= 'SYD'").first.id, arrival_id: Airport.where("code= 'MEL'").first.id, date: DateTime.new(2019, 8, 29, 12, 35, 00), fleet_id: 1)
Flight.create(departure_id: Airport.where("code= 'MEL'").first.id, arrival_id: Airport.where("code= 'SYD'").first.id, date: DateTime.new(2019, 8, 29, 16, 35, 00), fleet_id: 1)
