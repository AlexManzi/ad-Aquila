Rails.application.routes.draw do
  resources :sessions
  resources :reservations
  resources :slots
  resources :stations
  resources :clients
  resources :users, only: [:create]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  get "checkout", to: "checkouts#show"
  get "billing", to: "billing#show"

  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # Defines the root path route ("/")
  # root "articles#index"
end
