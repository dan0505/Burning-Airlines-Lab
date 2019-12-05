class Api::V1::FlightsController < ApplicationController
  before_action :flight, only: [:show, :destroy]
  def index
    puts request.query_parameters
    if request.query_parameters.key?("dep")
      puts "in airport"
      airport_id = Airport.where(code: request.query_parameters["dep"]).first.id
      puts airport_id
      flights = Flight.where(departure_id: airport_id)
    else
      flights = Flight.all.order(departure_id: :asc)
    end
    render json: flights
  end

  def create
  end

  def show
    
    render json: @flight
  end

  def destroy
  end

  private

  def flight_params
    params.permit(:id, :departure, :arrival, :date, :fleet_id)
  end

  def flight
    @flight = Flight.find(params[:id])
  end
end
