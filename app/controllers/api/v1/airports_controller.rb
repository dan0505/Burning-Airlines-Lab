class Api::V1::AirportsController < ApplicationController
  before_action :airport, only: [:show, :destroy]

  def index
    airports = Airport.all.order(code: :asc)
    render json: airports
  end

  def create
  end

  def show
    render json: @airport
  end

  def destroy
  end

  private

  def airport_params
    params.permit(:id, :location, :code)
  end

  def airport
    @airport = Airport.find(params[:id])
  end
end
