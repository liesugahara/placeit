class Api::V1::MoviesController < ApplicationController

  def index
    date = Date.strptime(params[:date], '%d-%m-%Y')

    @movies = Movie.where("start_date <= ?", date).where("end_date >= ?", date)
    @movies.each do |movie|
      movie.fully_booked == true if movie.is_fully_booked?(params[:reservation_date])
    end
    render json: @movies
  end

  def create
    @movie = Movie.new(movie_params)
    if @movie.save
      render json: @movie
    else
      render error: {error: @movie.errors.full_messages}, status: 400
    end
  end

  def show
    @movie = Movie.find(params[:id])
    render json: @movie
  end

  private
  def movie_params
    params.require(:movie).permit(:name, :description, :photo_url, :start_date, :end_date)
  end
end
