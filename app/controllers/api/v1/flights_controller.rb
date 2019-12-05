class Api::V1::FlightsController < ApplicationController
  before_action :flight, only: [:show, :destroy]
  def index
    flights = Flight.all.order(departure_id: :asc)
    if request.query_parameters.key?("dep")
      airport_id = Airport.where(code: request.query_parameters["dep"]).first.id
      flights = flights.where(departure_id: airport_id)
    end
    if request.query_parameters.key?("arr")
      airport_id = Airport.where(code: request.query_parameters["arr"]).first.id
      flights = flights.where(arrival_id: airport_id)
    end
    render json: replace_ids(flights)
  end

  def create
  end

  def show
    
    render json: @flight
  end

  def destroy
  end

  private
  def replace_ids(flights)
    airports = Airport.all
    airport_obj = {}
    airports.each { |airport|
      airport_obj[airport.id] = airport.code
    }
    
    flight_list = []
    flights.each{ |flight|
      flight_obj = {}
      flight_obj = flight.as_json
      flight_obj["departure_airport"] = airport_obj[flight.departure_id]
      flight_obj["arrival_airport"] = airport_obj[flight.arrival_id]
      flight_list.push(flight_obj)
    }
    flight_list
  end


  def flight_params
    params.permit(:id, :departure, :arrival, :date, :fleet_id)
  end

  def flight
    @flight = Flight.find(params[:id])
  end
end
