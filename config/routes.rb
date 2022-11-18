Rails.application.routes.draw do
  # resources :movies
  get "/movies", to: "movies#index"
  get "/movies/:id", to: "movies#show"
  post "/movies", to: "movies#create"
  patch "/movies/:id", to: "movies#update"
  delete "/movies/:id", to: "movies#destroy"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
