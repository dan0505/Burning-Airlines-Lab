Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :airports, only: [:index, :show, :create]
      resources :flights, only: [:index, :show, :create]
      # resources
    end
  end
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
