Rails.application.routes.draw do
  resources :clients
  resources :reservations
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  get "checkout", to: "checkouts#show"
  get "billing", to: "billing#show"

  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/clientReservations", to:"clients#showReservationsForClient"

  # Defines the root path route ("/")
  # root "articles#index"
end
