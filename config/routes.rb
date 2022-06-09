Rails.application.routes.draw do
  resources :workouts
  resources :diets
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"


  post '/login',to: "sessions#login"
end
