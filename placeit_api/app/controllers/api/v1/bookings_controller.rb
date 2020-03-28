class Api::V1::BookingsController < ApplicationController
  def index
    @bookings = Booking.all
    render json: @bookings
  end

  def create
    @booking = Booking.new(booking_params)
    if @booking.save
      render json: @booking
    else
      render error: {error: @booking.errors.full_messages}, status: 400
    end
  end

  def show
    @booking = Booking.find(params[:id])
    render json: @booking
  end

  private
  def booking_params
    params.require(:movie).permit(:name, :email, :date, :id_number, mobile_phone, :movie_id)
  end
end
