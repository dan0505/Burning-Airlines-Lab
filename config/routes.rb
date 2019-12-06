Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :airports, only: [:index, :show, :create]
      resources :flights, only: [:index, :show, :create]
      resources :seats, only: [:index, :show, :create]
    end
  end
  resources :users
  root "home#index"
  get '*path', to: 'home#index'
end
