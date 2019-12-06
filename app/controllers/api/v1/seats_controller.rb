class Api::V1::SeatsController < ApplicationController
  skip_before_action :verify_authenticity_token

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
    seat = Seat.new(seat_params)
    if seat.save!
      render json: seat
    else
      render json: "Failed"
    end
  end

  def show
  end

  def destroy
  end

  private

  def seat_params
    params.permit(:id, :user_id, :flight_id, :seat_row, :seat_col)
  end
end
