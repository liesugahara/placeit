class Api::V1::BookingsController < ApplicationController
  def index
    @bookings = Booking.all
    render json: @bookings, :include => {:movie => {:only => :name}}
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

  def booking_filter
    start_date = Date.strptime(params[:start_date], '%d-%m-%Y')
    end_date = Date.strptime(params[:end_date], '%d-%m-%Y')
    @movies = Booking.where(date: start_date..end_date+1).all
    render json: @movies, :include => {:movie => {:only => :name}}
  end

  private
  def booking_params
    params.require(:booking).permit(:name, :email, :id_number, :mobile_phone, :movie_id, :date, :filter_start, :filter_end)
  end
end
