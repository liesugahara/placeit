Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :movies do
        resources :bookings, only: [:create]
      end
      resources :bookings, only: [:show, :index, :destroy]
    end
  end
end
