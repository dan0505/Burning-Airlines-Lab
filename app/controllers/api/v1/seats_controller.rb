class Api::V1::SeatsController < ApplicationController
  def index
    seats = Seat.all
    if request.query_parameters.key?("flight") && Flight.exists?(id: request.query_parameters["flight"])
      seats = seats.forFlight(request.query_parameters["flight"])
    end
    if request.query_parameters.key?("user") && User.exists?(id: request.query_parameters["user"])
      seats = seats.forUser(request.query_parameters["flight"])
    end
    render json: seats
  end

  def create
  end

  def show
  end

  def destroy
  end
end
