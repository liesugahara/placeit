require 'rails_helper'
# require 'rspec/its'

describe Api::V1::MoviesController, type: :controller do
  # it 'should create a movie' do
  #   movies = create(:movie)
  #   expect(movies).to eq(true)
  # end

  it 'should create a movie' do
    movie_params = {
      name: 'El hombre de acero',
      description: 'Mientras lucha con las repercusiones de su origen y sus habilidades extraordinarias, el joven Clark Kent debe convertirse en un héroe y salvar a las personas que ama de una grave amenaza.',
      photo_url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS37PwbA1qkHX8GglZqS9K-0RvuXC5Wlmn-RnH1geNR2N9uD_ei',
      start_date: '31/03/2020',
      end_date: '07/04/2020'
    }
    post :create, params: {movie: movie_params}

    expect(response.status).to eq(200)
    movie = Movie.find(json['id'])
    expect(json['id']).to eq(movie.id)
    expect(json['name']).to eq(movie_params[:name])
    expect(json['description']).to eq(movie_params[:description])
    expect(json['photo_url']).to eq(movie_params[:photo_url])
    expect(Date.parse(json['start_date']).strftime("%d/%m/%Y")).to eq(movie_params[:start_date])
    expect(Date.parse(json['end_date']).strftime("%d/%m/%Y")).to eq(movie_params[:end_date])
  end
end