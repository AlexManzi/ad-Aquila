Rails.application.routes.draw do
  resources :planpacks
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
  post "/create-checkout-session", to: "planpacks#add_plan"

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
  !request.xhr? && request.format.html?
end

  # Defines the root path route ("/")
  # root "articles#index"
end
