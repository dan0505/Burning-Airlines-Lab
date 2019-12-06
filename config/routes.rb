Rails.application.routes.draw do

  

  namespace :api do
    namespace :v1 do

      get 'flights/index'
      post 'flights/create'
      get '/show/:id', to: 'flights#show'
      # delete '/destroy/:id', to: 'recipes#destroy'


      # resources :airports, only: [:index, :show, :create]
      # resources :flights, only: [:index, :show, :create]
      # resources
    end
  end
  root 'home#index'
  # get '/*path' => 'home#index'
 
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
