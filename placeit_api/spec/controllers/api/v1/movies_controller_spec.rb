require 'rails_helper'

describe Api::V1::MoviesController, type: :controller do
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

  it 'should show all movies' do
    5.times do
      create :movie
    end

    get :index

    expect(response.status).to eq(200)
    expect(json.length).to eq(5)
  end

  context 'filter by date' do
    before(:each) do
      create :movie
      create :movie2
      create :movie3
      create :movie4
      create :movie5
      expect(Movie.all.count).to eq(5)

    end
    it 'show 1 movie' do
      params = {
        "start_date": "29-03-2020",
        "end_date": "11-04-2020"
      }

      get :movie_filter, params: params

      expect(response.status).to eq(200)
      expect(json.length).to eq(1)
    end

    it 'show all movies' do
      params = {
        "start_date": "29-03-2020",
        "end_date": "18-05-2020"
      }
      get :movie_filter, params: params
      expect(response.status).to eq(200)
      expect(json.length).to eq(5)
    end
  end
end