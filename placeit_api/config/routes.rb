Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :movies do
        resources :bookings, only: [:create]
        get 'movie_filter', on: :collection
      end
      resources :bookings, only: [:show, :index, :destroy] do
        get 'booking_filter', on: :collection
      end
    end
  end
end
