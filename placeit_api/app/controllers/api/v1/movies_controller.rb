class Api::V1::MoviesController < ApplicationController
  def index
    @movies = Movie.all
    @movies.each do |movie|
      movie.is_fully_booked?
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

  def movie_filter
    start_date = Date.strptime(params[:start_date], '%d-%m-%Y')
    end_date = Date.strptime(params[:end_date], '%d-%m-%Y')
    @movies = Movie.where("start_date >= ?", start_date).where("end_date <= ?", end_date).all
    render json: @movies
  end

  private
  def movie_params
    params.require(:movie).permit(:name, :description, :photo_url, :start_date, :end_date)
  end
end
